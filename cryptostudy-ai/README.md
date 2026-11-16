# CryptoStudy AI 🔐

密碼學學習平台：**知識庫 + 研究論文導讀 + 逐步解題計算機**。繁體中文、手機友善、純靜態網站，適合部署至 GitHub Pages。

## 現有功能
- 5 篇密碼學主題教學，可依關鍵字與分類篩選。
- 2 篇真實經典論文導讀，含研究問題、主要貢獻與原始來源連結。
- 5 種互動計算：模運算、最大公因數、模反元素、模指數、RSA 小質數示範。支援任意精度 BigInt，提供計算步驟與輸入錯誤提示。
- `AGENTS.md`：指定檔案結構、內容格式、AI 修改規則、測試與驗收標準。

> **限制**：此版本沒有串接 LLM，也不能上傳 PDF 自動摘要。它不是正式的密碼安全服務；RSA 教學沒有安全填充。

## 本機預覽
若用檔案雙擊開啟 HTML，瀏覽器可能因安全機制禁止讀取 JSON。請在專案根目錄開啟終端機，執行：

```bash
python3 -m http.server 8000
```

再開啟 http://localhost:8000/ 。按 `Ctrl+C` 可停止。

## 自動測試
需 Node.js 18+：

```bash
npm test
```

無需 `npm install`，因為沒有外部套件。

## 部署 GitHub Pages
1. 在 GitHub 新增公開 Repository，名稱建議 `cryptostudy-ai`。
2. 將這份專案的**所有檔案和資料夾**上傳到 Repo 根目錄，確認 `index.html` 與 `AGENTS.md` 位於根目錄。
3. Repository → **Settings** → **Pages** → **Build and deployment** → Source 選 **Deploy from a branch**。
4. Branch 選 `main`，Folder 選 `/(root)`，按 **Save**。
5. 待 GitHub Pages 顯示站點網址後，進入 `https://你的使用者名稱.github.io/cryptostudy-ai/`（實際路徑依 Repo 名稱而定）。
6. 測試首頁、知識庫搜尋、論文連結與五個計算題型。

## 如何使用 AGENTS.md 延伸專案
範例提示詞：

> 請先閱讀 AGENTS.md，遵守 topics.json 的欄位規則，新增一篇「橢圓曲線密碼學 ECC」入門教學，附上正確算式、例題與常見錯誤；沿用目前 UI，不要重寫頁面。完成後請檢查 JSON 和網頁。

新主題加入 `data/topics.json` 即自動出現在知識庫；新論文加入 `data/papers.json` 即自動出現在論文列表。新的計算器需擴充 `js/crypto.js`、`js/solver.js` 並新增測試。

## 專案樹
```text
cryptostudy-ai/
├── AGENTS.md
├── README.md
├── index.html
├── package.json
├── css/style.css
├── js/main.js
├── js/crypto.js
├── js/solver.js
├── data/topics.json
├── data/papers.json
├── pages/topics.html
├── pages/papers.html
├── pages/solver.html
└── tests/crypto.test.mjs
```
