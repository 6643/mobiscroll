package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
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

	if ip != "" {
		f, err := os.OpenFile("ip.text", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
		if err == nil {
			defer f.Close()
			f.WriteString(ip + "\n")
		} else {
			fmt.Println("Failed to open ip.text:", err)
		}
	}

}

/*
fl=80f417
h=cloudflare.com
ip=111.249.78.157
ts=1772941360.629
visit_scheme=https
uag=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
colo=TPE
sliver=none
http=http/2
loc=TW
tls=TLSv1.3
sni=plaintext
warp=off
gateway=off
rbi=off
kex=X25519MLKEM768
*/

func parseIp(str string) string {
	for _, line := range strings.Split(str, "\n") {
		line = strings.TrimSpace(line)
		if strings.HasPrefix(line, "ip=") {
			return strings.TrimPrefix(line, "ip=")
		}
	}
	return ""
}
