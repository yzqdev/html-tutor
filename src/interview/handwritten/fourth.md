# 第四天

<<< ./res/native-code/arrayOf.ts{ts}
<<< ./res/native-code/callFunc.ts{ts}
<<< ./res/native-code/checkThis.ts{ts}
<<< ./res/native-code/curry.ts{ts}
<<< ./res/native-code/isType.ts{ts}
<<< ./res/native-code/mapFunc.ts{ts}
<<< ./res/native-code/memorise.ts{ts}
<<< ./res/native-code/thisFunc.ts{ts}

## 数组转大写

```js
//如果数字含有小数部分，那么可以将小数部分单独取出
//将小数部分的数字转换为字符串的方法：

let chnNumChar = [`零`, `一`, `二`, `三`, `四`, `五`, `六`, `七`, `八`, `九`]
let chnUnitSection = [``, `万`, `亿`, `万亿`, `亿亿`]
let chnUnitChar = [``, `十`, `百`, `千`]

let numToChn = function (num) {
  let index = num.toString().indexOf(`.`)
  if (index != -1) {
    let str = num.toString().slice(index)
    let a = `点`
    for (let i = 1; i < str.length; i++) {
      a += chnNumChar[parseInt(str[i])]
    }
    return a
  } else {
    return
  }
}

//定义在每个小节的内部进行转化的方法，其他部分则与小节内部转化方法相同
function sectionToChinese(section) {
  let str = ``,
    chnstr = ``,
    zero = false,
    count = 0 //zero为是否进行补零， 第一次进行取余由于为个位数，默认不补零
  while (section > 0) {
    let v = section % 10 //对数字取余10，得到的数即为个位数
    if (v == 0) {
      //如果数字为零，则对字符串进行补零
      if (zero) {
        zero = false //如果遇到连续多次取余都是0，那么只需补一个零即可
        chnstr = chnNumChar[v] + chnstr
      }
    } else {
      zero = true //第一次取余之后，如果再次取余为零，则需要补零
      str = chnNumChar[v]
      str += chnUnitChar[count]
      chnstr = str + chnstr
    }
    count++
    section = Math.floor(section / 10)
  }
  return chnstr
}

//定义整个数字全部转换的方法，需要依次对数字进行10000为单位的取余，然后分成小节，按小节计算，当每个小节的数不足1000时，则需要进行补零

function TransformToChinese(num) {
  let a = numToChn(num)
  num = Math.floor(num)
  let unitPos = 0
  let strIns = ``,
    chnStr = ``
  let needZero = false

  if (num === 0) {
    return chnNumChar[0]
  }
  while (num > 0) {
    let section = num % 10000
    if (needZero) {
      chnStr = chnNumChar[0] + chnStr
    }
    strIns = sectionToChinese(section)
    strIns += section !== 0 ? chnUnitSection[unitPos] : chnUnitSection[0]
    chnStr = strIns + chnStr
    needZero = section < 1000 && section > 0
    num = Math.floor(num / 10000)
    unitPos++
  }

  return chnStr + a
}

let m = TransformToChinese(12339492835.99302)
console.log(m)
//输出    "一百二十三亿三千九百四十九万二千八百三十五点九九三零二"
export { TransformToChinese }
```
