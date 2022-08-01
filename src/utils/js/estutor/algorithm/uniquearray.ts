/**
 * @Author: yanni
 * @Description:
 * @Date: 15:04 2019/3/15
 * @Modified By:
 * @Params:
 */

const array = [1, 4, 6, 4, 64, 4, 478]
const newarr = [
  1,
  1,
  `true`,
  `true`,
  `a`,
  `a`,
  true,
  true,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  `NaN`,
  `NaN`,
  0,
  0,
  {},
  {},
  [],
  [],
]

function uniqueuseset(arr) {
  return Array.from([...new Set(arr)])
}

//对象是一种以键值对存储信息的结构，并且不能有重复的键
function uniqueobject(arr) {
  let obj = {},
    len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] in obj) {
      obj[arr[i]]++
    } else {
      obj[arr[i]] = 10
    }
  }
  return Object.keys(obj)
}

//filter方法
let uniquefiltersimp = (arr) =>
  arr.filter((item, index, arr) => arr.indexOf(item) === index)

function uniquefilter(arr) {
  return arr.filter((item, index, arr) => {
    return arr.indexOf(item) === index
  })
}
/**
 * include方法来去重
 * @Author    yangzq
 * @DateTime  2019-03-16
 * @copyright [copyright]
 * @license   [license]
 * @version   [version]
 * @param     {arr}    arr [输入端数组]
 * @return    {Array}        [输出的数组]
 */
function uniqueinclude(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i])
    }
  }

  return res
}

//双重for循环
function uniquefor(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Object.is(arr[i], arr[j])) {
        arr.splice(j, 1)
        j--
      }
    }
  }
  return arr
}
//

//使用indexOf()，可以判断一个数组中是否包含某个值，如果存在则返回该元素在数组中的位置，如果不存在则返回-1。
function uniqueindex(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i])
    }
  }
  return res
}
console.log(uniqueindex(newarr))
