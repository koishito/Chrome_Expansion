(function(undefined) {
  chrome.experimental.commands.onCommand.addListener(function() {
    alert("hoge fuga foobar");
  });
})();