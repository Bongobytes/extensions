function showAlert() {
  alert("IDK Josh");
}

document.addEventListener("click", showAlert);
document.addEventListener("keydown", showAlert);

chrome.tabs.onCreated.addListener(showAlert);
chrome.tabs.onRemoved.addListener(showAlert);
chrome.windows.onCreated.addListener(showAlert);
chrome.windows.onRemoved.addListener(showAlert);
