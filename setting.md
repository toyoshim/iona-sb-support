---
layout: default
title: レイアウト設定
permalink: /setting
---
# レイアウト設定
---
## 接続準備
IONA-SBのMETAボタンを押した状態でUSB Type-Cの口からパソコンに接続して下さい。
WebUSB APIでデバイスの設定にアクセスするのでChrome、またはWebUSBの有効になったChromium系のブラウザにてご利用下さい。

Windowsユーザーは初回のみ設定が必要となります。IONA-USなどで設定済みの方は追加設定は不要です。
設定方法については[IONA-USのファーム更新ページ](https://toyoshim.github.io/iona-us/firmware)のWinUSBの設定をお読み下さい。作業時のスクリーンキャプチャ動画もあるので参考になるかと思います。

準備ができたら、以下の「デバイスを探す」ボタンを押し、一覧に表示されたWinChipHead製のデバイスを選択し、接続を押して下さい。

<button id="button" onclick="connect();">デバイスを探す</button>
<pre id="status">待機中</pre>

---
## 設定
（作成中）

---

<script src="https://toyoshim.github.io/CH559Flasher.js/CH559Flasher.js"></script>
<script>
let flasher = null;
let data = new Uint8Array(0x400);
let valid = false;

function setStatus(status) {
  document.getElementById('status').innerText = status;
}

function setButtonStatus(status) {
  document.getElementById('button').innerText = status;
}

async function save() {
  // TODO
}

async function connect() {
  if (flasher) {
    save();
    return;
  }
  flasher = new CH559Flasher();
  await flasher.connect();
  if (flasher.error) {
    setStatus('エラーが発生しました： ' + flasher.error);
    flasher = null;
    return;
  }
  for (let i = 0; i < 0x400; i += 0x20) {
    let buffer = await flasher.readDataInRange(0xf000 + i, 0x20);
    console.log(buffer);
    if (!buffer) {
      setStatus('設定読込中にエラーが発生しました： ' + flasher.error);
      flasher = null;
      return;
    }
    let b8 = new Uint8Array(buffer)
    for (let j = 0; j < 0x20; ++j) {
      data[i + j] = b8[j];
    }
  }
  const version = data[4] | (data[5] << 8) | (data[6] << 16) | (data[7] << 24);
  if (data[0] != 'I'.charCodeAt(0) ||
      data[1] != 'N'.charCodeAt(0) ||
      data[2] != 'S'.charCodeAt(0) ||
      data[3] != 'B'.charCodeAt(0) ||
      version != 1) {
    setStatus('接続しましたが、IONA-SBの設定データが確認できません');
    flasher = null;
    return;
  }
  setStatus('接続しました（ブートローダー： ' + flasher.bootLoader +
      ' / 設定フォーマット: v' + version + ')');
  valid = true;
  setButtonStatus('変更を保存する');
}
</script>