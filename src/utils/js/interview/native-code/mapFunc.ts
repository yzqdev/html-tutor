Array.prototype.myMap = function (fn: Function, thisArg) {
  let newArr = []
  console.log(thisArg)
  for (let i = 0; i < this.length; i++) {
    newArr.push(fn.call(thisArg, this[i], i, this))
  }
  return newArr
}
let a = [1, 2, 3, 4]
let c = a.myMap((item) => {
  return item * 2
}, 'a')
console.log(c)
let d = a.map((item) => {
  return item + 34
}, 'aaaaaaa')
console.log(d)
export {}
