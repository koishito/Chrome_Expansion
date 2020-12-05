chrome.alarms.create("myAlarm", {delayInMinutes: 1} );
 
chrome.alarms.onAlarm.addListener(function(alarm) {
     if ( alarm.name == "myAlarm" ){
          chrome.runtime.sendMessage({ bgmessage: "1分後に実行！" });
     }
});
 
chrome.runtime.onMessage.addListener(function( message, sender, sendResponse ) {
     if( message.bgmessage ){
          alert(message.bgmessage);
     }
});