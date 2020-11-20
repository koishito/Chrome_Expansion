function backgroundFunction () {
	alert("バックグラウンドの関数を実行!");
}

chrome.runtime.onInstalled.addListener(outsideAlert);
chrome.runtime.onStartup.addListener(backgroundFunction);

function outsideAlert() {
	alert("関数の外にあるもの");
}