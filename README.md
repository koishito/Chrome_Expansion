# Chrome_Expansion
Ｃｈｒｏｍｅ拡張機能の作成の記録。  
- バックグラウンドページは機能拡張のロードとともに読み込まれ、常に裏で実行されている。（＝常にメモリに駐在し続ける。）  
- バックグラウンドページは、現在表示しているページのDOM要素やコンテンツスクリプトとは隔絶されています。  
- イベントページはバックグラウンドページと同じようにインストールや起動時に読み込まれますが、一定の時間が経過すると無効になり、メモリを開放します。  
- getBackgroundPageでバックグラウンドページのwindowオブジェクトを取得して、backgroundFunctionメソッドを実行。  
- バックグラウンドページが無効の場合の対処方法として、runtime.getBackgroundPageを用いる。  
- バックグラウンドページにて、機能拡張のインストール時に実行されるruntime.onInstalledと、起動時に実行されるruntime.onStartupを利用する。  
- Message Passing（メッセージパッシング）という仕組みで、データを送受信する。  
- メッセージパッシングでの送受信にはJSON形式を用い、データの型は「null, boolean, number, string, array, object」を渡すことができる。  
- メッセージの送信にはchrome.runtime.sendMessageか、chrome.tabs.sendMessageを使い、メッセージの受信は共にchrome.runtime.onMessage.addListenerを使う。という仕組み。  
- コンテンツスクリプトに送信するときだけchrome.tabs.sendMessageを使います。  
- chrome.storage APIなら保存したデータを相互にやり取りできます。  
- コンテンツスクリプトを利用して、現在表示中のページを構成しているDOM要素を読み込んだり、変更したりできます。  
## Test01 - content_scripts：
ページ新規・移動時にのみ`content_scripts`が実行されて、アラート表示。windows.onLoadが後に表示される。
- タブ遷移時ごとにJSを実行するには？

## Test02 - browser_action：
アイコンの指定＆アイコンclick時に`popup.html`を表示。htmlのテキストボックス要素のいろいろ。

## Test03 - page_action：
Test02の`browser_action`を`page_action`に変えたもの。`popup.html`のトリガーの指定を設定しないと、タスクバー上のアイコンは無効となり色はグレイスケールとなる。  
トリガー指定のため、イベントページを用いる。`background.js`に定義を記述する。

## Test04 - background-EventPage：
- chrome.runtime.onInstalled：拡張機能がインストールされた時に呼ばれるイベント
- chrome.runtime.onStartup.addListener：ブラウザ起動時に呼ばれるイベント

## Test05 - ページの最下部でアラート.html(JQueryを使用)
