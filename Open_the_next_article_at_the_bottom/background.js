chrome.tabs.onActivated.addListener(function (activeInfo) {
  console.log(activeInfo.tabId);
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
    chrome.browserAction.setTitle({ title: `Link not found` });
    chrome.browserAction.setBadgeText({ text: `` });

    console.log(url, url.indexOf("chrome") == 0, url.indexOf("google") > 0);
    if (url.indexOf("chrome") == 0) {
    } else if (url.indexOf("google") > 0) {
    } else {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          file: `NextArticleAtBottom.js`,
        },
        function (response) {
          console.log(`response :` + response[0]);
          nextarticle = response[0];
          chrome.browserAction.setTitle({ title: nextarticle });
          chrome.browserAction.setBadgeText({ text: `set` });
        }
      );
    }

  });
}
