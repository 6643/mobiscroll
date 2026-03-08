package main

import (
	"net/http"
	"net/http/cookiejar"
	"net/url"
	"time"
)

const (
	mailTmBase         = "https://api.mail.tm"
	authURL            = "https://auth.openai.com/oauth/authorize"
	tokenURL           = "https://auth.openai.com/oauth/token"
	clientID           = "app_EMoamEEZ73f0CkXaXp7hrann"
	defaultRedirectURI = "http://localhost:1455/auth/callback"
	defaultScope       = "openid email profile offline_access"
	userAgent          = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)

type AccountInfo struct {
	Name      string `json:"name"`
	Birthdate string `json:"birthdate"`
}

func newHTTPClient(proxyAddr string) *http.Client {
	jar, _ := cookiejar.New(nil)
	transport := &http.Transport{
		MaxIdleConns:    10,
		IdleConnTimeout: 30 * time.Second,
	}
	if proxyAddr != "" {
		proxyURL, err := url.Parse(proxyAddr)
		if err == nil {
			transport.Proxy = http.ProxyURL(proxyURL)
		}
	}
	return &http.Client{
		Transport: transport,
		Timeout:   45 * time.Second,
		Jar:       jar,
	}
}
