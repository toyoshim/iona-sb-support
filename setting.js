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
let majorVersion = 0;
let minorVersion = 0;

for (let i = 0; i < preset.length; ++i) {
  data[544 + i] = preset[i];
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
    setStatus(uiMessages.noDevice);
    flasher = null;
    setButtonStatus(uiMessages.findDevice);
    return;
  })) {
    setStatus(uiMessages.error + flasher.error);
    flasher = null;
    setButtonStatus(uiMessages.findDevice);
    return;
  }
  for (let i = 0; i < 544; i += 32) {
    if (!await flasher.writeDataInRange(i, data.buffer.slice(i, i + 32))) {
      setStatus(uiMessages.error + flasher.error);
      flasher = null;
      setButtonStatus(uiMessages.findDevice);
      return;
    }
  }
  setStatus(uiMessages.saved);
}

async function connect() {
  if (flasher) {
    save();
    return;
  }
  flasher = new CH559Flasher();
  await flasher.connect();
  if (flasher.error) {
    setStatus(uiMessages.error + flasher.error);
    flasher = null;
    return;
  }
  for (let i = 0; i < 544; i += 32) {
    let buffer = await flasher.readDataInRange(0xf000 + i, 32);
    if (!buffer) {
      setStatus(uiMessages.errorOnRead + flasher.error);
      flasher = null;
      return;
    }
    let b8 = new Uint8Array(buffer)
    for (let j = 0; j < 32; ++j) {
      data[i + j] = b8[j];
    }
  }
  if (data[0] != 'I'.charCodeAt(0) ||
    data[1] != 'N'.charCodeAt(0) ||
    data[2] != 'S'.charCodeAt(0) ||
    data[3] != 'B'.charCodeAt(0) ||
    data[4] != 1 ||
    (data[5] != 0 && data[5] != 2)) {
    setStatus(uiMessages.noData);
    flasher = null;
    return;
  }
  majorVersion = data[4];
  minorVersion = data[5];
  if (data[5] == 0) {  // options are undefined for 1.00
    document.getElementById('opt_2p').setAttribute('disabled', '');
    for (let i = 0; i < 8; ++i) {
      data[520 + i] = 0;
    }
  } else {
    document.getElementById('opt_2p').removeAttribute('disabled');
  }
  setStatus(uiMessages.connected + flasher.bootLoader +
    uiMessages.connectedInformation + data[4].toString() + '.' +
    ('0' + data[5].toString()).substring(-2, 2) + ')');
  valid = true;
  setButtonStatus(uiMessages.save);
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
  const option_bias = (index > 7) ? 24 : 0;
  const offset = 8 + 64 * index + option_bias;

  for (let i = 0; i < 8; ++i) {
    reflectButton(i, offset + 12 + i * 2);
    let fire_offset = offset + 44 + i * 2;
    setFirePattern(i, [data[fire_offset], data[fire_offset + 1]]);
  }

  if (index < 8) {
    document.getElementById('opt_2p').checked =
      (data[8 + 64 * 8 + index] & 1) != 0;
  }
}

function update(index) {
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

    data[offset + 12 + i * 2 + 0] = value >> 8;
    data[offset + 12 + i * 2 + 1] = value & 0xff;
    data[offset + 44 + i * 2 + 0] = pattern;
    data[offset + 44 + i * 2 + 1] = 0xff << (8 - len);
  }

  // Button 9 fixup
  data[offset + 28] = 0x00;
  data[offset + 29] = 0x02;
  data[offset + 60] = 0xff;
  data[offset + 61] = 0xff;

  // Button 10 fixup
  data[offset + 30] = 0x00;
  data[offset + 31] = 0x01;
  data[offset + 62] = 0xff;
  data[offset + 63] = 0xff;

  // option
  data[8 + 64 * 8 + index] = 0;
  if (document.getElementById('opt_2p').checked) {
    data[8 + 64 * 8 + index] |= 1;
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
  for (let j = 0; j < 8; ++j) {
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
    const id = 'rp' + (index + 1).toString();
    document.getElementById(id).children[11].selected = true;
  });
}

setStatus(uiMessages.idle);
setButtonStatus(uiMessages.findDevice);