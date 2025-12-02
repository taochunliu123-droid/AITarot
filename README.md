# PM里長伯塔羅牌 v3.0 | PM Mayors Tarot

🏘️ 里長伯幫助您用AI玩轉敏捷

## 修復與更新 Fixes & Updates

### ✅ 手部追蹤 Hand Tracking
- 使用 MediaPipe Tasks Vision 最新版本
- 正確載入 HandLandmarker 模型
- 即時繪製手部骨架（青色連線 + 橙色關節點）
- 需要 HTTPS 環境（部署到 Vercel 後即可使用）

### ✅ 塔羅牌翻牌修復 Card Flip Fixed
- 修復了無法翻牌的問題
- 增加洗牌動畫效果
- 每張牌翻開時有粒子爆炸特效
- 能量爆發效果

### ✅ 中英文切換 Language Toggle
- 右上角「中文 / EN」按鈕
- 一鍵切換整個介面語言
- 不會同時顯示兩種語言

### ✅ 圖片儲存 Image Save
- 移除「已完成」提示訊息
- 直接觸發下載
- 相容各種瀏覽器

### ✅ LinkedIn 連結 LinkedIn Link
- 修復連結：https://www.linkedin.com/in/taochunliu/
- 點擊可正常跳轉

## 功能 Features

| 功能 | 說明 |
|------|------|
| 🖐️ 手部追蹤 | MediaPipe 即時偵測，繪製骨架 |
| 🎴 塔羅抽牌 | 22張大阿卡納，3牌陣 |
| ✨ 粒子特效 | 翻牌爆炸、能量爆發、環境粒子 |
| 🌐 中英切換 | 按鈕切換，不混合顯示 |
| 📱 儲存圖片 | 手機可下載 PNG |
| 🖨️ 列印 PDF | 電腦版列印功能 |
| ⭐ 總結解讀 | 綜合三張牌的建議 |

## 部署 Deploy

### 步驟
1. 下載並解壓縮
2. 將你的 `logo.png` 放入資料夾
3. 拖放到 [vercel.com/new](https://vercel.com/new)
4. 等待部署完成

### 為什麼需要部署？
- 攝影機 API 需要 HTTPS
- MediaPipe 模型需要網路載入
- 本地只能用 localhost 測試

## 檔案結構

```
pm-mayors-tarot-v3/
├── index.html      # 完整應用
├── logo.png        # 你的 Logo（請自行添加）
├── vercel.json     # Vercel 配置
└── README.md       # 說明文件
```

## 使用說明

1. 選擇語言（中文/EN）
2. 輸入問題（可選）
3. 點擊「啟動塔羅算法」
4. 欣賞特效並閱讀解讀
5. 儲存圖片或列印 PDF

## 技術棧

- MediaPipe Tasks Vision 0.10.14
- html2canvas 1.4.1
- 原生 JavaScript
- CSS3 動畫

## 作者

**Tao Chun Liu (PM Mayors)**  
🔗 [LinkedIn](https://www.linkedin.com/in/taochunliu/)

---

Where Taiwan AI PM Initiated 🇹🇼
