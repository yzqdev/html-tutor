console.log(isType([2, 3, 4, 6], 'Array'))
function deepCopy(obj) {
  //判断是否是简单数据类型，
  if (typeof obj == 'object') {
    //复杂数据类型
    let result = obj.constructor === Array ? [] : {}
    for (let i in obj) {
      result[i] = typeof obj[i] == 'object' ? deepCopy(obj[i]) : obj[i]
    }
  } else {
    //简单数据类型 直接 == 赋值
    let result = obj
  }
  return result
}
let obj1 = { x: 1, y: 2 }
let newooo = deepCopy(obj1)
console.log(newooo)
obj1.x = 34344
console.log(newooo)
export { deepCopy }
