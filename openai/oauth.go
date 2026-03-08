package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strings"
	"time"
)

type OAuthStart struct {
	AuthURL      string
	State        string
	CodeVerifier string
	RedirectURI  string
}

type CallbackResult struct {
	Code      string
	State     string
	Error     string
	ErrorDesc string
}

func generateOAuthURL() OAuthStart {
	state := randomState(16)
	codeVerifier := pkceVerifier()
	codeChallenge := sha256B64URLNoPad(codeVerifier)

	params := url.Values{
		"client_id":                  {clientID},
		"response_type":              {"code"},
		"redirect_uri":               {defaultRedirectURI},
		"scope":                      {defaultScope},
		"state":                      {state},
		"code_challenge":             {codeChallenge},
		"code_challenge_method":      {"S256"},
		"prompt":                     {"login"},
		"id_token_add_organizations": {"true"},
		"codex_cli_simplified_flow":  {"true"},
	}
	authURLStr := authURL + "?" + params.Encode()
	return OAuthStart{
		AuthURL:      authURLStr,
		State:        state,
		CodeVerifier: codeVerifier,
		RedirectURI:  defaultRedirectURI,
	}
}

func submitCallbackURL(client *http.Client, callbackURL, expectedState, codeVerifier, redirectURI string) (string, error) {
	cb := parseCallbackURL(callbackURL)
	if cb.Error != "" {
		return "", fmt.Errorf("oauth error: %s: %s", cb.Error, cb.ErrorDesc)
	}
	if cb.Code == "" || cb.State == "" {
		return "", fmt.Errorf("callback url missing code or state")
	}
	if cb.State != expectedState {
		return "", fmt.Errorf("state mismatch")
	}

	data := map[string]string{
		"grant_type":    "authorization_code",
		"client_id":     clientID,
		"code":          cb.Code,
		"redirect_uri":  redirectURI,
		"code_verifier": codeVerifier,
	}
	tokenResp, err := postForm(client, tokenURL, data)
	if err != nil {
		return "", err
	}

	accessToken, _ := tokenResp["access_token"].(string)
	refreshToken, _ := tokenResp["refresh_token"].(string)
	idToken, _ := tokenResp["id_token"].(string)
	expiresIn := toInt(tokenResp["expires_in"])

	claims := jwtClaimsNoVerify(idToken)
	email, _ := claims["email"].(string)
	authClaims, _ := claims["https://api.openai.com/auth"].(map[string]interface{})
	accountID, _ := authClaims["chatgpt_account_id"].(string)

	now := time.Now().Unix()
	expired := time.Unix(now+int64(expiresIn), 0).UTC().Format(time.RFC3339)
	nowRFC := time.Unix(now, 0).UTC().Format(time.RFC3339)

	config := map[string]interface{}{
		"id_token":      idToken,
		"access_token":  accessToken,
		"refresh_token": refreshToken,
		"account_id":    accountID,
		"last_refresh":  nowRFC,
		"email":         email,
		"type":          "codex",
		"expired":       expired,
	}
	result, _ := json.Marshal(config)
	return string(result), nil
}

func parseCallbackURL(callbackURL string) CallbackResult {
	u, err := url.Parse(callbackURL)
	if err != nil {
		return CallbackResult{}
	}
	query := u.Query()
	if u.Fragment != "" {
		fragQuery, _ := url.ParseQuery(u.Fragment)
		for k, v := range fragQuery {
			if query.Get(k) == "" {
				query[k] = v
			}
		}
	}

	code := query.Get("code")
	state := query.Get("state")
	if code != "" && state == "" && strings.Contains(code, "#") {
		parts := strings.SplitN(code, "#", 2)
		code = parts[0]
		state = parts[1]
	}

	return CallbackResult{
		Code:      code,
		State:     state,
		Error:     query.Get("error"),
		ErrorDesc: query.Get("error_description"),
	}
}

func postForm(client *http.Client, urlStr string, data map[string]string) (map[string]interface{}, error) {
	form := url.Values{}
	for k, v := range data {
		form.Set(k, v)
	}
	req, _ := http.NewRequest("POST", urlStr, strings.NewReader(form.Encode()))
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	req.Header.Set("Accept", "application/json")
	req.Header.Set("User-Agent", userAgent)

	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)
	if resp.StatusCode != 200 {
		return nil, fmt.Errorf("请求失败: %d: %s", resp.StatusCode, string(body))
	}
	var result map[string]interface{}
	json.Unmarshal(body, &result)
	return result, nil
}
