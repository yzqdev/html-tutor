import exp from 'constants'

let csscom = {
  co: 'color:#${1:333};',
  'co:f': 'color:#${fff};',
  ccur: 'color:currentColor;',

  'c:hsl': 'color:hsl(${1:0}, ${2:0%}, ${3:0%});',
  'c:hsla': 'color:hsla(${1:0}, ${2:0%}, ${3:0%}, .${4:5});',
  'bg:hsl': 'background:hsl(${1:0}, ${2:0%}, ${3:0%});',
  'bg:hsla': 'background:hsla(${1:0}, ${2:0%}, ${3:0%}, .${4:5});',
  'bgc:hsl': 'background-color:hsl(${1:0}, ${2:0%}, ${3:0%});',
  'bgc:hsla': 'background-color:hsla(${1:0}, ${2:0%}, ${3:0%}, .${4:5});',

  objp: 'object-position:${1:50%} ${2:50%};',
  'objp:c': 'object-position:center center;',
  'objp:t': 'object-position:top;',

  objf: 'object-fit:${fill};',
  'objf:ct': 'object-fit:contain;',
  'objf:cv': 'object-fit:cover;',
  'objf:s': 'object-fit:scale-down;',
  'objf:n': 'object-fit:none;',

  ovs: '-ms-overflow-style: -ms-autohiding-scrollbar;\n-webkit-overflow-scrolling: touch;',

  imgr: 'image-resolution:from-image;',
  'imgr:s': 'image-resolution:snap;',
  'imgr:fs': 'image-resolution:from-image snap;',
  'imgr:sf': 'image-resolution:snap from-image;',
  'imgr+': 'image-resolution:300dpi from-image snap;',

  imgo: 'image-orientation:;',

  c: '/* $1 */|',
  cm: '/**\n * $1\n${2:${4: * @file:     }\n${5: * @author:   }\n${6: * @update:   }\n${7: * @note:     }\n${8: * @doc:      }}\n */\n|',
  c1: '/* ==========================================================================\n   ${1:1级区块标题}\n   ========================================================================== */\n|',
  c2: '/* --------------------------------------------------------------------------\n   ${1:2级区块标题}\n   -------------------------------------------------------------------------- */\n|',
  fsm: '-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale; /* Firefox 25+ */',
  'fsm:s': '-webkit-font-smoothing: subpixel-antialiased; /* 默认值 */',
  'fsm:a': '-webkit-font-smoothing: auto;\n-moz-osx-font-smoothing: auto;',
  'fsm:n': '-webkit-font-smoothing: none;',

  f: 'float:${none};',
  'f:n': 'float:${none};',
  'f:l': 'float:left;',
  fl: 'float:left;',
  'f:r': 'float:right;',

  fo: 'font:|;',
  fst: 'font-style:${normal};',
  'fst:n': 'font-style:normal;',
  'fst:i': 'font-style:italic;',
  'fst:o': 'font-style:oblique;',
  fs: 'font-size:${medium};',
  fsa: 'font-size-adjust:|;',
  'fsa:n': 'font-size-adjust:none;',

  '@c': '@charset "utf-8";',
  '@f': "@font-face {\n\tfont-family: |;\n\tsrc: local('|'), url(|);|\n}",

  '@kf':
    '@-webkit-keyframes ${1:identifier} {\n\t${2:0%} {\n\t\t${3}\n\t}${6}\n\t${4:100%} {\n\t\t${5}\n\t}\n}\n@-moz-keyframes ${1:identifier} {\n\t${2:0%} {\n\t\t${3}\n\t}${6}\n\t${4:100%} {\n\t\t${5}\n\t}\n}\n}\n@-o-keyframes ${1:identifier} {\n\t${2:0%} {\n\t\t${3}\n\t}${6}\n\t${4:100%} {\n\t\t${5}\n\t}\n}\n}\n@keyframes ${1:identifier} {\n\t${2:0%} {\n\t\t${3}\n\t}${6}\n\t${4:100%} {\n\t\t${5}\n\t}\n}\n}',

  '@ff':
    "@font-face {\n\tfont-family: '${1:FontName}';\n\tsrc: url('${2:FileName}.eot'); /* IE9+ */\n\tsrc: url('${2:FileName}.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n\t\t url('${2:FileName}.woff') format('woff'), /* Chrome,Firefox */\n\t\t url('${2:FileName}.ttf') format('truetype'), /* Chrome,Firefox,Opera,Safari,Android, iOS 4.2+ */\n\t\t url('${2:FileName}.svg#${1:FontName}') format('svg'); /* iOS 4.1- */${3}\n}",
  'unicode-range': 'unicode-range: U+0-10FFFF; /* 默认值 */',
  'src:l': "src:\n\tlocal('${1:font-name}'),\n\turl(${2:font-url});",

  placeholder:
    '/* Firefox 18- */\ninput:-moz-placeholder, textarea:-moz-placeholder {\n\tcolor: ${1:darkGray};\n}\n/* Firefox 19+ */\ninput::-moz-placeholder, textarea::-moz-placeholder {\n\tcolor: ${1:darkGray};\n}\n/* IE10+ */\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n\tcolor: ${1:darkGray};\n}\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n\tcolor: ${1:darkGray};\n}',
  placeholderfocus:
    '/* Firefox 18- */\ninput:focus:-moz-placeholder, textarea:focus:-moz-placeholder {\n\tcolor: ${1:darkGray};\n}\n/* Firefox 19+ */\ninput:focus::-moz-placeholder, textarea:focus::-moz-placeholder {\n\tcolor: ${1:darkGray};\n}\n/* IE10+ */\ninput:focus:-ms-input-placeholder, textarea:focus:-ms-input-placeholder {\n\tcolor: ${1:darkGray};\n}\ninput:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {\n\tcolor: ${1:darkGray};\n}',
  selection:
    '::-moz-selection{\n\tbackground: #${1:b3d4fc};\n\ttext-shadow: none;\n}\n::selection{\n\tbackground: #${1:b3d4fc};\n\ttext-shadow: none;\n}',
  clip: 'clip: rect(${1:0px}, ${1:0px}, ${1:0px}, ${1:0px});',
  'clip:inset': 'clip: inset(${1:0px}, ${1:0px}, ${1:0px}, ${1:0px});',
  transparent: 'transparent',
  bdra: 'border-radius:|;',
  bg: 'background:url(${1}) ${2:0} ${3:0}${4: ${5:no-}repeat${6}};',
  'bg+':
    'background:${1:#fff }url(${2}) ${3:50%} ${4:50%}${5: ${6:no-}repeat${7}};',
  bg2: 'background: url(${2:图片1}) ${3:50%} ${4:50%} / ${5:(bg-size)}${6:100%}${7:,contain} ${8:no-repeat} ${9:(bg-origin)}${10:padding-box} ${11:(bg-clip)}${12:border-box} ${13:fixed},\n           url(${14:图片2}) ${15:#fff};/* 背景色始终写到最后 */\n|',
  bg3: 'background: url(${2:图片1}) ${3:50%} ${4:50%} / ${5:(bg-size)}${6:100%}${7:,contain} ${8:no-repeat} ${9:(bg-origin)}${10:padding-box} ${11:(bg-clip)}${12:border-box} ${13:fixed},\n           url(${14:图片2}) ${15:50%} ${16:50%} ${17:no-repeat},\n           url(${18:图片3}) ${19:50%} ${20:50%} ${21:no-repeat} ${22:#fff};/* 背景色始终写到最后 */\n|',

  'bg:ie':
    "_background: none;\n_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${1:x.png}', sizingMethod='${2:crop}');",

  bgr: 'background-repeat: no-repeat;',
  'bgr:sp': 'background-repeat: space; /* 自动缩放直到适应且填充满整个容器 */',
  'bgr:rd':
    'background-repeat: round; /* 以相同的间距平铺且填充满整个容器或某个方向 */',
  'bga:l': 'background-attachment: local;',
  bgp: 'background-position: ${1:x} ${2:y};',
  'bgp+': 'background-position: ${1:bottom 10px} ${2:right 10px};',
  bgo: 'background-origin: padding-box;',
  bgcp: 'background-clip: border-box;',
  'bgcp:t': 'background-clip: text; /* 仅 WebKit 支持 */',
  'bgsz:ct':
    'background-size: contain; /* 等比缩放到宽度或高度与容器的宽度或高度相等，背景图像始终被包含在容器内 */',
  'bgsz:cv':
    'background-size: cover; /* 等比缩放到完全覆盖容器，背景图像有可能超出容器 */',
  'bgi:s':
    'background-image: -webkit-image-set(\n                  url(${1}) 1x,\n                  url(${2}) 2x); /* Retina Safari 6+,Chrome 21+ */\n',
  'bgi+':
    '@media\n\tonly screen and (-o-min-device-pixel-ratio: 2/1), /* Opera */\n\tonly screen and (min--moz-device-pixel-ratio: 2), /* Firefox 16 之前 */\n\tonly screen and (-moz-min-device-pixel-ratio: 2), /* Firefox */\n\tonly screen and (-webkit-min-device-pixel-ratio: 2), /* WebKit */\n\tonly screen and (min-resolution: 192dpi), /* 不支持dppx的浏览器 */\n\tonly screen and (min-resolution: 2dppx) /* 标准 */\n{\n\t${1:.selector}{\n\t\tbackground-image:url(${2});/* Retina */\n\t\tbackground-size: ${3:图片宽度÷2}px ${4:图片高度÷2}px;\n\t}\n}\n',
  ':after': ":after {\n\tcontent: '';\n\t|${child}\n}",
  ':befroe': ":befroe {\n\tcontent: '';\n\t|${child}\n}",
  checked: ':checked {\n\t|${child}\n}',
  rsz: 'resize:both;\noverflow:auto;',
  'rsz:b': 'resize:both;\noverflow:auto;',
  'rsz:h': 'resize:horizontal;\noverflow:auto;',
  'rsz:v': 'resize:vertical;\noverflow:auto;',
  k: '{\n\t|${child}\n}',

  'd:fx':
    'display: -webkit-box; /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */\ndisplay: -moz-box; /* Firefox 17- */\ndisplay: -webkit-flex; /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */\ndisplay: -moz-flex; /* Firefox 18+ */\ndisplay: -ms-flexbox; /* IE 10 */\ndisplay: flex; /* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */',
  'd:ifx':
    'display: -ms-inline-flexbox;\ndisplay: -webkit-inline-flex;\ndisplay: -moz-inline-flex; /* Firefox 18+ */\ndisplay: inline-flex;',

  fx: '/* 伸缩容器内的子元素如何分配空间 */\n-webkit-box-flex: ${1:0};\n-moz-box-flex: ${1:0};\n-webkit-flex: ${1:0} ${2:1} ${3:auto};\n-ms-flex: ${1:0} ${2:1} ${3:auto};\nflex: ${1:0} ${2:1} ${3:auto};',

  fxg: '/* 伸缩项目的扩展比率 */\n-webkit-flex-grow: ${1:0}; /* Chrome 21+ */\n-moz-flex-grow: ${1:0}; /* Firefox 18-20 */\nflex-grow: ${1:0}; /* Chrome 29+, Opera 12.1 */',

  fxs: '/* 伸缩项目的收缩比率 */\n-webkit-flex-shrink: ${1:1}; /* Chrome 21+ */\n-moz-flex-shrink: ${1:1}; /* Firefox 18-20 */\nflex-shrink: ${1:1}; /* Chrome 29+, Opera 12.1 */',

  fxb: '/* 伸缩基准值 */\n-webkit-flex-basis: ${1:auto}; /* Chrome 21+ */\n-moz-flex-basis: ${1:auto}; /* Firefox 18-22 */\nflex-basis: ${1:auto}; /* Chrome 29+, Opera 12.1 */',

  fxf: '-webkit-flex-flow:${1:row} ${2:nowrap};\nflex-flow:${1:row} ${2:nowrap}; /* Fiefox 28+ */',
  'fxf:rw':
    '-webkit-flex-flow:${1:row} ${2:wrap};\nflex-flow:${1:row} ${2:wrap};',
  'fxf:cn':
    '-webkit-flex-flow:${1:column} ${2:nowrap};\nflex-flow:${1:column} ${2:nowrap};',
  'fxf:cw':
    '-webkit-flex-flow:${1:column} ${2:wrap};\nflex-flow:${1:column} ${2:wrap};',
  'fxf:cwr':
    '-webkit-flex-flow:${1:column} ${2:wrap-reverse};\nflex-flow:${1:column} ${2:wrap-reverse};',

  fxw: '-webkit-flex-wrap: ${1:nowrap};\n-ms-flex-wrap: ${1:nowrap};\nflex-wrap: ${1:nowrap};/* Fiefox 28+ */',
  'fxw:w':
    '-webkit-flex-wrap: ${1:wrap};\n-ms-flex-wrap: ${1:wrap};\nflex-wrap: ${1:wrap};',
  'fxw:wr':
    '-webkit-flex-wrap: ${1:wrap-reverse};\n-ms-flex-wrap: ${1:wrap-reverse};\nflex-wrap: ${1:wrap-reverse};',

  'fx:d':
    '-webkit-box-direction: ${1:normal};\n-moz-box-direction: ${1:normal};\n-webkit-box-orient: ${2:horizontal};\n-moz-box-orient: ${2:horizontal};\n-webkit-flex-direction: ${3:row};\n-ms-flex-direction: ${3:row};\nflex-direction: ${3:row};',
  'fx:drr':
    '-webkit-box-direction: ${1:reverse};\n-moz-box-direction: ${1:reverse};\n-webkit-box-orient: ${2:horizontal};\n-moz-box-orient: ${2:horizontal};\n-webkit-flex-direction: ${3:row-reverse};\n-ms-flex-direction: ${3:row-reverse};\nflex-direction: ${3:row-reverse};',
  'fx:dc':
    '-webkit-box-direction: ${1:normal};\n-moz-box-direction: ${1:normal};\n-webkit-box-orient: ${2:vertical};\n-moz-box-orient: ${2:vertical};\n-webkit-flex-direction: ${3:column};\n-ms-flex-direction: ${3:column};\nflex-direction: ${3:column};',
  'fx:dcr':
    '-webkit-box-direction: ${1:reverse};\n-moz-box-direction: ${1:reverse};\n-webkit-box-orient: ${2:vertical};\n-moz-box-orient: ${2:vertical};\n-webkit-flex-direction: ${3:column-reverse};\n-ms-flex-direction: ${3:column-reverse};\nflex-direction: ${3:column-reverse};',

  jc: '-webkit-box-pack: ${1:start};\n-moz-box-pack: ${1:start};\n-ms-flex-pack: ${1:start};\n-webkit-justify-content: flex-${2:start};\njustify-content: flex-${2:start};',
  'jc:e':
    '-webkit-box-pack: ${1:end};\n-moz-box-pack: ${1:end};\n-ms-flex-pack: ${1:end};\n-webkit-justify-content: flex-${2:end};\njustify-content: flex-${2:end};',
  'jc:c':
    '-webkit-box-pack: center;\n-moz-box-pack: center;\n-ms-flex-pack: center;\n-webkit-justify-content: center;\njustify-content: center;',

  'jc:sb':
    '-webkit-box-pack: ${1:justify};\n-moz-box-pack: ${1:justify};\n-ms-flex-pack: ${1:justify};\n-webkit-justify-content: ${2:space-between};\njustify-content: ${2:space-between};',

  'jc:sa':
    '/* 旧版 flex 不支持 */-ms-flex-pack: ${2:distribute};\n-webkit-justify-content: ${3:space-around};\njustify-content: ${3:space-around};',

  ac: '-ms-flex-line-pack: ${1:stretch};\n-webkit-align-content: ${1:stretch};\nalign-content: ${1:stretch};',
  'ac:fs':
    '-ms-flex-line-pack: ${2:start};\n-webkit-align-content: flex-${1:start};\nalign-content: flex-${1:start};',
  'ac:fe':
    '-ms-flex-line-pack: ${2:end};\n-webkit-align-content: flex-${1:end};\nalign-content: flex-${1:end};',
  'ac:c':
    '-ms-flex-line-pack: ${1:center};\n-webkit-align-content: ${1:center};\nalign-content: ${1:center};',
  'ac:sb':
    '-ms-flex-line-pack: ${2:justify};\n-webkit-align-content: ${1:space-between};\nalign-content: ${1:space-between};',
  'ac:sa':
    '-ms-flex-line-pack: ${2:distribute};\n-webkit-align-content: ${1:space-around};\nalign-content: ${1:space-around};',

  ai: '-webkit-box-align: ${1:stretch};\n-moz-box-align: ${1:stretch};\n-ms-flex-align: ${1:stretch};\n-webkit-align-items: ${1:stretch};\nalign-items: ${1:stretch};',
  'ai:fs':
    '-webkit-box-align: ${1:start};\n-moz-box-align: ${1:start};\n-ms-flex-align: ${1:start};\n-webkit-align-items: ${2:flex-start};\nalign-items: ${2:flex-start};',
  'ai:fe':
    '-webkit-box-align: ${1:end};\n-moz-box-align: ${1:end};\n-ms-flex-align: ${1:end};\n-webkit-align-items: ${2:flex-end};\nalign-items: ${2:flex-end};',
  'ai:c':
    '-webkit-box-align: ${1:center};\n-moz-box-align: ${1:center};\n-ms-flex-align: ${1:center};\n-webkit-align-items: ${1:center};\nalign-items: ${1:center};',
  'ai:b':
    '-webkit-box-align: ${1:baseline};\n-moz-box-align: ${1:baseline};\n-ms-flex-align: ${1:baseline};\n-webkit-align-items: ${1:baseline};\nalign-items: ${1:baseline};',

  as: '-ms-flex-item-align: ${1:auto};\n-webkit-align-self: ${1:auto};\nalign-self: ${1:auto};',
  'as:fs':
    '-ms-flex-item-align: ${2:start};\n-webkit-align-self: ${1:flex-start};\nalign-self: ${1:flex-start};',
  'as:fe':
    '-ms-flex-item-align: ${2:end};\n-webkit-align-self: ${1:flex-end};\nalign-self: ${1:flex-end};',
  'as:c':
    '-ms-flex-item-align: ${1:center};\n-webkit-align-self: ${1:center};\nalign-self: ${1:center};',
  'as:b':
    '-ms-flex-item-align: ${1:baseline};\n-webkit-align-self: ${1:baseline};\nalign-self: ${1:baseline};',
  'as:s':
    '-ms-flex-item-align: ${1:stretch};\n-webkit-align-self: ${1:stretch};\nalign-self: ${1:stretch};',

  od: '-webkit-box-ordinal-group: ${1:1};\n-moz-box-ordinal-group: ${1:1};\n-webkit-order: ${1:0};\n-ms-flex-order: ${1:0};\norder: ${1:0};',
}
// for (let csscomKey in csscom) {
//   let st =JSON.stringify(`${Object.keys(csscom)}:{prefix:${Object.keys(csscom)},body:${Object.values(csscom)}},`);
// }

let obj = `{`
for (let [k, v] of Object.entries(csscom)) {
  obj += `${JSON.stringify(k)}:{prefix:${JSON.stringify(
    k
  )},body:${JSON.stringify(v)}},`
}
obj += '}'
document.querySelector('p').innerHTML = obj
export {}
