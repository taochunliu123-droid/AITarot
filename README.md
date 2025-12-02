# PM里長伯塔羅牌 v3.0 | PM Mayors Tarot

🏘️ 里長伯幫助您用AI玩轉敏捷

## 🔧 修復項目 (v3.1)

### ✅ AI 連線問題修復
- 修正 API 路由結構（`/api/tarot.js`）
- 更新 vercel.json 配置支援 Edge Functions
- 改善錯誤訊息提示

### ✅ 手部追蹤 Hand Tracking
- 使用 MediaPipe Tasks Vision 最新版本
- 正確載入 HandLandmarker 模型
- 即時繪製手部骨架（青色連線 + 橙色關節點）
- 需要 HTTPS 環境（部署到 Vercel 後即可使用）

### ✅ 塔羅牌翻牌修復 Card Flip Fixed
- 修復了無法翻牌的問題
- 增加洗牌動畫效果
- 每張牌翻開時有粒子爆炸特效

### ✅ 中英文切換 Language Toggle
- 右上角「中文 / EN」按鈕
- 一鍵切換整個介面語言

## 🚀 部署步驟

### 步驟 1: 部署到 Vercel
1. 下載並解壓縮此專案
2. 確認 `logo.png` 存在
3. 拖放整個資料夾到 [vercel.com/new](https://vercel.com/new)
4. 等待部署完成

### 步驟 2: 設定環境變數 ⚠️ 重要！
1. 進入你的 Vercel 專案
2. 點擊 **Settings** → **Environment Variables**
3. 新增環境變數：
   - **Name:** `OPENAI_API_KEY`
   - **Value:** 你的 OpenAI API Key（以 `sk-` 開頭）
4. 點擊 **Save**
5. 重新部署（Deployments → Redeploy）

### 沒有 OpenAI API Key？
1. 前往 [platform.openai.com](https://platform.openai.com/)
2. 註冊/登入後，點擊 API Keys
3. 建立新的 API Key
4. 複製並貼到 Vercel 環境變數

## 📁 檔案結構

```
pm-mayors-tarot-v3/
├── index.html        # 完整應用
├── logo.png          # Logo 圖片
├── vercel.json       # Vercel 配置
├── README.md         # 說明文件
└── api/
    └── tarot.js      # AI API 路由 (Edge Function)
```

## 功能 Features

| 功能 | 說明 |
|------|------|
| 🖐️ 手部追蹤 | MediaPipe 即時偵測，繪製骨架 |
| 🎴 塔羅抽牌 | 22張大阿卡納，3牌陣 |
| 🤖 AI 解讀 | GPT-4o-mini 提供個人化解讀 |
| ✨ 粒子特效 | 翻牌爆炸、能量爆發、環境粒子 |
| 🌐 中英切換 | 按鈕切換，不混合顯示 |
| 📱 儲存圖片 | 手機可下載 PNG |
| 🖨️ 列印 PDF | 電腦版列印功能 |

## 常見問題

### Q: AI 顯示「API Key 未設定」
**A:** 請確認已在 Vercel Settings → Environment Variables 中設定 `OPENAI_API_KEY`，並重新部署。

### Q: AI 顯示「伺服器錯誤」
**A:** 可能原因：
- OpenAI API Key 無效或過期
- API 使用額度用完
- 檢查 Vercel Functions 日誌

### Q: 攝影機無法啟動
**A:** 需要 HTTPS 環境，本地測試請使用 `localhost`

## 技術棧

- MediaPipe Tasks Vision 0.10.14
- OpenAI GPT-4o-mini
- Vercel Edge Functions
- html2canvas 1.4.1
- 原生 JavaScript
- CSS3 動畫

## 作者

**Tao Chun Liu (PM Mayors)**  
🔗 [LinkedIn](https://www.linkedin.com/in/taochunliu/)

---

Where Taiwan AI PM Initiated 🇹🇼
