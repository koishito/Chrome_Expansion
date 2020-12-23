chrome.tabs.onActivated.addListener(function (activeInfo) {
  console.log(activeInfo.tabId);

  chrome.tabs.executeScript(activeInfo.tabId, {
    file: `NextArticleAtBottom.js`
  });
  // chrome.tabs.sendMessage(activeInfo.tabId, {message: 'tabsOnActivated'}, function(response){
  //   if(response == ""){
  //     // chrome.browserAction.setTitle({ title: "link not found" });
  //     // chrome.browserAction.disable();
  //   } else {
  //     // chrome.browserAction.setTitle({ title: response });
  //     // chrome.browserAction.enable();
  //   }
  // });
});
