function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  ensureHeader_(sheet);

  const data = JSON.parse(e.postData.contents || "{}");
  sheet.appendRow([
    new Date(),
    data.name || "",
    data.email || "",
    data.phone ? "'" + data.phone : "",
    data.organization || "",
    data.title || ""
  ]);

  return json_({
    status: "ok"
  });
}

function doGet() {
  return json_({
    status: "ok",
    message: "2026 workshop registration endpoint is ready."
  });
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) {
    return;
  }

  sheet.getRange(1, 1, 1, 6).setValues([[
    "送出時間",
    "姓名",
    "email",
    "電話",
    "單位",
    "職稱"
  ]]);
  sheet.getRange("D:D").setNumberFormat("@");
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
