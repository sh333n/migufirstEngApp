# 霧港奇談 · Fog Harbor Tales 🏮

一款「用英文當武器」的偵探卡牌冒險 PWA。1926 年的霧港,燈塔守失蹤了——破譯英文線索、用正確文法驅散霧影、開口跟只說英文的 NPC 交涉,才能查明真相。

## 🎮 玩法 = 學習
- 🔍 **調查檢定** = 單字題(破譯日誌與警語),破譯出的字化為**卡牌**收進牌庫
- ⚔️ **對抗怪異** = 文法題,答對即是攻擊;每題附完整繁中詳解
- 🗣️ **人物交涉** = 口說關卡:按住麥克風用英文對話(可打字備援),結算給文法/用詞修正 + 教一句**俚語**
- 🃏 **卡牌策略**:名詞=道具、動詞=行動、形容詞=護盾;混沌符記決定獎勵多寡(答對永遠是答對)
- 😱 **夢魘系統**:答錯的題目化為夢魘,按 1/3/7/14 天間隔回來糾纏,答對才能淨化(錯題本 + 間隔複習)
- 🕯 **記憶儀式**:單字卡到期不複習會蒙塵失效,每日複習擦亮它(SRS)
- 📮 **每日委託**:每天 AI 生成新事件:新單字 + 俚語 + 謎題
- 難度:國中基礎 / 國中進階 / 高中入門(設定可調)

## 📁 檔案結構(部署時請保持這個結構)
```
（repo 第一層）
├── index.html
├── manifest.json
├── service-worker.js
├── icon-192.png
├── icon-512.png
└── img/              ← 圖片資料夾,整個放進去
    ├── bg-title.jpg
    ├── char-rep.jpg / char-doc.jpg / char-stu.jpg
    ├── npc-joe.jpg / npc-gu.jpg
    ├── card-back.jpg
    └── scene-*.jpg （6 張場景）
```
> 圖片若有缺,遊戲會自動以文字/emoji 替代,不會壞掉。

## 🚀 部署到 GitHub Pages
1. 建立 **Public** repository
2. 把 5 個檔案 + 整個 `img` 資料夾上傳到 repo **第一層**
   （在 GitHub 網頁可直接把 `img` 資料夾拖進去;或用 Add file → Upload files 保留資料夾結構）
3. Settings → Pages → Source「Deploy from a branch」→ `main` + `/ (root)` → Save
4. 等 1–2 分鐘,開啟 `https://你的帳號.github.io/repo名稱/`
5. Android Chrome:右上「⋮」→「加到主畫面」即可像 App 遊玩

## 🔑 API 金鑰
第一次開啟會引導你貼上免費的 Google Gemini API key（https://aistudio.google.com/app/apikey）。金鑰只存在你的手機 localStorage,不會上傳。請勿把金鑰寫進程式碼或公開分享。
⚠️ AI 功能（出題、劇情、對話）需要網路,且必須在 https 環境（GitHub Pages）才能運作——直接開檔案或預覽會出現 Failed to fetch。

## 💾 進度
存檔在手機本機。設定 →「匯出進度」可下載備份 JSON,換手機用「匯入進度」還原。
