const form = document.querySelector("#registration-form");
const message = document.querySelector("#form-message");

function setMessage(text, type = "") {
  message.textContent = text;
  message.className = `form-message${type ? ` is-${type}` : ""}`;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const appsScriptUrl = window.WORKSHOP_CONFIG?.appsScriptUrl?.trim();
  if (!appsScriptUrl) {
    setMessage("表單尚未完成 Google Sheet 串接，請先部署 Apps Script。", "error");
    return;
  }

  const submitButton = form.querySelector("button");
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  submitButton.disabled = true;
  setMessage("送出中...");

  try {
    const response = await fetch(appsScriptUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (!response.ok || result.status !== "ok") {
      throw new Error(result.message || "送出失敗");
    }

    form.reset();
    setMessage("報名成功，期待在工作坊見到你！", "success");
  } catch (error) {
    setMessage(`送出失敗：${error.message}`, "error");
  } finally {
    submitButton.disabled = false;
  }
});
