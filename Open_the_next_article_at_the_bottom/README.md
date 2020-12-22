# Open the next article at the bottom


## Overview
Search for the link to the next article at the time of active tab transition. If there is a link to the next article, register it in a tooltip and automatically open the next article when scrolling to the bottom of the page.

## Operation flow
  1. At the time of active tab transition, set the transmission of the trigger to **content.js** in **"chrome.tabs.sendMessage"** in **"chrome.tabs.onActivated.addListener"** in **"backgground.js"**.
  2. In **content.js**, when the trigger is received by **"chrome.extension.onMessage.addListener"**, the link to the next article is searched, and if the link to the next article exists, the presence or absence of the link is returned.
  3. In **backgground.js**, the presence or absence of a link is received by **"chrome.runtime.onMessage.addListener (function (request, sender, sendResponse) {"**.
  4. If there is a link, write the link in the tooltip and enable the extension icon.
   (use **"chrome.browserAction.setTitle({ title:"**, **"chrome.browserAction.enable();"**)  
   and set the tooltip link to open automatically "when scrolling to the bottom of the page".
   ( use **"document.addEventListener('scroll',function() {"**)
  5. If there is no link, write "Link not found" in the tooltip and disable the extension icon.
   (use **"chrome.browserAction.disable();"**)
  6. 
