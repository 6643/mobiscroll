package main

import (
	"fmt"
	"io"
	"net/http"
	"strings"
)

func main() {

	resp, err := http.Get("https://cloudflare.com/cdn-cgi/trace")

	if err != nil {
		fmt.Println(err)
		return
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)
	ip := parseIp(string(body))
	fmt.Println("Parsed IP:", ip)

}

func parseIp(str string) string {
	for line := range strings.SplitSeq(str, "\n") {
		line = strings.TrimSpace(line)
		if after, ok := strings.CutPrefix(line, "ip="); ok {
			return after
		}
	}
	return ""
}
