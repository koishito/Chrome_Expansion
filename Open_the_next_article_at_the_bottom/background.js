chrome.tabs.onActivated.addListener(function (activeInfo) {
  // console.log(activeInfo.tabId);
  executeScript();
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "complete" && tab.active) {
    executeScript();
  }
});

function executeScript() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var url = tabs[0].url;
    console.log(url);
    chrome.browserAction.setTitle({ title: `Link not found` });
    chrome.browserAction.setBadgeText({ text: `` });

    if ((url.indexOf("http") == 0) && (url.indexOf("google") < 0)) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          file: `NextArticleAtBottom.js`,
        },
        function (response) {
          // console.log(`typeof(response) :"` + typeof(response) + `"`);
          // console.log(`response[0] :"` + response[0] + `"`);
          // console.log(`response :"` + response + `"`);
          // console.log(`response.toString() :"` + response.toString() + `"`);
          var nextarticle = response.toString();
          // console.log(`(nextarticle.length > 0 ) :"` + (nextarticle.length > 0 ) + `"`);
          if(nextarticle.length > 0 ) {
            chrome.browserAction.setTitle({ title: nextarticle });
            chrome.browserAction.setBadgeText({ text: `set` });
          
          }

        }
      );
    }
  });
}
