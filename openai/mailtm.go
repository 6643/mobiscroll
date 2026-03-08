package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"regexp"
	"strings"
	"time"
)

func mailTmDomains(client *http.Client) ([]string, error) {
	req, _ := http.NewRequest("GET", mailTmBase+"/domains", nil)
	req.Header.Set("Accept", "application/json")
	req.Header.Set("User-Agent", userAgent)
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	if resp.StatusCode != 200 {
		return nil, fmt.Errorf("获取域名失败: %d", resp.StatusCode)
	}
	var data interface{}
	if err := json.NewDecoder(resp.Body).Decode(&data); err != nil {
		return nil, err
	}

	var domains []string
	var items []interface{}

	switch v := data.(type) {
	case []interface{}:
		items = v
	case map[string]interface{}:
		if member, ok := v["hydra:member"]; ok {
			items, _ = member.([]interface{})
		} else if its, ok := v["items"]; ok {
			items, _ = its.([]interface{})
		}
	}

	for _, item := range items {
		if m, ok := item.(map[string]interface{}); ok {
			domain, _ := m["domain"].(string)
			isActive, _ := m["isActive"].(bool)
			isPrivate, _ := m["isPrivate"].(bool)
			if domain != "" && isActive && !isPrivate {
				domains = append(domains, domain)
			}
		}
	}

	if len(domains) == 0 {
		return nil, fmt.Errorf("没有可用域名")
	}
	return domains, nil
}

func getEmailAndToken(client *http.Client) (email, token string, err error) {
	domains, err := mailTmDomains(client)
	if err != nil {
		return "", "", err
	}
	domain := domains[randomInt(0, len(domains)-1)]

	for i := 0; i < 5; i++ {
		local := "oc" + randomHex(5)
		email = local + "@" + domain
		password := randomBase64URL(18)

		createData := map[string]string{"address": email, "password": password}
		createBody, _ := json.Marshal(createData)
		req, _ := http.NewRequest("POST", mailTmBase+"/accounts", strings.NewReader(string(createBody)))
		req.Header.Set("Content-Type", "application/json")
		req.Header.Set("Accept", "application/json")
		req.Header.Set("User-Agent", userAgent)
		resp, err := client.Do(req)
		if err != nil {
			continue
		}
		resp.Body.Close()
		if resp.StatusCode != 200 && resp.StatusCode != 201 {
			continue
		}

		tokenData := map[string]string{"address": email, "password": password}
		tokenBody, _ := json.Marshal(tokenData)
		req, _ = http.NewRequest("POST", mailTmBase+"/token", strings.NewReader(string(tokenBody)))
		req.Header.Set("Content-Type", "application/json")
		req.Header.Set("Accept", "application/json")
		req.Header.Set("User-Agent", userAgent)
		resp, err = client.Do(req)
		if err != nil {
			continue
		}
		defer resp.Body.Close()
		if resp.StatusCode == 200 {
			var result map[string]interface{}
			if err := json.NewDecoder(resp.Body).Decode(&result); err == nil {
				if t, ok := result["token"].(string); ok && t != "" {
					return email, t, nil
				}
			}
		}
	}
	return "", "", fmt.Errorf("无法创建邮箱或获取 token")
}

func getOAICode(client *http.Client, token, email string) (string, error) {
	msgListURL := mailTmBase + "/messages"
	codeRegex := regexp.MustCompile(`(?:^|[^0-9])([0-9]{6})(?:[^0-9]|$)`)
	seenIDs := make(map[string]bool)

	fmt.Printf("[*] 正在等待邮箱 %s 的验证码...", email)
	for i := 0; i < 40; i++ {
		fmt.Print(".")
		time.Sleep(3 * time.Second)

		req, _ := http.NewRequest("GET", msgListURL, nil)
		req.Header.Set("Authorization", "Bearer "+token)
		req.Header.Set("Accept", "application/json")
		req.Header.Set("User-Agent", userAgent)
		resp, err := client.Do(req)
		if err != nil || resp.StatusCode != 200 {
			continue
		}
		var data map[string]interface{}
		json.NewDecoder(resp.Body).Decode(&data)
		resp.Body.Close()

		var messages []interface{}
		if member, ok := data["hydra:member"]; ok {
			messages, _ = member.([]interface{})
		} else if msgs, ok := data["messages"]; ok {
			messages, _ = msgs.([]interface{})
		}

		for _, msg := range messages {
			m, ok := msg.(map[string]interface{})
			if !ok {
				continue
			}
			msgID, _ := m["id"].(string)
			if msgID == "" || seenIDs[msgID] {
				continue
			}
			seenIDs[msgID] = true

			req, _ = http.NewRequest("GET", mailTmBase+"/messages/"+msgID, nil)
			req.Header.Set("Authorization", "Bearer "+token)
			req.Header.Set("Accept", "application/json")
			req.Header.Set("User-Agent", userAgent)
			resp, err := client.Do(req)
			if err != nil || resp.StatusCode != 200 {
				continue
			}
			var mail map[string]interface{}
			json.NewDecoder(resp.Body).Decode(&mail)
			resp.Body.Close()

			from, _ := mail["from"].(map[string]interface{})
			senderAddr, _ := from["address"].(string)
			subject, _ := mail["subject"].(string)
			intro, _ := mail["intro"].(string)
			text, _ := mail["text"].(string)
			htmlObj := mail["html"]
			html := ""
			if h, ok := htmlObj.(string); ok {
				html = h
			} else if hArr, ok := htmlObj.([]interface{}); ok {
				for _, part := range hArr {
					html += fmt.Sprint(part) + "\n"
				}
			}
			content := subject + "\n" + intro + "\n" + text + "\n" + html

			if !strings.Contains(strings.ToLower(senderAddr), "openai") && !strings.Contains(strings.ToLower(content), "openai") {
				continue
			}

			if matches := codeRegex.FindStringSubmatch(content); len(matches) > 1 {
				fmt.Println(" 抓到啦! 验证码:", matches[1])
				return matches[1], nil
			}
		}
	}
	fmt.Println(" 超时，未收到验证码")
	return "", fmt.Errorf("验证码超时")
}
