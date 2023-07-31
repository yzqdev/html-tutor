# 第三题

## deepclone

```js
deepClone = (source) => {
  const targetObj = Array.isArray(source) ? [] : {} // 判断复制的目标是数组还是对象
  for (let keys in source) {
    // 遍历目标
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        // 如果值是对象，就递归一下
        targetObj[keys] = Array.isArray(source[keys]) ? [] : {}
        targetObj[keys] = deepClone(source[keys])
      } else {
        // 如果不是，就直接赋值
        targetObj[keys] = source[keys]
      }
    }
  }
  return targetObj
}

let str1 = {
  arr: [1, 2, 3],
  obj: {
    key: 'value',
  },
  fn: function () {
    return 1
  },
}
let str3 = deepClone(str1)

str1.name = 'adsfsf'
console.log(str3)
```

```js
let obj = {
  a: 1,
  b: {
    name: 'b',
    sex: 'man',
  },
  c: { vue: 'first' },
}

const checkType = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

function deepcopy(obj) {
  let tempobj = {}
  for (let item in obj) {
    if (obj.hasOwnProperty(item)) {
      tempobj[item] =
        checkType(obj[item]) == 'Object' ? deepcopy(obj[item]) : obj[item]
    }
  }
  return tempobj
}
let newobj = deepcopy(obj)
newobj.d = 'hhhh'
console.log(newobj)
```

## curry

```js
function curry(fn) {
  if (fn.length === 0) {
    return fn
  }

  function _curried(depth, args) {
    return function (newArgument) {
      if (depth - 1 === 0) {
        return fn(...args, newArgument)
      }
      return _curried(depth - 1, [...args, newArgument])
    }
  }

  return _curried(fn.length, [])
}

function add(a, b) {
  return a + b
}

let curriedAdd = curry(add)
let addFive = curriedAdd(5)

let result = [0, 1, 2, 3, 4, 5].map(addFive) // [5, 6, 7, 8, 9, 10]
```

## 一行实现柯里化

```js
//一行实现柯里化
const curry =
  (fn, arr = []) =>
  (...args) =>
    ((arg) => (arg.length === fn.length ? fn(...arg) : curry(fn, arg)))([
      ...arr,
      ...args,
    ])
function add(a, b, c, d) {
  return a + b + c + d // body
}
let addCurry = curry(add())
console.log(addCurry(4)(5)(6))
```

## 手写new

```js
Array.myisArray = function (data) {
  let typeArray = Object.prototype.toString.call(data).slice(7, -1)
  console.log(typeArray.trim())
  return typeArray.trim() === 'Array'
}

console.log(Array.myisArray([1, 2, 3]))
//实现一个object.create
let create = function (o) {
  const F = function () {}
  F.prototype = o
  return new F()
}
//实现一个new方法
function createNew(Con, ...args) {
  // 创建一个空的对象
  this.obj = {}
  // 将空对象指向构造函数的原型链
  Object.setPrototypeOf(this.obj, Con.prototype)
  // obj绑定到构造函数上，便可以访问构造函数中的属性，即this.obj.Con(args)
  let result = Con.apply(this.obj, args)
  // 如果返回的result是一个对象则返回
  // new方法失效，否则返回obj
  return result instanceof Object ? result : this.obj
}
```

## 实现bind

```js
Function.prototype.myBind = function (context, ...args) {
  return () => {
    console.log(this)
    return this.apply(context, args)
  }
}

const person = {
  age: 20,
  getAge() {
    return this.age
  },
}
const getAge = person.getAge.myBind(person)
console.log(getAge()) // output :20
```
