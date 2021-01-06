# Video pause in PIP form

## Overview
when the icon is pressed,Pauses the video being played on another tab.

## Operation flow
If you are playing video on some tab or PIP.
1. When you press the icon, all tabs will be scanned.
1. If a video element being played is found, playback is paused and tab information is registered.
1. By pressing the icon again, the paused video will be played based on the registered tab information.

## Version history
&nbsp; 0.2 : Added **status:'complete'** to **chrome.tabs.query**  
&nbsp; 0.1 : first release.

## used **chrome api**
- chrome.browserAction.onClicked
- chrome.tabs.query
- chrome.tabs.executeScript
- chrome.browserAction.setBadgeText
- chrome.browserAction.setTitle