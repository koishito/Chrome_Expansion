chrome.contextMenus.create({id: "test extention", title: "hoge"}, function(){
     alert("コンテキストメニュー登録完了");
});
 
chrome.contextMenus.onClicked.addListener( function(){
     alert("onClickedイベントでクリック");
});