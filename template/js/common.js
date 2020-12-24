// アクティブタブ情報の取得
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) { 
  var url = tabs[0].url;
  var tabId = tabs[0].id;

});

// 指定タブにて、javascriptを実行
chrome.tabs.executeScript(tabs[0].id, { file: `sample.js` }, function(response) {
  console.log(response[0]);
});

// アイコンのツールチップの登録
chrome.browserAction.setTitle({ title: `sample` });

// アイコンのバッチの登録
chrome.browserAction.setBadgeText({ text: `sample` });

// アイコンの無効表示
chrome.browserAction.disable();
// アイコンの有効表示
chrome.browserAction.enable();
