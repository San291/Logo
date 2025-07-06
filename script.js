
const logoTextInput = document.getElementById("logoText");
const fontSelector = document.getElementById("fontSelector");
const colorPicker = document.getElementById("colorPicker");
const logoPreview = document.getElementById("logoPreview");

function updatePreview() {
  logoPreview.textContent = logoTextInput.value;
  logoPreview.style.fontFamily = fontSelector.value;
  logoPreview.style.color = colorPicker.value;
}

logoTextInput.addEventListener("input", updatePreview);
fontSelector.addEventListener("change", updatePreview);
colorPicker.addEventListener("change", updatePreview);

function downloadLogo() {
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 200;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = "48px " + fontSelector.value;
  ctx.fillStyle = colorPicker.value;
  ctx.fillText(logoTextInput.value, 50, 120);

  const link = document.createElement("a");
  link.download = "irys_logo.png";
  link.href = canvas.toDataURL();
  link.click();
}
