# PM里長伯塔羅牌 v2.0 | PM Mayors Algorithmic Tarot

🏘️ 里長伯幫助您用AI玩轉敏捷

## 新功能 New Features

### ✨ 超炫粒子特效 Amazing Particle Effects
- 抽牌時的能量爆發效果
- 魔法陣聚合動畫
- 卡片翻轉時的粒子爆炸
- 環境漂浮粒子

### 📱 手機儲存圖片 Mobile Image Save
- 點擊「圖片」按鈕
- 自動生成高解析度 PNG
- 支援直接下載到相簿

### 🖨️ 電腦版列印 PDF Desktop PDF Print
- 點擊「PDF」按鈕
- 自動格式化列印版面
- 使用瀏覽器列印功能存為 PDF

### 🌐 中英對照 Bilingual Support
- 所有介面文字都有中英文
- 塔羅牌名稱中英對照
- 解讀結果雙語呈現
- 總結同時顯示中英文

### 📊 總結功能 Summary Feature
- 綜合三張牌的整體解讀
- 明確的人生建議
- 中英文同步呈現

## 關於攝影機/手勢追蹤 About Camera/Gesture Tracking

### 為什麼手部偵測不工作？
瀏覽器的安全限制要求：
1. **HTTPS 環境**：攝影機 API 只能在安全連線下運作
2. **本地開發**：只有 `localhost` 可以使用 HTTP

### 解決方案
1. **部署到 Vercel**：最簡單的方式，自動獲得 HTTPS
2. **本地測試**：使用 `localhost` 而非 IP 位址

### 部署後即可使用的功能
- ✅ 攝影機背景
- ✅ 手勢追蹤基礎（需要額外整合 MediaPipe）

## 部署到 Vercel

### 方法一：拖放部署
1. 下載此專案資料夾
2. 將您的 `logo.png` 放入資料夾
3. 前往 [vercel.com/new](https://vercel.com/new)
4. 拖放整個資料夾
5. 等待部署完成

### 方法二：GitHub + Vercel
1. 將專案推送到 GitHub
2. 在 Vercel 導入 GitHub 專案
3. 自動部署

### 方法三：Vercel CLI
```bash
npm i -g vercel
cd pm-mayors-tarot-v2
vercel
```

## 檔案結構

```
pm-mayors-tarot-v2/
├── index.html      # 主應用程式（包含所有功能）
├── logo.png        # 您的 Logo（請自行添加）
├── vercel.json     # Vercel 部署配置
└── README.md       # 說明文件
```

## 使用說明 Usage

1. **輸入問題**：在輸入框中輸入您想占卜的問題
2. **抽牌**：點擊「啟動塔羅算法」按鈕
3. **觀看特效**：欣賞粒子爆發和卡片翻轉動畫
4. **閱讀解讀**：查看中英文對照的占卜結果
5. **儲存結果**：
   - 📱 手機：點擊「圖片」按鈕下載 PNG
   - 💻 電腦：點擊「PDF」按鈕列印/存為 PDF

## 技術棧 Tech Stack

- **HTML5 Canvas** - 粒子系統
- **Three.js** - 3D 效果（備用）
- **html2canvas** - 截圖功能
- **jsPDF** - PDF 生成（備用）
- **原生 JavaScript** - 零框架依賴
- **CSS3 動畫** - 流暢視覺效果
- **WebRTC** - 攝影機存取

## 瀏覽器支援 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ iOS Safari
- ✅ Android Chrome

## 作者 Author

**Tao Chun Liu (PM Mayors)**
- LinkedIn: [linkedin.com/in/taochunliu](https://www.linkedin.com/in/taochunliu/)

---

Where Taiwan AI PM Initiated 🇹🇼
