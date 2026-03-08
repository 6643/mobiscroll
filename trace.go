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
