/*
 * @Author: frozen521
 * @Date:   2019-03-16 10:42:41
 * @Last Modified by:   frozen521
 * @Last Modified time: 2019-03-16 10:57:01
 */
//字符串重复最多的字母
let fs = require(`fs`)
let readline = require(`readline`)
function replThreeChar(str) {
  //判断是不是字符串,如果是数组对象就转换
  if (typeof str == `object`) {
    let str = str.join(``)
  } else {
    let str = str
  }

  //如果长度为1,直接返回
  if (str.length == 1) {
    return str
  }

  let charObj = {}
  //遍历重复值
  for (let i = 0; i < str.length; i++) {
    //不相等
    if (!charObj[str.charAt(i)]) {
      charObj[str.charAt(i)] = 1
    } else {
      charObj[str.charAt(i)] += 1
    }
  }

  //判断大小
  let maxChar = ``,
    maxVal = 1
  for (let k in charObj) {
    if (charObj[k] >= maxVal) {
      maxChar = k
      maxVal = charObj[k]
    }
  }
  let i = str.indexOf(maxChar)
  str = str.substring(0, i) + str.substring(i + 1)

  let indexVal = []
  indexVal.push(maxChar) //最多的字符
  indexVal.push(maxVal) //最多的次数

  return str
}

let n = parseInt(readline())
let ans = 0
for (let i = 0; i < n; i++) {
  lines = readline()
  print(replThreeChar(lines))
}
