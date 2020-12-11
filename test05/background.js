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

// chrome.tabs.onActivated.addListener( function(info) {
//   // alert("background.js");
//   chrome.tabs.query({active : true}, (tabs) => {
//       console.log("background.js");
//     chrome.tabs.sendMessage(tabs[0].id, {message : "hello"});
//   });
// });


function floatBOX(e){
  var a=document.createElement("div");
  a.style.cssText="position:fixed;top:150px;left:0;width:25%;padding:10px;background:silver;border:1px solid #aaa;text-align:center;z-index:19999;";
  //a.style.cssText="position:fixed;top:50%;left:50%;transform: translate(-50%, -50%);padding:50px;background:silver;border:1px solid #aaa;text-align:center;";
  a.innerHTML=e;
  a.style.fontSize = '40px';
  document.body.appendChild(a);
  setTimeout(closenode, 3000);
  function closenode(){a.parentNode.removeChild(a);}
};

chrome.commands.onCommand.addListener(function (command) {
  if (command === 'code-block') {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { text: "code-block" }, function (response) {
              console.log(response);
          });
      });
  }
});