---
title: ポート開放不要！IP固定！AWS無料枠＋frpで自宅Minecraftサーバーを安全に外に出すガイド
draft: true
---
# はじめに

このブログの情報は2025/11/26時点の物です

・AWSアカウントを作成済み

・SSHでホームサーバーに接続可能で、rootかsudoが使える

## AWSを選んだ理由

・IPの固定ができる

ElasticIPを作成してインスタンスに関連付ければIPを固定できる

・無料で長期間使える

最近AWS無料枠の仕様が変わり一年間無料で使えていた所が6か月までになりました...

とはいえ無料で6か月は余りにも破格！

従量課金制だから怖いと言うのが良く聞きますが、今回使うのはEC2のみなので大丈夫なはず(多分)

ちなみに請求されても間違えました！と問い合わせれば許して貰えるそうな。


## 1.frpsサーバー用に使うインスタンスを作成

まずは[AWSのEC2ホーム](https://console.aws.amazon.com/ec2)にアクセスします

左上の**ダッシュボード**をクリックしホーム画面に移動して、真ん中らへんにあるインスタンスの起動をクリックします

![](image/image.png)

セキュリティグループは後で編集するので、一旦トラフィック類だけ有効になってれば問題ありません

![](image/sc.png)

私はUbuntuのt3.micro(2core,1GiB)にしました。余程の事が無い限りはこれで十分だし、無料枠の対象の中で最もコストが安いので無料枠を長く使えます

## 2.AWSの設定

インスタンスが作成できた事を確認したら、先程と同じようにダッシュボードへと移動します

リソースエリアのセキュリティグループをクリックし移動します

![](image/r.png)

移動したらdefaultをクリックし、下側に出てきたタブのインバウンドルールからインバウンドルールの編集に行きます

このように設定し、保存します

7000はfrpcが接続するポート、25565はclient側が接続するポートです

![](image/in.png)

### IPを固定する

左側のタブのネットワーク&セキュリティからElastic IPを開きます

右上のElastic IPアドレスを割り振るをクリックし、保存します(割り振るボタン)

作成したアドレスをクリックし、右上のアクションからElastic IPアドレスを関連付けます

使っているインスタンス、プライベートIPを選択して関連付けて完了です。

## 3.インスタンスにSSH接続してfrpsをインストール

とりあえずupdateとupgradeをします

``bash
sudo apt update && sudo apt upgrade -y
``

### frpのダウンロード

frpをダウンロードして移動します

``bash
wget https://github.com/fatedier/frp/releases/download/v0.60.0/frp_0.60.0_linux_amd64.tar.gz
tar -xzf frp_0.60.0_linux_amd64.tar.gz
cd frp_0.60.0_linux_amd64
``

### 設定ファイルの作成

設定ファイルの中身を変えます

tokenはホームサーバー側と一致させないと行けないので注意してください。

``bash
nano frps.toml
``

``toml
bindPort = 7000  # frpcが接続するポート
auth.method = "token"  # 認証方法
auth.token = "your_secret_token"  # 任意の秘密文字列（ホームサーバー側と同じにする）
``

### frpsを起動

まずは動作するかのテストをします

``bash
./frps -c ./frps.toml
``

エラーが無ければ戻り、バックグラウンドで常駐させるためにsystemdサービスを作成します

``bash
sudo nano /etc/systemd/system/frps.service
``

内容:

``toml
[Unit]
Description=FRP Server Service
After=network.target
[Service]
ExecStart=/path/to/frp/frps -c /path/to/frp/frps.toml  # /path/to/frp は実際のパスに置き換え
Restart=always
User=ubuntu #必要に応じて削除してok
[Install]
WantedBy=multi-user.target
``

適用:

``bash
sudo systemctl daemon-reload && sudo systemctl enable frps && sudo systemctl start frps
``

runningかチェック:

``bash
sudo systemctl status frps
``

これにてAWS側の作業は終了！


