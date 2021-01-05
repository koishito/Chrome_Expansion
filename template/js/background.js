// 機能拡張のインストール・アップデート時に実行
chrome.runtime.onInstalled.addListener(function (details) {
  console.log("onInstalled");
  
});

// 機能拡張の起動時に実行
chrome.runtime.onStartup.addListener(function () {
  console.log("onStartup");


});

// アクティブタブ遷移時に実行
chrome.tabs.onActivated.addListener(function (activeInfo) {
  console.log(activeInfo.tabId);
  executeScript();

}); 

// 新規・更新時に実行
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    executeScript();

  }
});

// ツールバーアイコンのクリックのイベント
chrome.browserAction.onClicked.addListener(function(tab) {...});

// 現時点でのruleをクリア(removeRules)して
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  // 新たなruleを追加する
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [
      // アクションを実行する条件
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {schemes: ['https']}
      })
    ],
    // 実行するアクション
    actions: [
      new chrome.declarativeContent.ShowPageAction()
    ]
  }]);
});

// 他からの指示を受け取る
chrome.runtime.onMessage.addListener( function(request,sender,sendResponse) {

  var srcCommand = request.command
  var srcValue = request.jstext;

      sendResponse( {allvalue: [items]} );

})