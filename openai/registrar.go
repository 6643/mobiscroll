package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"regexp"
	"strings"
)

func checkIPLocation(client *http.Client) bool {
	resp, err := client.Get("https://cloudflare.com/cdn-cgi/trace")
	if err != nil {
		fmt.Printf("[Error] 网络连接检查失败: %v\n", err)
		return false
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)
	re := regexp.MustCompile(`(?m)^loc=(.+)$`)
	matches := re.FindSubmatch(body)
	if len(matches) < 2 {
		return false
	}
	loc := string(matches[1])
	fmt.Printf("[*] 当前 IP 所在地: %s\n", loc)
	blocked := map[string]bool{"CN": true, "HK": true, "RU": true, "KP": true, "IR": true}
	if blocked[loc] {
		fmt.Println("[Error] 检查代理哦w - 所在地不支持")
		return false
	}
	return true
}

func getSentinelVersion(client *http.Client) string {
	resp, err := client.Get("https://sentinel.openai.com/backend-api/sentinel/frame.html")
	if err != nil {
		fmt.Printf("[Warn] 无法自动获取 Sentinel 版本，将使用默认值\n")
		return "20260219f9f6"
	}
	defer resp.Body.Close()
	if sv := resp.Request.URL.Query().Get("sv"); sv != "" {
		return sv
	}
	body, _ := io.ReadAll(resp.Body)
	re := regexp.MustCompile(`sv=([a-z0-9]+)`)
	if matches := re.FindSubmatch(body); len(matches) > 1 {
		return string(matches[1])
	}
	return "20260219f9f6"
}

func run(proxy string) (string, error) {
	client := newHTTPClient(proxy)

	if !checkIPLocation(client) {
		return "", fmt.Errorf("IP 所在地不支持")
	}

	email, devToken, err := getEmailAndToken(client)
	if err != nil {
		return "", err
	}
	fmt.Printf("[*] 成功获取 Mail.tm 邮箱与授权: %s\n", email)

	oauth := generateOAuthURL()
	resp, err := client.Get(oauth.AuthURL)
	if err != nil {
		return "", err
	}
	resp.Body.Close()

	did := ""
	u, _ := url.Parse("https://auth.openai.com")
	for _, c := range client.Jar.Cookies(u) {
		if c.Name == "oai-did" {
			did = c.Value
			break
		}
	}
	if did == "" {
		did = "88888888-4444-4444-4444-121212121212" // fallback
	}
	fmt.Printf("[*] Device ID: %s\n", did)

	sv := getSentinelVersion(client)
	fmt.Printf("[*] 自动获取 Sentinel 版本: %s\n", sv)

	senReqBody := fmt.Sprintf(`{"p":"","id":"%s","flow":"authorize_continue"}`, did)
	req, _ := http.NewRequest("POST", "https://sentinel.openai.com/backend-api/sentinel/req", strings.NewReader(senReqBody))
	req.Header.Set("Origin", "https://sentinel.openai.com")
	req.Header.Set("Referer", fmt.Sprintf("https://sentinel.openai.com/backend-api/sentinel/frame.html?sv=%s", sv))
	req.Header.Set("Content-Type", "text/plain;charset=UTF-8")
	req.Header.Set("User-Agent", userAgent)
	senResp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	if senResp.StatusCode != 200 {
		body, _ := io.ReadAll(senResp.Body)
		senResp.Body.Close()
		fmt.Printf("[Error] Sentinel 异常拦截，状态码: %d. 响应内容: %s\n", senResp.StatusCode, string(body))
		return "", fmt.Errorf("Sentinel 拦截")
	}
	var senResult map[string]interface{}
	json.NewDecoder(senResp.Body).Decode(&senResult)
	senResp.Body.Close()
	senToken, _ := senResult["token"].(string)
	if senToken == "" {
		return "", fmt.Errorf("Sentinel 请求未返回 token")
	}

	sentinel := fmt.Sprintf(`{"p": "", "t": "", "c": "%s", "id": "%s", "flow": "authorize_continue"}`, senToken, did)
	signupBody := fmt.Sprintf(`{"username":{"value":"%s","kind":"email"},"screen_hint":"signup"}`, email)
	req, _ = http.NewRequest("POST", "https://auth.openai.com/api/accounts/authorize/continue", strings.NewReader(signupBody))
	req.Header.Set("Referer", "https://auth.openai.com/create-account")
	req.Header.Set("Accept", "application/json")
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("openai-sentinel-token", sentinel)
	req.Header.Set("User-Agent", userAgent)
	resp, err = client.Do(req)
	if err != nil {
		return "", err
	}
	resp.Body.Close()
	fmt.Printf("[*] 提交注册表单状态: %d\n", resp.StatusCode)

	req, _ = http.NewRequest("POST", "https://auth.openai.com/api/accounts/passwordless/send-otp", strings.NewReader("{}"))
	req.Header.Set("Referer", "https://auth.openai.com/create-account/password")
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("User-Agent", userAgent)
	resp, err = client.Do(req)
	if err != nil {
		return "", err
	}
	resp.Body.Close()
	fmt.Printf("[*] 验证码发送状态: %d\n", resp.StatusCode)

	code, err := getOAICode(client, devToken, email)
	if err != nil {
		return "", err
	}

	codeBody := fmt.Sprintf(`{"code":"%s"}`, code)
	req, _ = http.NewRequest("POST", "https://auth.openai.com/api/accounts/email-otp/validate", strings.NewReader(codeBody))
	req.Header.Set("Referer", "https://auth.openai.com/email-verification")
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("User-Agent", userAgent)
	resp, err = client.Do(req)
	if err != nil {
		return "", err
	}
	resp.Body.Close()
	fmt.Printf("[*] 验证码校验状态: %d\n", resp.StatusCode)

	createBody := randomAccountInfo()
	req, _ = http.NewRequest("POST", "https://auth.openai.com/api/accounts/create_account", strings.NewReader(createBody))
	req.Header.Set("Referer", "https://auth.openai.com/about-you")
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("User-Agent", userAgent)
	resp, err = client.Do(req)
	if err != nil {
		return "", err
	}
	status := resp.StatusCode
	resp.Body.Close()
	fmt.Printf("[*] 账户创建状态: %d\n", status)
	if status != 200 {
		body, _ := io.ReadAll(resp.Body)
		fmt.Println(string(body))
		return "", fmt.Errorf("账户创建失败")
	}

	authCookie := ""
	for _, c := range client.Jar.Cookies(u) {
		if c.Name == "oai-client-auth-session" {
			authCookie = c.Value
			break
		}
	}
	if authCookie == "" {
		return "", fmt.Errorf("未能获取到授权 Cookie")
	}

	claims := decodeJwtSegment(strings.Split(authCookie, ".")[0])
	workspaces, _ := claims["workspaces"].([]interface{})
	if len(workspaces) == 0 {
		return "", fmt.Errorf("没有 workspace 信息")
	}
	ws := workspaces[0].(map[string]interface{})
	wsID, _ := ws["id"].(string)

	selectBody := fmt.Sprintf(`{"workspace_id":"%s"}`, wsID)
	req, _ = http.NewRequest("POST", "https://auth.openai.com/api/accounts/workspace/select", strings.NewReader(selectBody))
	req.Header.Set("Referer", "https://auth.openai.com/sign-in-with-chatgpt/codex/consent")
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("User-Agent", userAgent)
	resp, err = client.Do(req)
	if err != nil {
		return "", err
	}
	var selectRes map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&selectRes)
	resp.Body.Close()
	continueURL, _ := selectRes["continue_url"].(string)

	currentURL := continueURL
	client.CheckRedirect = func(req *http.Request, via []*http.Request) error {
		return http.ErrUseLastResponse
	}

	for i := 0; i < 6; i++ {
		req, _ = http.NewRequest("GET", currentURL, nil)
		req.Header.Set("User-Agent", userAgent)
		resp, err = client.Do(req)
		if err != nil {
			break
		}
		resp.Body.Close()
		loc := resp.Header.Get("Location")
		if loc == "" {
			break
		}
		if !strings.HasPrefix(loc, "http") {
			currU, _ := url.Parse(currentURL)
			locU, _ := url.Parse(loc)
			loc = currU.ResolveReference(locU).String()
		}
		if strings.Contains(loc, "code=") && strings.Contains(loc, "state=") {
			return submitCallbackURL(client, loc, oauth.State, oauth.CodeVerifier, oauth.RedirectURI)
		}
		currentURL = loc
	}

	return "", fmt.Errorf("未能在重定向链中获取 Callback")
}
