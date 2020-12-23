chrome.browserAction.onClicked.addListener(function(tab) {
  // chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.executeScript(null,
      {file: "sample1.js"}, function(){
        chrome.tabs.executeScript(null,
          {file: "sample2.js"}, function(){
            console.log('Script injected.');
        });
    });
  });