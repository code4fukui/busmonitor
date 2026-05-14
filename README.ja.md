# busmonitor

公共交通オープンデータを活用した、福井県鯖江市の「つつじバス」のリアルタイムモニタリングWebアプリケーションです。

## デモ

:bus: **ライブデモ: http://codeforfukui.github.io/busmonitor/**

## 機能

-   **リアルタイムバス追跡:** インタラクティブマップ上でバスのリアルタイムな位置を表示します。
-   **詳細な運行状況:** バスを選択すると、目的地、速度、進行方向、遅延状況、乗客数、車椅子の利用状況を確認できます。
-   **ルートの可視化:** 鯖江市つつじバスのすべてのルートと停留所の位置を地図上に表示します。
-   **進行方向アイコン:** 地図上のバスアイコンが回転し、現在の進行方向を示します。
-   **GPS連携:** 「現在地」ボタンを使用すると、現在地を地図の中心に表示できます。

## データソース

本プロジェクトは、以下のオープンデータソースからデータを集約しています:

-   **鯖江市バスデータ (メイン):**
    -   **バスの位置情報とルート:** [福井オープンデータポータル SPARQLエンドポイント](https://sparql.odp.jig.jp/data/sparql)
    -   **乗客数と車椅子利用数:** [鯖江市IoTプラットフォームAPI](https://api.odp.jig.jp/siot/buslog/jp/fukui/sabae/)
-   **その他のSPARQLエンドポイント:**
    -   大阪市: [data.city.osaka.lg.jp/sparql](https://data.city.osaka.lg.jp/sparql)
    -   京都市: [sparql.city.kyoto.lg.jp/sparql](https://sparql.city.kyoto.lg.jp/sparql/)
    -   神戸市: [data.city.kobe.lg.jp/sparql](https://data.city.kobe.lg.jp/sparql)

## ローカルでの実行

本プロジェクトは静的なWebアプリケーションです。ローカルで実行するには、任意のシンプルなWebサーバーを使用できます。

1.  リポジトリをクローンします:
    ```sh
    git clone https://github.com/codeforfukui/busmonitor.git
    ```
2.  プロジェクトディレクトリに移動します:
    ```sh
    cd busmonitor
    ```
3.  ローカルWebサーバーを起動します。たとえばPythonを使用する場合は以下の通りです:
    ```sh
    # Python 3
    python -m http.server
    ```
4.  ブラウザを開き、`http://localhost:8000` にアクセスします。

## 謝辞

本プロジェクトでは、@taisuke 氏が CC BY ライセンスで提供しているユーティリティライブラリ `fukuno.js` を使用しています。

## ライセンス

本プロジェクトは MIT License のもとで公開されています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。
