const key = `PausedVideo'sTabId`;
localStorage.setItem(key, ``);
var tabs = '';

chrome.browserAction.onClicked.addListener(
  function(tab){
    var targetTabId = parseInt(localStorage.getItem(key));

    setEnv(``, ``, ``);
    if (!targetTabId) {
      chrome.tabs.query({lastFocusedWindow: true, status: 'complete'},function(curtabs) {
        tabs = curtabs;
        console.log(tabs);
        executeScript(0);
        // Pauseplayingvideo(curtabs);
      });

    } else {
      chrome.tabs.query({lastFocusedWindow: true, status: 'complete'},function(curtabs) {
        for (let i = 0; i < curtabs.length; i++) {
          if (curtabs[i].id == targetTabId) {
            chrome.tabs.executeScript(targetTabId, {code: `(function(){document.querySelector("video[src]").play();})();`},() => {});
          }
        }
      });

    }

    function executeScript(i) { // This function is a recursive function.
      var tab = tabs[i];
      if (typeof(tab) == undefined) {tab = "";}
      var id = tab.id;
      var title = tab.title;
      var url = tab.url;
      var isLastTab = (i + 1 == tabs.length);
      console.log(i, tabs.length);
      console.log(tab.title, tab.url);
      let errorflg = (url.indexOf(title) < 0);
      if (/^http.+/.test(url) && errorflg) {
        try {
          chrome.tabs.executeScript(id, {code: `(document.querySelector("video[src]").paused)`}, function (response) {
            console.log(id, url, response);
            if ((response != undefined) && (response[0] === false)) {
              chrome.tabs.executeScript(id, {code: `(function(){document.querySelector("video[src]").pause();})();`},() => {});
              setEnv(id, `pause`, title);
            } else if (!isLastTab) {
              executeScript(i + 1);
            }
          });
        } catch {}

      } else if (!isLastTab) {
        executeScript(i + 1);

      }
    }

    function setEnv(tabId, badgeText, toolTip) {
      localStorage.setItem(key, tabId);
      chrome.browserAction.setBadgeText({ text: badgeText });
      chrome.browserAction.setTitle({ title: toolTip });
    }

  }
);
