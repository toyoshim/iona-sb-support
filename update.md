---
layout: default
title: ファームウェア更新
permalink: /update
---
# ファームウェア更新
---
## 接続準備
[レイアウト設定](http://localhost:4000/setting)を参考に接続準備を済ませて下さい。

## 注意事項
- 更新用データのURLは直接問い合わせのあった方のみと共有しています。
くれぐれも他の方と共有する事の無いようお願いします。
IONA-USで発生した大量のクローン問題の対策です。
- 正規流通品には特殊な処置が施されており、それ以外のデバイスにファームウェアを適用しても動作しないようになっています。正規品もこのサポートページ以外の方法でフラッシュの書き換えを行うと起動しなくなる可能性がありますのでご注意下さい。

<script src="https://toyoshim.github.io/CH559Flasher.js/CH559Flasher.js"></script>

<div>更新データURL:
<input type="text" id="url" style="width: 75%;">
<button onclick="run();">更新</button>
</div>

| | |
|-|-|
|設定データ読み出し |0% <progress id="data_r" max=1 value=0></progress> 100%|
|設定データ変換・書き出し |0% <progress id="data_w" max=1 value=0></progress> 100%|
|ファームウェア更新 |0% <progress id="code_w" max=1 value=0></progress> 100%|
|ファームウェア検証 |0% <progress id="code_v" max=1 value=0></progress> 100%|

結果
<pre id="error">
待機中
</pre>

<script>
const hash = [
  {
    version: 1.02,
    hash: [0x87, 0x9d, 0xd9, 0xc8, 0xe1, 0x71, 0xd, 0xf3, 0x7d, 0x4a, 0x85, 0xf0, 0xb4, 0x12, 0xfa, 0xe6, 0x34, 0xe5, 0x84, 0x62, 0x92, 0xd0, 0xe7, 0x6d, 0x7c, 0x55, 0xa7, 0xb3, 0x60, 0xdc, 0x87, 0x97]
  }
];
function log(text) {
  document.getElementById('error').innerText = text;
}
async function run() {
  const url = document.getElementById('url').value;
  fetch(url).then(async e => {
    const data = await e.arrayBuffer();
    const u8 = new Uint8Array(data);
    const size = u8.length - u8[u8.length - 1] - 1;
    const digest = new Uint8Array(
        await crypto.subtle.digest('SHA-256', data.slice(0, size)));
    let result = true;
    for (let i = 0; i < 32; i += 1) {
      if (digest[i] != hash[0].hash[i]) {
        result = false;
        break;
      }
    }
    if (!result) {
      log('ファームウェアの取得に失敗しました');
      return;
    }
    log('ファームウェアの準備ができました');
    const flasher = new CH559Flasher();
    await flasher.connect();
    if (flasher.error) {
      log('IONA-SBへの接続に失敗: ' + flasher.error);
      return;
    }
    log('設定データ読み出し中');
    const dataReadBar = document.getElementById('data_r');
    const settings = new Uint8Array(528);
    for (let i = 0; i < 528; i += 32) {
      let size = Math.min(32, 528 - i);
      let buffer = await flasher.readDataInRange(0xf000 + i, size);
      if (!buffer) {
        log('設定データ読み出し中にエラー: ' + flasher.error);
        return;
      }
      let readData = new Uint8Array(buffer);
      for (let j = 0; j < size; j += 1) {
        settings[i + j] = readData[j];
      }
      dataReadBar.value = i / 528;
    }
    dataReadBar.value = 1;
    log('設定データ変換中');
    if (settings[0] != 'I'.charCodeAt(0) ||
        settings[1] != 'N'.charCodeAt(0) ||
        settings[2] != 'S'.charCodeAt(0) ||
        settings[3] != 'B'.charCodeAt(0) ||
        settings[4] != 1 ||
        (settings[5] != 0 && settings[5] != 2)) {
      log('設定データが壊れています');
      return;
    }
    if (settings[5] == 0) {
      // Update 1.00 to 1.02
      settings[5] = 2;  // minor version
      for (let i = 520; i < 528; i += 1) {
        settings[i] = 0;
      }
    }

    log('設定データ保存中');
    const dataWriteBar = document.getElementById('data_w');
    if (!await flasher.eraseData()) {
      log('設定データ保存中にエラー: ' + flasher.error);
      return;
    }
    for (let i = 0; i < 528; i += 32) {
      let size = Math.min(32, 528 - i);
      if (!await flasher.writeDataInRange(
          0xf000 + i, settings.buffer.slice(i, i + size))) {
        log('設定データ保存中にエラー: ' + flasher.error);
        return;
      }
      dataWriteBar.value = i / 528;
    }
    dataWriteBar.value = 1;

    log('ファームウェア更新中');
    const blockSize = ((data.byteLength + 1023) / 1024) | 0;
    const writeBar = document.getElementById('code_w');
    const verifyBar = document.getElementById('code_v');
    if (!await flasher.eraseBlock(blockSize) ||
        !await flasher.write(data, rate => writeBar.value = rate) ||
        !await flasher.verify(data, rate => verifyBar.value = rate)) {
      log('ファームウェア更新中にエラー: ' + flasher.error);
      return;
    }
    log('正常終了');
  });
}
</script>