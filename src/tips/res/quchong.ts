function useFilter() {
  let str =
    // 长度为14的数组
    [4, 5, 56, 56, 78, 23, 4, 5, 6, 90, 56, 34]

  let res = []
  str.forEach((item, index) => {
    if (!res.includes(item)) {
      res.push(item)
    }
  })
  console.log(res)
}
function useIndexof() {
  let str =
    // 长度为14的数组
    [4, 5, 56, 56, 78, 23, 4, 5, 6, 90, 56, 34]
  let result = []
  str.forEach((item, index) => {
    if (str.indexOf(item) === index) {
      result.push(item)
    }
  })
  console.log(result)
}
function useReduce() {
  let str =
    // 长度为14的数组
    [4, 5, 56, 56, 78, 23, 4, 5, 6, 90, 56, 34]
  let unique = (arr) => {
    if (!Array.isArray(arr)) return
    return arr.reduce(
      (prev, cur) => (prev.includes(cur) ? prev : [...prev, cur]),
      [],
    )
  }
  console.log(unique(str))
  // 打印数组长度20：[false, "true", Infinity, true, 0, [],  [], {b: 2, a: 1}, {b: 2, a: 1}, {}, {}, "false", "0", null, undefined, {a: 1, b: 2}, {a: 1, b: 2}, NaN, function(){}, function(){}]
}

function useSet() {
  let str =
    // 长度为14的数组
    [4, 5, 56, 56, 78, 23, 4, 5, 6, 90, 56, 34]

  let s = [...new Set(str)]
  console.log(s)
}
