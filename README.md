# Chrome_Expansion
Chrome拡張機能の作成の記録。  
#### popup.html(js)
- popup.htmlのpopup.jsは、読み込まれるタイミングは、ポップアップ開いた時。
#### background.js　（eventPageも含む）
- アクティブタブ遷移時に実行するには：`chrome.runtime.onStartup.addListener`に登録
- バックグラウンドページは機能拡張のロードとともに読み込まれ、常に裏で実行されている。（＝常にメモリに駐在し続ける。）  
- イベントページはバックグラウンドページと同じようにインストールや起動時に読み込まれますが、一定の時間が経過すると無効になり、メモリを開放します。  
- バックグラウンドページは、現在表示しているページのDOM要素やコンテンツスクリプトとは隔絶されています。  
- `getBackgroundPage`でバックグラウンドページのwindowオブジェクトを取得して、`backgroundFunction`メソッドを実行。  
- バックグラウンドページが無効の場合の対処方法として、`runtime.getBackgroundPage`を用いる。  
- バックグラウンドページにて、機能拡張のインストール時に実行される`runtime.onInstalled`と、起動時に実行される`runtime.onStartup`を利用する。  
- `chrome.tabs.executeScript` で `javascript` を画面に挿入することができます。
#### content.js
- コンテンツスクリプトを利用して、現在表示中のページを構成しているDOM要素を読み込んだり、変更したりできます。DOMの操作はcontent script側でしかできません。  
- content.jsは、webコンテンツが読み込まれる前に読み込まれます。
- manifest.jsonの`content_scripts.run_at`プロパティで読み込む順番を少しだけ制御できます。
  - `document_start`
  - `document_end`
  - `document_idle`(default)
#### js間の通信
- Message Passing（メッセージパッシング）という仕組みで、データを送受信する。  
- メッセージパッシングでの送受信にはJSON形式を用い、データの型は「null, boolean, number, string, array, object」を渡すことができる。  
- メッセージの送信には`chrome.runtime.sendMessage`か、`chrome.tabs.sendMessage`を使い、メッセージの受信は共に`chrome.runtime.onMessage.addListener`を使う。という仕組み。  
- コンテンツスクリプトに送信するときだけ`chrome.tabs.sendMessage`を使います。  
#### storage
- chrome.storage APIなら保存したデータを相互にやり取りできます。  
## Run at the bottom
ページ最下部に到達すると、事前に登録したJavaScriptを実行する。
目的：なろう、ツギクル等の次ページのリンクをSPACEキーの押しっぱなしで踏むために作成。  
- background：スクロール検知処理の登録  

## ActTab_Extention
アクティブタブ切り替え毎に、alertを出す。
- `chrome.tabs.onActivated.addListener`にて、アクティブタブ切り替え毎に実行するJavaScriptの登録が可能。

## Test01 - content_scripts：
ページ新規・移動時にのみ`content_scripts`が実行されて、アラート表示。`windows.onLoad`が後に表示される。
- タブ遷移時ごとにJSを実行するには？→上記ActTab_Extentionにて

## Test02 - browser_action：
アイコンの指定＆アイコンclick時に`popup.html`を表示。htmlのテキストボックス要素のいろいろ。

## Test03 - page_action：
Test02の`browser_action`を`page_action`に変えたもの。`popup.html`のトリガーの指定を設定しないと、タスクバー上のアイコンは無効となり色はグレイスケールとなる。  
トリガー指定のため、イベントページを用いる。`background.js`に定義を記述する。

## Test04 - background-EventPage：
- `chrome.runtime.onInstalled`：拡張機能がインストールされた時に呼ばれるイベント
- `chrome.runtime.onStartup.addListener`：ブラウザ起動時に呼ばれるイベント

## Test05 - ページの最下部でアラート
`ページの最下部でアラート.html`（JQueryを使用）

## Test06 - under construction
`chrome.experimental.commands.onCommand.addListener`

## Test07 - sample
https://www.366service.com/jp/qa/9a81cc3411a35be88a65bb766437efda
