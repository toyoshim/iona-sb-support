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

同じボタンが「変更を保存する」に変化するので再度ボタンを押すと設定が保存されます。

<button id="button" onclick="connect();"></button>
<pre id="status"></pre>

---
## ボタン配置
- 変更したい設定番号を選び、配置を編集した後に「変更を確定」ボタンを押して下さい。
- 確定しない変更は設定番号を選び直した際に破棄されます。
- 他の設定からコピーした場合にも確定は必要です。
- 全ての変更が確定したら「変更を保存する」ボタンでデバイスに保存されます。

<select id="select"><option>設定 1</option><option>設定 2</option><option>設定 3</option><option>設定 4</option><option>設定 5</option><option>設定 6</option><option>設定 7</option><option>設定 8</option></select>
&nbsp;
<button id="store" onclick="decide();">変更を確定</button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
他の設定やプリセットからコピーする
<select id="copy"><option>-</option><option>設定 1</option><option>設定 2</option><option>設定 3</option><option>設定 4</option><option>設定 5</option><option>設定 6</option><option>設定 7</option><option>設定 8</option><option>8ボタン</option><option>4/6ボタン</option><option>4ボタン30連射</option><option>4ボタン15連射</option><option>4ボタン12連射</option><option>4ボタン10連射</option></select>

| |1|2|3|4|5|6|7|8|連射選択|連射パターン|周期|
|:|-|-|-|-|-|-|-|-|:-----:|:--------:|:--:|
|ボタン 1|<input type="checkbox" id="b11">|<input type="checkbox" id="b12">|<input type="checkbox" id="b13">|<input type="checkbox" id="b14">|<input type="checkbox" id="b15">|<input type="checkbox" id="b16">|<input type="checkbox" id="b17">|<input type="checkbox" id="b18">|<select id="rp1"></select>|<input type="checkbox" id="p11"><input type="checkbox" id="p12"><input type="checkbox" id="p13"><input type="checkbox" id="p14"><input type="checkbox" id="p15"><input type="checkbox" id="p16"><input type="checkbox" id="p17"><input type="checkbox" id="p18">|<select id="rm1"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>
|ボタン 2|<input type="checkbox" id="b21">|<input type="checkbox" id="b22">|<input type="checkbox" id="b23">|<input type="checkbox" id="b24">|<input type="checkbox" id="b25">|<input type="checkbox" id="b26">|<input type="checkbox" id="b27">|<input type="checkbox" id="b28">|<select id="rp2"></select>|<input type="checkbox" id="p21"><input type="checkbox" id="p22"><input type="checkbox" id="p23"><input type="checkbox" id="p24"><input type="checkbox" id="p25"><input type="checkbox" id="p26"><input type="checkbox" id="p27"><input type="checkbox" id="p28">|<select id="rm2"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>
|ボタン 3|<input type="checkbox" id="b31">|<input type="checkbox" id="b32">|<input type="checkbox" id="b33">|<input type="checkbox" id="b34">|<input type="checkbox" id="b35">|<input type="checkbox" id="b36">|<input type="checkbox" id="b37">|<input type="checkbox" id="b38">|<select id="rp3"></select>|<input type="checkbox" id="p31"><input type="checkbox" id="p32"><input type="checkbox" id="p33"><input type="checkbox" id="p34"><input type="checkbox" id="p35"><input type="checkbox" id="p36"><input type="checkbox" id="p37"><input type="checkbox" id="p38">|<select id="rm3"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>
|ボタン 4|<input type="checkbox" id="b41">|<input type="checkbox" id="b42">|<input type="checkbox" id="b43">|<input type="checkbox" id="b44">|<input type="checkbox" id="b45">|<input type="checkbox" id="b46">|<input type="checkbox" id="b47">|<input type="checkbox" id="b48">|<select id="rp4"></select>|<input type="checkbox" id="p41"><input type="checkbox" id="p42"><input type="checkbox" id="p43"><input type="checkbox" id="p44"><input type="checkbox" id="p45"><input type="checkbox" id="p46"><input type="checkbox" id="p47"><input type="checkbox" id="p48">|<select id="rm4"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>
|ボタン 5|<input type="checkbox" id="b51">|<input type="checkbox" id="b52">|<input type="checkbox" id="b53">|<input type="checkbox" id="b54">|<input type="checkbox" id="b55">|<input type="checkbox" id="b56">|<input type="checkbox" id="b57">|<input type="checkbox" id="b58">|<select id="rp5"></select>|<input type="checkbox" id="p51"><input type="checkbox" id="p52"><input type="checkbox" id="p53"><input type="checkbox" id="p54"><input type="checkbox" id="p55"><input type="checkbox" id="p56"><input type="checkbox" id="p57"><input type="checkbox" id="p58">|<select id="rm5"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>
|ボタン 6|<input type="checkbox" id="b61">|<input type="checkbox" id="b62">|<input type="checkbox" id="b63">|<input type="checkbox" id="b64">|<input type="checkbox" id="b65">|<input type="checkbox" id="b66">|<input type="checkbox" id="b67">|<input type="checkbox" id="b68">|<select id="rp6"></select>|<input type="checkbox" id="p61"><input type="checkbox" id="p62"><input type="checkbox" id="p63"><input type="checkbox" id="p64"><input type="checkbox" id="p65"><input type="checkbox" id="p66"><input type="checkbox" id="p67"><input type="checkbox" id="p68">|<select id="rm6"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>
|ボタン 7|<input type="checkbox" id="b71">|<input type="checkbox" id="b72">|<input type="checkbox" id="b73">|<input type="checkbox" id="b74">|<input type="checkbox" id="b75">|<input type="checkbox" id="b76">|<input type="checkbox" id="b77">|<input type="checkbox" id="b78">|<select id="rp7"></select>|<input type="checkbox" id="p71"><input type="checkbox" id="p72"><input type="checkbox" id="p73"><input type="checkbox" id="p74"><input type="checkbox" id="p75"><input type="checkbox" id="p76"><input type="checkbox" id="p77"><input type="checkbox" id="p78">|<select id="rm7"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>
|ボタン 8|<input type="checkbox" id="b81">|<input type="checkbox" id="b82">|<input type="checkbox" id="b83">|<input type="checkbox" id="b84">|<input type="checkbox" id="b85">|<input type="checkbox" id="b86">|<input type="checkbox" id="b87">|<input type="checkbox" id="b88">|<select id="rp8"></select>|<input type="checkbox" id="p81"><input type="checkbox" id="p82"><input type="checkbox" id="p83"><input type="checkbox" id="p84"><input type="checkbox" id="p85"><input type="checkbox" id="p86"><input type="checkbox" id="p87"><input type="checkbox" id="p88">|<select id="rm8"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>

<button onclick="factory();">出荷設定の呼び出し</button>

---

<script>
for (let i = 0; i < 8; ++i) {
  let select = document.getElementById('rp' + (i + 1).toString());
  for (let j = 0; j < 12; ++j) {
    const text = [
      'なし',
      '30連射（表）',
      '30連射（裏）',
      '20連射（表）',
      '20連射（裏）',
      '15連射（表）',
      '15連射（裏）',
      '12連射（表）',
      '12連射（裏）',
      '10連射（表）',
      '10連射（裏）',
      'カスタム',
    ];
    let opt = document.createElement('option');
    opt.innerText = text[j];
    select.appendChild(opt);
  }
}
</script>

<script src="https://toyoshim.github.io/CH559Flasher.js/CH559Flasher.js"></script>
<script>
window.uiMessages = {
  connected: '接続しました（ブートローダー： ', 
  connectedInformation: ' / 設定フォーマット: v',
  error: 'エラーが発生しました: ',
  errorOnRead: '設定読込中にエラーが発生しました: ',
  findDevice: 'デバイスを探す',
  idle: '待機中',
  noData: '接続しましたが、IONA-SBの設定データが確認できません',
  noDevice: '例外が発生しました、デバイスが接続されているか確認して下さい',
  save: '変更を保存する',
  saved: '保存しました',
};
</script>
<script src="setting.js">