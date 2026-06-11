# 英語小日子 · Daily English 📘

一個給台灣學習者的個人化英文學習 PWA(漸進式網頁 App)。
單一 HTML 檔、零後端、零建置流程,部署到 GitHub Pages 即可在 Android / iPhone 上「加到主畫面」當 App 用。

## ✨ 功能
- 🏠 **首頁儀表板**:連續學習天數、統計、今日複習提醒、**每日 AI 學習包**(每天自動生成新內容)
- 📖 **單字學習**:AI 詳解(KK 音標、例句、用法、同義/易混淆字)+ 單字庫 + 間隔複習(1/3/7/14 天 SRS)
- ✏️ **文法練習**:AI 依程度出題、中文詳解、**錯題本**自動收錄
- 🎬 **影集對白學習**:逐句翻譯、口語縮寫、文化梗解說、一鍵加入單字庫
- 🎙️ **口說練習**:雙模式——簡易模式(語音辨識 + AI 回覆 + 朗讀)與即時對話(Gemini Live API),結束後給中文回饋
- 💾 學習紀錄存在手機 localStorage,可**匯出 / 匯入**備份
- 📴 離線可開啟介面(AI 功能需連線)
- 🎨 色弱友善配色:對錯用「藍✓ / 橘✗ + 圖示」雙重標示

## 🚀 部署到 GitHub Pages(5 分鐘)

1. **建立 GitHub 帳號**(已有可跳過):https://github.com/signup
2. **建立新 repository**
   - 右上角「+」→「New repository」
   - Repository name 取名,例如 `english-app`
   - 選 **Public** → 按「Create repository」
3. **上傳檔案**
   - 在 repo 頁面點「uploading an existing file」
   - 把這 5 個檔案全部拖進去:
     `index.html`、`manifest.json`、`service-worker.js`、`icon-192.png`、`icon-512.png`
   - 按「Commit changes」
4. **開啟 GitHub Pages**
   - repo 上方「Settings」→ 左側「Pages」
   - Source 選「Deploy from a branch」,Branch 選 `main`、資料夾選 `/ (root)` → Save
   - 等 1–2 分鐘,頁面上方會出現網址:
     `https://你的帳號.github.io/english-app/`
5. **手機安裝**
   - **Android(Chrome)**:打開網址 → 右上角「⋮」→「加到主畫面」(或會自動跳出安裝提示)
   - **iPhone(Safari)**:打開網址 → 分享按鈕 →「加入主畫面」

## 🔑 取得免費 Gemini API 金鑰
1. 打開 https://aistudio.google.com/app/apikey
2. 用 Google 帳號登入 → 「Create API key」
3. 第一次打開 App 時把金鑰貼進去即可(只存在你的手機,不會上傳)

> ⚠️ 安全提醒:金鑰是你個人的,**不要**貼到程式碼裡或公開分享。建議在 Google AI Studio 為金鑰設定用量限制。

## 📦 更新 App
之後若要更新,把新的 `index.html` 重新上傳到 repo 覆蓋即可。手機端重新整理一次(或關掉重開兩次)就會拿到新版。

## ❓ 常見問題
- **Live 即時對話連不上?** 換到「簡易模式」一樣能練口說;或到 ⚙️ 設定裡更換 Live 模型名稱(Google 偶爾會更新模型版本)。
- **語音輸入沒反應?** 確認瀏覽器麥克風權限已允許;iPhone Safari 對語音辨識支援較弱,可用打字備援。
- **換手機怎麼辦?** ⚙️ 設定 →「匯出紀錄」下載備份檔,新手機「匯入紀錄」即可還原。
