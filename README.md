# Chrome_Expansion

## Test01 - content_scripts：

ページ新規・移動時にcontent_scriptsが実行されて、アラート表示。windows.onLoadが後に表示される。

## Test02 - browser_action：

アイコンの指定＆アイコンclick時にpopup.htmlを表示。htmlのテキストボックス要素のいろいろ。

## Test03 - page_action：

Test02のbrowser_actionをpage_actionに変えたもの。popup.htmlのトリガーの指定がないため、タスクバー上のアイコンは無効となり色はグレイスケールとなる。トリガー指定のため、イベントページを用いる。background.jsに定義を記述する。

## Test04 - background-EventPage：

・chrome.runtime.onInstalled：拡張機能がインストールされた時に呼ばれるイベント
・chrome.runtime.onStartup.addListener：ブラウザ起動時に呼ばれるイベント
