# 2026時間設計半日工作坊

這是活動報名網站，包含活動標題、活動圖片、活動流程與 Google Sheet 報名表單。

## Google Sheet 串接

1. 建立一份新的 Google Sheet。
2. 開啟「擴充功能」>「Apps Script」。
3. 將 `apps-script.gs` 的內容貼到 Apps Script 編輯器。
4. 按下「部署」>「新增部署作業」。
5. 類型選擇「網頁應用程式」。
6. 「執行身分」選擇「我」。
7. 「誰可以存取」選擇「任何人」。
8. 按下「部署」，依畫面完成 OAuth 驗證。
9. 複製部署後產生的「網頁應用程式網址」，貼回給 Codex。

表單已串接 Apps Script，送出資料會寫入 Google Sheet 的第一個工作表。

## GitHub Pages

Pages 網址：https://ychuang-pu.github.io/2026workshop/
