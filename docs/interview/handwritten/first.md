# 手写代码1

## this bind call

```js
let number = 5
let obj = {
  number: 3,
  fn: (function () {
    let number: number
    this.number *= 2
    number = number * 2
    number = 3
    return function () {
      let num = this.number
      this.number *= 2
      console.log(num)
      number *= 3
      console.log(number)
    }
  })(),
}
let myFun = obj.fn
myFun.call(null)
obj.fn()
console.log(this.number)
```

## 实现call

```js
Function.prototype.mycall = function (context = window, ...args) {
  context.fn = this
  console.log(this)
  let result = context.fn(...args)
  delete fn
  return result
}
function adddd(a, b) {
  let c = a + b
  console.log(c)
}
let c = {}
adddd.mycall(c, 45, 555)
```

## 实现一个instanceof和new

```js
function create() {
  const obj = {};
  const constructort = [].shift().call(arguments);
  obj.__proto__ = constructort.prototype;
  const result = constructort.apply(obj, arguments);
  return typeof result === `object` ? result : obj;
}
function myInstanceOf(left: string, right: string) {
  let lproto = Object.getPrototypeOf(left)
  while (true) {
    if (lproto == null) {
      return false
    }
    if (lproto === right.prototype) {
      return true
    }
    lproto = Object.getPrototypeOf(lproto)
  }
}

console.log(myInstanceOf([1, 2], Array)) // true


```

## 实现promise

```js
function Mypromise(func) {
  this.fullfilled = false
  this.rejected = false
  this.pending = true
  this.handlers = []
  this.errorHandlers = []
  function resolve(...args) {
    this.handlers.forEach((handler) => handler(...args))
  }
  function reject(...args) {
    this.errorHandlers.forEach((handler) => handler(...args))
  }
  func.call(this, resolve.bind(this), reject.bind(this))
}

Mypromise.prototype.then = function (func) {
  this.handlers.push(func)
  return this
}
Mypromise.prototype.catch = function (func) {
  this.errorHandlers.push(func)
  return this
}

Mypromise.race = (promises) =>
  new Mypromise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve, reject)
    })
  })

Mypromise.all = (promises) =>
  new Mypromise((resolve, reject) => {
    let len = promises.length
    let res = []
    promises.forEach((p, i) => {
      p.then((r) => {
        if (len === 1) {
          resolve(res)
        } else {
          res[i] = r
        }
        len--
      }, reject)
    })
  })

// test
const p1 = new Mypromise((resolve) =>
  setTimeout(resolve.bind(null, 'resolved'), 3000)
)
p1.then(console.log).then((...args) => console.log('second', ...args))

const p2 = new Mypromise((resolve, reject) =>
  setTimeout(reject.bind(null, 'rejected'), 3000)
)
p2.then(console.log).catch((...args) => console.log('fail', ...args))
```

### promise2

```js
function resolvePromise(promise2, x, resolve, reject) {
  // console.log(promise2===x)
  //判断x和promise2之间的关系
  //因为promise2是上一个promise.then后的返回结果，所以如果相同，会导致下面的.then会是同一个promise2，一直都是，没有尽头
  if (x === promise2) {
    //相当于promise.then之后return了自己，因为then会等待return后的promise，导致自己等待自己，一直处于等待
    return reject(new TypeError('循环引用'))
  }
  //如果x不是null，是对象或者方法
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    //为了判断resolve过的就不用再reject了，（比如有reject和resolve的时候）
    let called
    try {
      //防止then出现异常，Object.defineProperty
      let then = x.then //取x的then方法可能会取到{then:{}},并没有执行
      if (typeof then === 'function') {
        //我们就认为他是promise,call他,因为then方法中的this来自自己的promise对象
        then.call(
          x,
          (y) => {
            //第一个参数是将x这个promise方法作为this指向，后两个参数分别为成功失败回调
            if (called) return
            called = true
            //因为可能promise中还有promise，所以需要递归
            // resolvePromise(promise2,y,resolve,reject)
            resolve(y)
          },
          (err) => {
            if (called) return
            called = true
            //一次错误就直接返回
            reject(err)
          }
        )
      } else {
        //如果是个普通对象就直接返回resolve作为结果
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    //这里返回的是非函数，非对象的值,就直接放在promise2的resolve中作为结果
    resolve(x)
  }
}

class MyPromise {
  constructor(executor, name) {
    this.name = name
    //控制状态，使用了一次之后，接下来的都不被使用
    this.status = 'pendding'
    this.value = undefined
    this.reason = undefined
    //存放成功回调的函数
    this.onResolvedCallbacks = []
    //存放失败回调的函数
    this.onRejectedCallbacks = []

    //定义resolve函数
    let resolve = (data) => {
      if (this.status === 'pendding') {
        // this.status = 'resolve'
        rv(data)
      }
    }
    let rv = (data) => {
      this.value = data
      //假如第一次实力的promise的
      if (data instanceof MyPromise) {
        this.status = 'pendding'
        data.then(rv, rj)
      } else {
        this.status = 'resolve'
        //监听回调函数(如果data是promise，则上一个的会等待这个data执行了这个rv方法之后在执行，它本身的成功回调)
        this.onResolvedCallbacks.forEach((fn) => fn())
      }
    }
    //定义reject函数
    let reject = (data) => {
      if (this.status === 'pendding') {
        rj(data)
      }
    }
    let rj = (data) => {
      this.reason = data
      //假如第一次实力的promise的
      if (data instanceof MyPromise) {
        this.status === 'pendding'
        data.then(rv, rj)
      } else {
        this.status = 'reject'
        this.onRejectedCallbacks.forEach((fn) => fn())
      }
    }
    try {
      //将resolve和reject函数给使用者
      executor(resolve, reject)
    } catch (e) {
      //如果在函数中抛出异常则将它注入reject中
      reject(e)
    }
  }
  then(onFulfilled, onRejected) {
    // console.log(onFufilled.a)
    //解决onFufilled,onRejected没有传值的问题
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (y) => y
    //因为错误的值要让后面访问到，所以这里也要跑出个错误，不然会在之后then的resolve中捕获
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (err) => {
            throw err
          }
    //声明一个promise对象
    let promise2
    if (this.status === 'resolve') {
      //因为在.then之后又是一个promise对象，所以这里肯定要返回一个promise对象
      promise2 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          //因为穿透值的缘故，在默认的跑出一个error后，不能再用下一个的reject来接受，只能通过try，catch
          try {
            //因为有的时候需要判断then中的方法是否返回一个promise对象，所以需要判断
            //如果返回值为promise对象，则需要取出结果当作promise2的resolve结果
            //如果不是，直接作为promise2的resolve结果
            let x = onFulfilled(this.value)
            //抽离出一个公共方法来判断他们是否为promise对象
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      })
    }
    if (this.status === 'reject') {
      promise2 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      })
    }
    if (this.status === 'pendding') {
      promise2 = new MyPromise((resolve, reject) => {
        this.onResolvedCallbacks.push(() => {
          // to do....
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
      })
    }
    return promise2
  }
  //catch方法
  catch(onRejected) {
    return this.then(null, onRejected)
  }
  finally(callback) {
    let P = this.constructor
    return this.then(
      (value) => P.resolve(callback()).then(() => value),
      (reason) =>
        P.resolve(callback()).then(() => {
          throw reason
        })
    )
  }
  done(onFulfilled, onRejected) {
    this.catch(function (reason) {
      // 抛出一个全局错误
      setTimeout(() => {
        throw reason
      }, 0)
    })
  }
}
//resolve方法
MyPromise.resolve = function (val) {
  return new MyPromise((resolve, reject) => {
    resolve(val)
  })
}
//reject方法
MyPromise.reject = function (val) {
  return new MyPromise((resolve, reject) => {
    reject(val)
  })
}
//race方法
MyPromise.race = function (promises) {
  return new MyPromise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}
//all方法(获取所有的promise，都执行then，把结果放到数组，一起返回)
MyPromise.all = function (promises) {
  let arr = []
  let i = 0
  function processData(index, data) {
    arr[index] = data
    i++
    if (i == promises.length) {
      resolve(arr)
    }
  }
  return new MyPromise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((data) => {
        processData(i, data)
      }, reject)
    }
  })
}
//promise语法糖 也用来测试
MyPromise.deferred = MyPromise.defer = function () {
  let dfd = {}
  dfd.promise = new MyPromise((resolve, reject) => {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}

//npm install promises-aplus-tests 用来测试自己的promise 符不符合promise规范  使用
module.exports = MyPromise
// export default Promise
```

## ctrip

```js
function handleStr(str) {
  let arr = str.split('')
  let nums = ''
  let words = ''

  arr.forEach(function (element) {
    if (/\d/.test(element)) {
      nums += element
    } else if (/[a-zA-Z]/.test(element)) {
      words += element
    }
  })

  return uniqueStr(nums) + words
}
function uniqueStr(str) {
  let arr = str.split('')

  return arr
    .filter(function (element, index) {
      return arr.indexOf(element) === index
    })
    .join('')
}
let str = '携程C2t0r1i8p2020校招'
console.log(handleStr(str))
```

### 写一个函数，列出一个整数所有的分解类型，比如对于数字4，可以做拆分得到下列字符串

```js
function f(...args: string[]) {
  let before = args.slice(0, args.length - 1)
  let n = args[args.length - 1]
  for (let i = 1; i < n; i++) {
    f(...before, i, n - i)
  }
  console.log(args)
}
f(9)
```

### 实现flat函数

```js
export let arr = [
  1,
  2,
  3,
  4,
  [1, 2, 3, [1, 2, 3, [1, 2, 3]]],
  5,
  'string',
  { name: '弹铁蛋同学' },
]
function flat(arr) {
  return arr.reduce((acc, cur, index) => {
    return acc.concat(Array.isArray(cur) ? flat(cur) : cur)
  }, [])
}
console.log(flat(arr))
```

### group

/**

* 蚂蚁的笔试题

 给定整数 n 和 m，写一个函数 dispatch ，把 1-n 尽量平均地分成m个组
 如

 let n = 2, m = 2;

 dispatch(n, m) 得到[[1], [2]];
 我自己实现的太烂了，所以想看看大家有没有什么好的实现方式

```js
* @param {number} n
* @param {*} m
 */
function dispatch(n, m) {
  let base = Math.floor(n / m)
  let extra = n - m * base

  return [...Array(m)].map((v, i) => {
    let hasExtra = i < extra
    let jMax = base + (hasExtra ? 1 : 0)
    let baseNum = i * base + 1 + (hasExtra ? i : extra)

    return [...Array(jMax)].map((v, j) => j + baseNum)
  })
}
console.log(dispatch(7, 4))

/**

* @param {number} n
* @param {number} m
 */
function dispatch2(n, m) {
  let i,
    j,
    arrays = []

  for (i = 0; i < m; i++) arrays.push([])

  for (i = 1, j = 0; i <= n; i++, j = (j + 1) % m) arrays[j].push(i)

  return arrays
}
```

### 柯里化实现

```js
let add = (a, b, c, d) => {
  console.log(a + b + c + d)
}
export const curry = (fn, arr = []) => {
  return (...args) => {
    console.log(args)
    console.log(arr)
    //判断参数总数是否和fn参数个数相等
    if ([...arr, ...args].length === fn.length) {
      return fn(...arr, ...args) //拓展参数，调用fn
    } else {
      return curry(fn, [...arr, ...args]) //迭代，传入现有的所有参数
    }
  }
}
const newadd = curry(add)
newadd(1, 2)(3)(4)
```
