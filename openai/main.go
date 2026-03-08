package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"os"
	"strings"
	"time"
)

func main() {
	var proxy string

	flag.StringVar(&proxy, "proxy", "", "代理地址，如 http://127.0.0.1:7890")
	flag.Parse()

	fmt.Println("[Info] OpenAI Auto-Registrar Started")
	fmt.Printf("[%s] >>> 开始注册流程 <<<\n", time.Now().Format("15:04:05"))

	tokenJSON, err := run(proxy)
	if err != nil {
		fmt.Printf("[-] 注册失败: %v\n", err)
		os.Exit(1)
	} else if tokenJSON != "" {
		var data map[string]interface{}
		_ = json.Unmarshal([]byte(tokenJSON), &data)
		email, _ := data["email"].(string)
		fname := strings.ReplaceAll(email, "@", "_")
		if fname == "" {
			fname = "unknown"
		}
		filename := fmt.Sprintf("token_%s_%d.json", fname, time.Now().Unix())
		if err := os.WriteFile(filename, []byte(tokenJSON), 0644); err != nil {
			fmt.Printf("[Error] 保存 token 文件失败: %v\n", err)
			os.Exit(1)
		} else {
			fmt.Printf("[*] 成功! Token 已保存至: %s\n", filename)
		}
	} else {
		fmt.Println("[-] 未能获取到 Token")
		os.Exit(1)
	}
}
