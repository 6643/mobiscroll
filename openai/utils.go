package main

import (
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"math/big"
	"net"
	"strings"
	"time"
)

var firstNames = []string{"James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Christopher", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Joshua", "Sarah", "Jessica", "Susan", "Emily", "Lisa"}
var lastNames = []string{"Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin"}

func randomAccountInfo() string {
	name := firstNames[randomInt(0, len(firstNames)-1)] + " " + lastNames[randomInt(0, len(lastNames)-1)]
	year := randomInt(1980, 2004)
	month := randomInt(1, 12)
	day := randomInt(1, 28)
	birthdate := fmt.Sprintf("%04d-%02d-%02d", year, month, day)
	info := AccountInfo{Name: name, Birthdate: birthdate}
	data, _ := json.Marshal(info)
	return string(data)
}

func randomInt(min, max int) int {
	n, _ := rand.Int(rand.Reader, big.NewInt(int64(max-min+1)))
	return int(n.Int64()) + min
}

func randomState(nbytes int) string { return randomBase64URL(nbytes) }
func pkceVerifier() string         { return randomBase64URL(64) }
func sha256B64URLNoPad(s string) string {
	h := sha256.Sum256([]byte(s))
	return b64urlNoPad(h[:])
}
func b64urlNoPad(raw []byte) string {
	return strings.TrimRight(base64.URLEncoding.EncodeToString(raw), "=")
}
func randomBase64URL(length int) string {
	b := make([]byte, length)
	rand.Read(b)
	return b64urlNoPad(b)
}
func randomHex(length int) string {
	b := make([]byte, length)
	rand.Read(b)
	return fmt.Sprintf("%x", b)
}

func toInt(v interface{}) int {
	switch val := v.(type) {
	case float64:
		return int(val)
	case int:
		return val
	case int64:
		return int(val)
	default:
		return 0
	}
}

func jwtClaimsNoVerify(idToken string) map[string]interface{} {
	parts := strings.Split(idToken, ".")
	if len(parts) < 2 {
		return nil
	}
	return decodeJwtSegment(parts[1])
}

func decodeJwtSegment(seg string) map[string]interface{} {
	if l := len(seg) % 4; l > 0 {
		seg += strings.Repeat("=", 4-l)
	}
	data, err := base64.URLEncoding.DecodeString(seg)
	if err != nil {
		return nil
	}
	var m map[string]interface{}
	json.Unmarshal(data, &m)
	return m
}

func getAutoProxy() string {
	commonPorts := []int{7890, 1080, 10809, 10808, 8888}
	for _, port := range commonPorts {
		addr := fmt.Sprintf("127.0.0.1:%d", port)
		conn, err := net.DialTimeout("tcp", addr, 500*time.Millisecond)
		if err == nil {
			conn.Close()
			fmt.Printf("[Yasal 灵光一闪~] 探测到本地代理端口 %d 存活，Yasal自动帮你连上隧道穿透封锁啦！\n", port)
			return fmt.Sprintf("http://%s", addr)
		}
	}
	return ""
}
