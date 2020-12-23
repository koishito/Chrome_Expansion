// // 現時点でのruleをクリア(removeRules)して
// chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//   // 新たなruleを追加する
//   chrome.declarativeContent.onPageChanged.addRules([{
//     conditions: [
//       // アクションを実行する条件
//       new chrome.declarativeContent.PageStateMatcher({
//         pageUrl: {schemes: ['https']}
//       })
//     ],
//     // 実行するアクション
//     actions: [
//       new chrome.declarativeContent.ShowPageAction()
//     ]
//   }]);
// });

// alert("background.js");

chrome.tabs.onActivated.addListener(function (activeInfo) {

  chrome.tabs.getSelected((tab) => {
    // 現在のタブを取得
    var url = tab.url;
    chrome.browserAction.setTitle({ title: (url.indexOf("google")) + tab.title});
    // Data.Title = tab.title;  // tabに現在のタブが格納されている（？）。
    // Data.URL = tab.url;    // tab.titleには現在開いているタブのページタイトルが、tab.urlにはURLが格納されている。
    // console.log(`Title: ${Data.Title}`);  // 出力は、「ポップアップを検証」で見れる。
    // console.log(`URL: ${Data.URL}`);

    if (url.indexOf("google")>0) {
      chrome.browserAction.disable();
      console.log("browserAction.disable");
    } else {
      chrome.browserAction.enable();
      console.log("browserAction.enable");
    }
  
    });
});
