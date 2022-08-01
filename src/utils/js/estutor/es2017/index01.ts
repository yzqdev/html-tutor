// console.log(...[1,2,3,]);

function pushaay(array, items) {
  array.push(...items)
  console.log(array)
}
pushaay([1, 2], [3, 4, 5]) //[ 1, 2, 3, 4, 5 ]

function f(x, y, z) {
  //
}
let args = [1, 2, 3]
f(...args) //不需要apply方法

Math.max(...[23, 5, 12])
let arrbefore = [1, 2, 3]
let arrtemp = [3, 4, 5]
arrbefore.push(...arrtemp)
console.log(...`hello`)
{
  let mapa = new Map([
    [1, `one`],
    [2, `two`],
    [3, `three`],
  ])
  let arr = [...mapa.keys()] //[1,2,3]
  console.log(`hello\n${arr}`)
}
const go = function* () {
  yield 1
  yield 2
  yield 3
}
let numbers = [...go()] //[1,2,3]
{
  let arraylik = { '0': `a`, '1': `b`, '2': `c` }
  console.log(Array.from(arraylik))
}
{
  Array.from(`hello`) //等同于[...'hello']
  let nameset = new Set([`a`, `b`, `1`])
  console.log(Array.from(nameset))
}
{
  console.log(`________________________________________________`)
  console.log(Array.from([1, 3, 4], (x) => x * x))
}

{
  console.log(`________________________________________________`)
  function typefo() {
    return Array.from(arguments, (value) => typeof value) //返回数据类型
  }
}
{
  console.log(`________________________________________________`)
  let nameset = Array.of(2, 3, 4, 5, 6) //[2,3,4,5,6]
  console.log(nameset)
}
{
  console.log(`________________________________________________`)
  let ii = [1, 2, 3, 4, 5].copyWithin(0, 3, 4)
  console.log(ii)
}
{
  console.log(`________________________________________________`)
  function fv(v) {
    return v > this.age
  }
  let person = { name: `json`, age: 20 }
  let resp = [12, 45, 23, 11].find(fv, person)
  console.log(resp)
}
{
  console.log(`________________________________________________`)
  const a = [`q`, `b`, `c`].fill(3)
  console.log(a)
  let arr = new Array(3).fill({ name: `mike` })
  arr[0].name = `ben`
  console.log(arr) //赋值的是地址
}
{
  console.log(`________________________________________________`)
  let a = [1, 3, [34, 44]].flat()
  console.log(a)
  let m = [2, 3, 4].flatMap((x) => [x, x * 2])
  console.log(m)
  let n = [3, 4, 5].flatMap((x) => [[x * 2]])
  console.log(n)
}
{
  console.log(`________________________________________________`)
  //Array.from();
  let arr = Array.from({ '0': 1, '1': 2, length: 2 })
  console.log(arr) //[1,2]
  ;[1, 2, 3, 4, 5].reduce((prev, next, index, current) => {
    //prev 如果reduce传入第二个参数，prev为第二个参数；否则prev为数组第一个元素  往后累加
    //next 如果reduce传入第二个参数，next为第数组第一个元素；否则next为数组第二个元素  依次累加
    //index 函数第几次执行1开始
    //current当前数组
    return prev + next
  })
  //reduce方法简单实现
  Array.prototype.myReduce = function (cb, pre) {
    let prev = pre || this[0]
    for (let i = pre ? 0 : 1; i < this.length; i++) {
      prev = cb(prev, this[i], i, this)
    }
    return prev
  }
}

{
  console.log(`________________________________________________`)
  let result = [1, 2, 3, 4, 5].filter(function (item) {
    return item > 3
  })
  console.log(result) //[4,5]
  //filter简单实现
  Array.prototype.myFilter = function (cb) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
      let item = this[i]
      if (cb(item)) arr.push(item)
    }
    return arr
  }
}
export {}
