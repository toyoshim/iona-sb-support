---
layout: default_en
title: Layout Settings
permalink: /setting_en
---
# Layout Settings
---
## Preparation
Connect IONA-SB to your PC while pressing BOOT button via USB Type-C.
Then, open this page with Chrome, or Chromium based browser with WebUSB support is needed.
WebUSB API is used to manage your device.

Windows users need to install a driver when you use this site first time.
If you already set it up for IONA-US, you don't need it.
Please follow the WinUSB Settings steps explained in [IONA-US Firmware Updates](https://toyoshim.github.io/iona-us/firmware_en).
There is a screen capture movie that shows hot it will be.

Once you complete the preparation, press the 'Find IONA-SB' button below.
You need to select WinChipHead device and push the connect button in the dialog.

The same button will be changed to show 'Save Changes' to memorize the modified settings into the IONA-SB board.

<button id="button" onclick="connect();"></button>
<pre id="status"></pre>

---
## Button Layout
- Select the map ID to modify layout. Once you complete the edit, press 'Decide' button.
- Without pressing 'Decice', changes will be disposed on selecting other maps.
- You will need to press 'Decide' also after copying data from other maps or presets.
- Once you finish all edits, press 'Save Changes' to store all changes into the IONA-SB device.

<select id="select"><option>Map 1</option><option>Map 2</option><option>Map 3</option><option>Map 4</option><option>Map 5</option><option>Map 6</option><option>Map 7</option><option>Map 8</option></select>
&nbsp;
<button id="store" onclick="decide();">Decide</button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Copy from other maps or presets
<select id="copy"><option>-</option><option>Map 1</option><option>Map 2</option><option>Map 3</option><option>Map 4</option><option>Map 5</option><option>Map 6</option><option>Map 7</option><option>Map 8</option><option>8 buttons</option><option>4/6 buttons</option><option>4 buttons 30/s</option><option>4 buttons 15/s</option><option>4 buttons 12/s</option><option>4 buttons 10/s</option></select>

| |1|2|3|4|5|6|7|8|Rapid-Fire|Seq. Pattern|Len.|
|:|-|-|-|-|-|-|-|-|:-----:|:--------:|:--:|
|Button 1|<input type="checkbox" id="b11">|<input type="checkbox" id="b12">|<input type="checkbox" id="b13">|<input type="checkbox" id="b14">|<input type="checkbox" id="b15">|<input type="checkbox" id="b16">|<input type="checkbox" id="b17">|<input type="checkbox" id="b18">|<select id="rp1"></select>|<input type="checkbox" id="p11"><input type="checkbox" id="p12"><input type="checkbox" id="p13"><input type="checkbox" id="p14"><input type="checkbox" id="p15"><input type="checkbox" id="p16"><input type="checkbox" id="p17"><input type="checkbox" id="p18">|<select id="rm1"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>
|Button 2|<input type="checkbox" id="b21">|<input type="checkbox" id="b22">|<input type="checkbox" id="b23">|<input type="checkbox" id="b24">|<input type="checkbox" id="b25">|<input type="checkbox" id="b26">|<input type="checkbox" id="b27">|<input type="checkbox" id="b28">|<select id="rp2"></select>|<input type="checkbox" id="p21"><input type="checkbox" id="p22"><input type="checkbox" id="p23"><input type="checkbox" id="p24"><input type="checkbox" id="p25"><input type="checkbox" id="p26"><input type="checkbox" id="p27"><input type="checkbox" id="p28">|<select id="rm2"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>
|Button 3|<input type="checkbox" id="b31">|<input type="checkbox" id="b32">|<input type="checkbox" id="b33">|<input type="checkbox" id="b34">|<input type="checkbox" id="b35">|<input type="checkbox" id="b36">|<input type="checkbox" id="b37">|<input type="checkbox" id="b38">|<select id="rp3"></select>|<input type="checkbox" id="p31"><input type="checkbox" id="p32"><input type="checkbox" id="p33"><input type="checkbox" id="p34"><input type="checkbox" id="p35"><input type="checkbox" id="p36"><input type="checkbox" id="p37"><input type="checkbox" id="p38">|<select id="rm3"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>
|Button 4|<input type="checkbox" id="b41">|<input type="checkbox" id="b42">|<input type="checkbox" id="b43">|<input type="checkbox" id="b44">|<input type="checkbox" id="b45">|<input type="checkbox" id="b46">|<input type="checkbox" id="b47">|<input type="checkbox" id="b48">|<select id="rp4"></select>|<input type="checkbox" id="p41"><input type="checkbox" id="p42"><input type="checkbox" id="p43"><input type="checkbox" id="p44"><input type="checkbox" id="p45"><input type="checkbox" id="p46"><input type="checkbox" id="p47"><input type="checkbox" id="p48">|<select id="rm4"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>
|Button 5|<input type="checkbox" id="b51">|<input type="checkbox" id="b52">|<input type="checkbox" id="b53">|<input type="checkbox" id="b54">|<input type="checkbox" id="b55">|<input type="checkbox" id="b56">|<input type="checkbox" id="b57">|<input type="checkbox" id="b58">|<select id="rp5"></select>|<input type="checkbox" id="p51"><input type="checkbox" id="p52"><input type="checkbox" id="p53"><input type="checkbox" id="p54"><input type="checkbox" id="p55"><input type="checkbox" id="p56"><input type="checkbox" id="p57"><input type="checkbox" id="p58">|<select id="rm5"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>
|Button 6|<input type="checkbox" id="b61">|<input type="checkbox" id="b62">|<input type="checkbox" id="b63">|<input type="checkbox" id="b64">|<input type="checkbox" id="b65">|<input type="checkbox" id="b66">|<input type="checkbox" id="b67">|<input type="checkbox" id="b68">|<select id="rp6"></select>|<input type="checkbox" id="p61"><input type="checkbox" id="p62"><input type="checkbox" id="p63"><input type="checkbox" id="p64"><input type="checkbox" id="p65"><input type="checkbox" id="p66"><input type="checkbox" id="p67"><input type="checkbox" id="p68">|<select id="rm6"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>
|Button 7|<input type="checkbox" id="b71">|<input type="checkbox" id="b72">|<input type="checkbox" id="b73">|<input type="checkbox" id="b74">|<input type="checkbox" id="b75">|<input type="checkbox" id="b76">|<input type="checkbox" id="b77">|<input type="checkbox" id="b78">|<select id="rp7"></select>|<input type="checkbox" id="p71"><input type="checkbox" id="p72"><input type="checkbox" id="p73"><input type="checkbox" id="p74"><input type="checkbox" id="p75"><input type="checkbox" id="p76"><input type="checkbox" id="p77"><input type="checkbox" id="p78">|<select id="rm7"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>
|Button 8|<input type="checkbox" id="b81">|<input type="checkbox" id="b82">|<input type="checkbox" id="b83">|<input type="checkbox" id="b84">|<input type="checkbox" id="b85">|<input type="checkbox" id="b86">|<input type="checkbox" id="b87">|<input type="checkbox" id="b88">|<select id="rp8"></select>|<input type="checkbox" id="p81"><input type="checkbox" id="p82"><input type="checkbox" id="p83"><input type="checkbox" id="p84"><input type="checkbox" id="p85"><input type="checkbox" id="p86"><input type="checkbox" id="p87"><input type="checkbox" id="p88">|<select id="rm8"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>

<button onclick="factory();">Recall Factory Settings</button>

---

<script>
for (let i = 0; i < 8; ++i) {
  let select = document.getElementById('rp' + (i + 1).toString());
  for (let j = 0; j < 12; ++j) {
    const text = [
      'N/A',
      '30/s (Fwd)',
      '30/s (Back)',
      '20/s (Fwd)',
      '20/s (Back)',
      '15/s (Fwd)',
      '15/s (Back)',
      '12/s (Fwd)',
      '12/s (Back)',
      '10/s (Fwd)',
      '10/s (Back)',
      'Custom',
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
  connected: 'Connected (Bootlolader: ', 
  connectedInformation: ' / Setting format: v',
  error: 'Error: ',
  errorOnRead: 'Error on reading settings: ',
  findDevice: 'Find IONA-SB',
  idle: 'Waiting for connecting to IONA-SB',
  noData: 'Connected, but failed to read IONA-SB settings',
  noDevice: 'Unexpected error. Make sure your IONA-SB is still connected',
  save: 'Save Changes',
  saved: 'Saved',
};
</script>
<script src="setting.js">