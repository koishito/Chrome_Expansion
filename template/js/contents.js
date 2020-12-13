// // 送信側 contents -> background
// chrome.runtime.sendMessage(
//     { value: { contents: "test value from contents" } }
// );

// // 受信側 other tab -> contents(popup/option -> contents)
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     console.log(message);
//     return;
// });

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if( request.message === "start" ) {
//        start();
//            }
//     }
//   );

//   function start(){
//       alert("started");
//   }