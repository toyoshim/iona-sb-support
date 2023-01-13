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

<button id="button" onclick="connect();">デバイスを探す</button>
<pre id="status">待機中</pre>

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
let flasher = null;
let preset = [
  0x80, 0x00, 0x40, 0x00, 0x20, 0x00, 0x10, 0x00, 0x08, 0x00, 0x04, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x80, 0x00, 0x40, 0x00, 0x20, 0x00, 0x10, 0x00, 0x08, 0x00, 0x04, 0x00, 0x02, 0x00, 0x01, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
  0x80, 0x00, 0x40, 0x00, 0x20, 0x00, 0x10, 0x00, 0x08, 0x00, 0x04, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x80, 0x00, 0x40, 0x00, 0x40, 0x00, 0x20, 0x00, 0x10, 0x00, 0x00, 0x00, 0x02, 0x00, 0x01, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
  0x80, 0x00, 0x40, 0x00, 0x20, 0x00, 0x10, 0x00, 0x08, 0x00, 0x04, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x80, 0x00, 0x40, 0x02, 0x00, 0x01, 0x00, 0x00, 0x80, 0x00, 0x40, 0x00, 0x02, 0x00, 0x01, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xaa, 0xff, 0xaa, 0xff, 0xaa, 0xff, 0xaa, 0xff, 0xff, 0xff, 0xff, 0xff,
  0x80, 0x00, 0x40, 0x00, 0x20, 0x00, 0x10, 0x00, 0x08, 0x00, 0x04, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x80, 0x00, 0x40, 0x02, 0x00, 0x01, 0x00, 0x00, 0x80, 0x00, 0x40, 0x00, 0x02, 0x00, 0x01, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xcc, 0xff, 0xcc, 0xff, 0xcc, 0xff, 0xcc, 0xff, 0xff, 0xff, 0xff, 0xff,
  0x80, 0x00, 0x40, 0x00, 0x20, 0x00, 0x10, 0x00, 0x08, 0x00, 0x04, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x80, 0x00, 0x40, 0x02, 0x00, 0x01, 0x00, 0x00, 0x80, 0x00, 0x40, 0x00, 0x02, 0x00, 0x01, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xc0, 0xf8, 0xc0, 0xf8, 0xc0, 0xf8, 0xc0, 0xf8, 0xff, 0xff, 0xff, 0xff,
  0x80, 0x00, 0x40, 0x00, 0x20, 0x00, 0x10, 0x00, 0x08, 0x00, 0x04, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x80, 0x00, 0x40, 0x02, 0x00, 0x01, 0x00, 0x00, 0x80, 0x00, 0x40, 0x00, 0x02, 0x00, 0x01, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe0, 0xfc, 0xe0, 0xfc, 0xe0, 0xfc, 0xe0, 0xfc, 0xff, 0xff, 0xff, 0xff,
];
let presetCount = preset.length / 64;
let data = new Uint8Array(0x400);
let valid = false;

for (let i = 0; i < preset.length; ++i) {
  data[8 + 64 * 8 + i] = preset[i];
}

function setStatus(status) {
  document.getElementById('status').innerText = status;
}

function setButtonStatus(status) {
  document.getElementById('button').innerText = status;
}

async function save() {
  if (!flasher) {
    return;
  }
  if (!await flasher.eraseData().catch(e => {
    setStatus('例外が発生しました、デバイスが接続されているか確認して下さい');
    flasher = null;
    setButtonStatus('デバイスを探す');
    return;
  })) {
    setStatus('エラーが発生しました： ' + flasher.error);
    flasher = null;
    setButtonStatus('デバイスを探す');
    return;
  }
  for (let i = 0; i < 520; i += 52) {
    if (!await flasher.writeDataInRange(i, data.buffer.slice(i, i + 52))) {
      setStatus('エラーが発生しました： ' + flasher.error);
      flasher = null;
      setButtonStatus('デバイスを探す');
      return;
    }
  }
  setStatus('保存しました');
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
  for (let i = 0; i < 520; i += 52) {
    let buffer = await flasher.readDataInRange(0xf000 + i, 52);
    if (!buffer) {
      setStatus('設定読込中にエラーが発生しました： ' + flasher.error);
      flasher = null;
      return;
    }
    let b8 = new Uint8Array(buffer)
    for (let j = 0; j < 52; ++j) {
      data[i + j] = b8[j];
    }
  }
  if (data[0] != 'I'.charCodeAt(0) ||
      data[1] != 'N'.charCodeAt(0) ||
      data[2] != 'S'.charCodeAt(0) ||
      data[3] != 'B'.charCodeAt(0) ||
      data[4] != 1  ||
      data[5] != 0) {
    setStatus('接続しましたが、IONA-SBの設定データが確認できません');
    flasher = null;
    return;
  }
  setStatus('接続しました（ブートローダー： ' + flasher.bootLoader +
      ' / 設定フォーマット: v' + data[4].toString() + '.' +
      ('0' + data[5].toString()).substr(-2, 2) + ')');
  valid = true;
  setButtonStatus('変更を保存する');
  reflect(0);
}

function reflectButton(index, offset) {
  // Fixup
  data[offset + 0] &= 0x03;
  data[offset + 1] &= 0xfc;

  const indexString = (index + 1).toString();
  const map = (data[offset + 0] << 8) | data[offset + 1];
  for (let i = 0; i < 8; ++i) {
    let id = 'b' + indexString + (i + 1).toString();
    const checkbox = document.getElementById(id);
    if (map & ((0x8000 >> 6) >> i)) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  }
}

const firePatternPreset = [
  [0xff, 0xff],  // N/A
  [0xaa, 0xff],  // 30A
  [0x55, 0xff],  // 30B
  [0x90, 0xfc],  // 20A
  [0x24, 0xfc],  // 20B
  [0xcc, 0xff],  // 15A
  [0x33, 0xff],  // 15B
  [0xc0, 0xf8],  // 12A
  [0x18, 0xf8],  // 12B
  [0xe0, 0xfc],  // 10A
  [0x1c, 0xfc],  // 10B
];
 
function checkPreset(pattern, mask) {
  for (let i = 0; i < firePatternPreset.length; ++i) {
    if (firePatternPreset[i][0] == pattern && firePatternPreset[i][1] == mask) {
      return i;
    }
  }
  return 11;
}

function selectFirePattern(index, preset) {
  if (preset == 11) {
    return;
  }
  setFirePattern(index, firePatternPreset[preset]);
}

function selectFireMask(index, len) {
  for (let i = 0; i < 8; ++i) {
    let id = 'p' + (index + 1).toString() + (i + 1).toString();
    const checkbox = document.getElementById(id);
    if (i < len) {
      checkbox.removeAttribute('disabled');
    } else {
      checkbox.setAttribute('disabled', '');
    }
  }
}

function setFirePattern(index, fire) {
  const indexString = (index + 1).toString();
  const pattern = fire[0];
  const mask = fire[1];
  let len = 0;
  let decided = false;
  for (let i = 0; i < 8; ++i) {
    let id = 'p' + indexString + (i + 1).toString();
    const checkbox = document.getElementById(id);
    if (pattern & (0x80 >> i)) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
    if (!len || (!decided && (mask & (0x80 >> i)))) {
      checkbox.removeAttribute('disabled');
      len++;
    } else {
      checkbox.setAttribute('disabled', '');
      decided = true;
    }
  }
  let t = document.getElementById('rm' + indexString);
  len--;
  for (let i = 0; i < 8; ++i) {
    t.children[i].selected = i == len;
  }
  const preset = checkPreset(pattern, mask);
  const target = document.getElementById('rp' + indexString).children[preset];
  if (!target.selected) {
    target.selected = true;
  }
}

function reflect(index) {
  const offset = 8 + 64 * index;

  // START fixup
  data[offset + 0] = 0x80;
  data[offset + 1] = 0x00;
  // SERVICE fixup
  data[offset + 2] = 0x40;
  data[offset + 3] = 0x00;
  // UP fixup
  data[offset + 4] = 0x20;
  data[offset + 5] = 0x00;
  // DOWN fixup
  data[offset + 6] = 0x10;
  data[offset + 7] = 0x00;
  // LEFT fixup
  data[offset + 8] = 0x08;
  data[offset + 9] = 0x00;
  // RIGHT fixup
  data[offset + 10] = 0x04;
  data[offset + 11] = 0x00;

  for (let i = 0; i < 8; ++i) {
    reflectButton(i, offset + 12 + i * 2);
    let fire_offset = offset + 44 + i * 2;
    setFirePattern(i, [data[fire_offset], data[fire_offset + 1]]);
  }
}

function update(index) {
  for (let i = 0; i < 8; ++i) {
    let value = 0;
    let pattern = 0;
    let len = 0;
    let children = document.getElementById('rm' + (i + 1).toString()).children;
    for (let j = 0; j < 8; ++j) {
      let id = 'b' + (i + 1).toString() + (j + 1).toString();
      if (document.getElementById(id).checked) {
        value |= (0x200 >> j);
      }
      id = 'p' + (i + 1).toString() + (j + 1).toString();
      if (document.getElementById(id).checked) {
        pattern |= (0x80 >> j);
      }
      if (children[j].selected) {
        len = j + 1;
      }
    }
    data[8 + 64 * index + 12 + i * 2 + 0] = value >> 8;
    data[8 + 64 * index + 12 + i * 2 + 1] = value & 0xff;
    data[8 + 64 * index + 44 + i * 2 + 0] = pattern;
    data[8 + 64 * index + 44 + i * 2 + 1] = 0xff << (8 - len);
  }
}

function decide() {
  const children = document.getElementById('select').children;
  for (let i = 0; i < 8; ++i) {
    if (children[i].selected) {
      update(i);
      break;
    }
  }
}

function factory() {
  for (let i = 0; i < 8; ++i) {
    reflect(8 + ((i < 6) ? i : 0));
    update(i);
  }
}

// Selct layout.
document.getElementById('select').addEventListener('change', e => {
  for (let i = 0; i < 8; ++i) {
    if (e.target.children[i].selected) {
      reflect(i);
      break;
    }
  }
});

// Copy layout.
document.getElementById('copy').addEventListener('change', e => {
  for (let i = 0; i < (9 + presetCount); ++i) {
    if (e.target.children[i].selected) {
      if (i != 0) {
        reflect(i - 1);
      }
      break;
    }
  }
});

// RapidFire Preset listener.
for (let i = 0; i < 8; ++i) {
  const id = 'rp' + (i + 1).toString();
  document.getElementById(id).addEventListener('change', e => {
    const index = e.target.id.charCodeAt(2) - '1'.charCodeAt(0);
    for (let i = 0; i < e.target.childElementCount; ++i) {
      if (e.target[i].selected) {
        selectFirePattern(index, i);
      }
    }
  });
}

// RapidFire Pattern listener.
for (let i = 0; i < 8; ++i) {
  for (let j = 0; i < 8; ++i) {
    const id = 'p' + (i + 1).toString() + (j + 1).toString();
    document.getElementById(id).addEventListener('change', e => {
      const index = e.target.id.charCodeAt(1) - '1'.charCodeAt(0);
      const id = 'rp' + (index + 1).toString();
      document.getElementById(id).children[11].selected = true;
    });
  }
}

// RapidFire Mask listener.
for (let i = 0; i < 8; ++i) {
  const id = 'rm' + (i + 1).toString();
  document.getElementById(id).addEventListener('change', e => {
    const index = e.target.id.charCodeAt(2) - '1'.charCodeAt(0);
    for (let i = 0; i < e.target.childElementCount; ++i) {
      if (e.target[i].selected) {
        selectFireMask(index, i + 1);
      }
    }
  });
}
</script>