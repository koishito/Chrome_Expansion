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

    // // 
    // async function Pauseplayingvideo (tabs) {
    //   console.log(tabs);
    //   for (let i = 0; i < tabs.length; i++) {
    //     var tab = tabs[i];
    //     if (!(/^chrome.+/.test(tab.url))) {
    //       console.log('0', i, tab.id, tab.url);
    //       await chrome.tabs.executeScript(tab.id, {code: `(document.querySelector("video[src]").paused)`}, function (response) {
    //         console.log('1', i, tab.id, tab.url, response);
    //         if (response[0] === false) {
    //           (async () => {
    //             console.log('2 :', i, tab.id, tab.url, response);
    //             await chrome.tabs.executeScript(tab.id, {code: `(function(){document.querySelector("video[src]").pause();})();`},() => {});
    //           })();
    //           setEnv(tab.id, `pause`, tab.title);
    //         }
    //       });
    //     }
    //   }
    // }

    function executeScript(i) { // This function is a recursive function.
      var tab = tabs[i];
      var isLastTab = (i + 1 == tabs.length);
      console.log(i, tabs.length);
      console.log(tab.title, tab.url);
      if ((/^http.+/.test(tab.url))) {
        chrome.tabs.executeScript(tab.id, {code: `(document.querySelector("video[src]").paused)`}, function (response) {
          console.log(tab.id, tab.url, response);
          if (response[0] === false) {
            chrome.tabs.executeScript(tab.id, {code: `(function(){document.querySelector("video[src]").pause();})();`},() => {});
            setEnv(tab.id, `pause`, tab.title);
          } else if (!isLastTab) {
            executeScript(i + 1);
          }
        });

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
