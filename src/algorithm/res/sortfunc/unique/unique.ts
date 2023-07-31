const setFunc = (data) => {
  return [...new Set(data)]
}
const indexFunc = (arr) => {
  let result = []
  arr.forEach((item) => {
    if (result.indexOf(item) == -1) {
      result.push(item)
    }
  })

  return result
}
const filterFunc = (arr) => {
  arr.filter((item, index) => {
    return arr.indexOf(item) == index
  })
}
const includesFunc = (arr) => {
  let result = []
  arr.forEach((item, index) => {
    if (!result.includes(item)) {
      result.push(item)
    }
  })
  return result
}
const reduceFunc = (arr) => {
  return arr.reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), [])
}
const mapFunc = (arr) => {
  let map = new Map()
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], true)
    } else {
      map.set(arr[i], false)
      result.push(arr[i])
    }
  }
  return result
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
const objFunc = (arr) => {
  let result = []
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    // 此处加入对象和数组的判断
    if (Array.isArray(arr[i])) {
      arr[i] = arr[i].sort((a, b) => a - b)
    }
    if (isObject(arr[i])) {
      let newObj = {}
      Object.keys(arr[i])
        .sort()
        .map((key) => {
          newObj[key] = arr[i][key]
        })
      arr[i] = newObj
    }
    let key = typeof arr[i] + JSON.stringify(arr[i]) + arr[i]
    if (!obj[key]) {
      result.push(arr[i])
      obj[key] = 1
    } else {
      obj[key]++
    }
  }
  return result
}
module.exports = {
  setFunc,
  indexFunc,
  filterFunc,
  includesFunc,
  reduceFunc,
  objFunc,
  mapFunc,
}
