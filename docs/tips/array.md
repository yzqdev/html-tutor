# 数组

## 删除一个

```js
function removeitem(arr, item) {
  let newstr = str.replace(new RegExp(item, `g`), ``)
  console.log(arr)
  return [...newstr]
}
console.log(removeitem([1, 2, 3, 4, 2], 2))
```

@[code](./res/default/cl1.ts)
@[code](./res/default/cl3.ts)
@[code](./res/default/cl5.ts)
@[code](./res/default/cl6.ts)
@[code](./res/default/huiwen.ts)
@[code](./res/default/myPromise.ts)

## map,padStart

```js
{
  console.log(`________________________________________________`)
  console.log(`list`.padStart(8, `=`))
  let m = [2, 3, 4, 5, 6, 7333].map((x) => x.toString().padStart(10, `*`))
  console.log(m)
}
{
  console.log(`________________________________________________`)
  const cars = {
    '🚙BMW': `10`,
    '🚘Tesla': `5`,
    '🚖Lamborghini': `0`,
  }
  Object.entries(cars).map(([name, count]) => {
    //padEnd appends ' -' until the name becomes 20 characters
    //padStart prepends '0' until the count becomes 3 characters.
    console.log(`${name.padEnd(20, ` -`)} Count: ${count.padStart(3, `0`)}`)
  })
}
```

## function

```js
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
 
```

## from,of

```js
{
  console.log(`________________________________________________`)

  const a1 = Array.of(1, 2, 3)
  const a2 = Array(6).fill(12)
  console.log(a1, a2)
}
{
  console.log(`________________________________________________`)
  const m = [1, 2, 3, 4].reduce(
    (accumulator, currentValue, currentIndex, array) =>
      accumulator * currentValue,
    1
  )
  console.log(m)
}
{
  console.log(`________________________________________________`)
  const a = [1, 2, 3]
  const it = a[Symbol.iterator]()
  console.log(it.next().done)
  console.log(it.next().value) //1
  console.log(it.next().value) //2
  console.log(it.next().value)
  const findResult = a.includes(1, 0)
  console.log(findResult, a.join(`*`))
  const b = Array.from(a, (x) => x % 2 === 0)
  console.log(b)
}
{
  console.log(`________________________________________________`)
  const list = [`a`, `b`, `c`]
  list.forEach((item, index) => {
    console.log(item) //Value
    console.log(index) //Index
  })
  //Index is optional
  list.forEach((item) => console.log(item))
}
{
  console.log(`________________________________________________`)
  const object = {
    name: `xiaoming`,
    age: 34,
    sex: `man`,
  }
  for (const property in object) {
    console.log(property) //Property name
    console.log(object[property]) //Property value
  }
}

{
  console.log(`________________________________________________`)
  const age = [16, 14, 18]

  const m = age.some((person) => person >= 18)
  console.log(m)
}
```

## getcount

```js
let cars = ['BMW', 'Benz', 'Benz', 'Tesla', 'BMW', 'Toyota']
console.time('测试开发')
let carsObj = cars.reduce(function (obj, name) {
  console.log(obj)
  console.log(name)
  obj[name] = obj[name] ? ++obj[name] : 1
  return obj
}, {})
console.log(carsObj) // => { BMW: 2, Benz: 2, Tesla: 1, Toyota: 1 }
console.timeEnd('测试开发')
```

## compress

```js
let compress = function (chars) {
  let char = chars[0]
  let num = 0
  let index = 0
  let numArr = []
  chars.forEach((item) => {
    if (item === char) {
      num++
    } else {
      chars[index] = char
      if (1 < num && num < 10) {
        index++
        chars[index] = String(num)
      } else if (num >= 10) {
        numArr = String(num).split('')
        numArr.forEach((n) => {
          index++
          chars[index] = String(n)
        })
      }
      index++
      char = item
      num = 1
    }
  })
  chars[index] = char
  if (1 < num && num < 10) {
    index++
    chars[index] = String(num)
  } else if (num >= 10) {
    numArr = String(num).split('')
    numArr.forEach((n) => {
      index++
      chars[index] = String(n)
    })
  }
  index++
  chars.length = index
  console.log(chars)
  return index
}

let arr = ['a', 'a', 'b', 'b', 'c', 'c', 'c']
console.log(compress(arr))
```

## reduce

```js
let data = {
  rows: [
    ['Lisa', 16, 'Female', '2000-12-01'],
    ['Bob', 22, 'Male', '1996-01-21'],
  ],
  metaData: [
    {
      name: 'name',
      note: '',
    },
    {
      name: 'age',
      note: '',
    },
    {
      name: 'gender',
      note: '',
    },
    {
      name: 'birthday',
      note: '',
    },
  ],
}

let result = data.rows.reduce(function (prev1, cur1) {
  prev1.push(
    data.metaData.reduce(function (prev, cur, index) {
      prev[cur.name] = cur1[index]
      return prev
    }, {})
  )
  return prev1
}, [])

console.log(result)
console.log(result[0])
console.log(result[1])

export {}
```
