// アドオンのインストール時のイベントをリッスンする
chrome.runtime.onInstalled.addListener(function() {

  // ストレージAPIを経由して値を保存する
  chrome.storage.sync.set({color: '#3aa757'}, function() {

    // ログ表示
    console.log("The color is green.");

  });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {

      chrome.declarativeContent.onPageChanged.addRules(
        [{
          conditions: [
  
            new chrome.declarativeContent.PageStateMatcher({
               pageUrl: {
                 hostEquals: 'developer.chrome.com'
               },
            })

          ],
  
          actions: [
            new chrome.declarativeContent.ShowPageAction()
          ]
        }]
      );

    });


});