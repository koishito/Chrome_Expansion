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

chrome.tabs.onActivated.addListener(function (info) {
  // chrome.tabs.getSelected((tab) => {
  //   // 現在のタブを取得
  //   console.log(tab.title);
  //   chrome.browserAction.setTitle({ title: tab.title });

  // }); 
  chrome.declarativeContent.RequestContentScript({js: ["NextArticle+KakuyomuAtBottom.js"]})
  // chrome.tabs.executeScript({ file: "NextArticle+KakuyomuAtBottom.js" });



});
