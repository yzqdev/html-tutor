# 代码片段

## 深拷贝
```js
// 一个简单的深拷贝函数，去掉了一些胶水部分
// 用户态输入一定是一个 Plain Object，并且所有 value 也是 Plain Object
function deepClone(obj) {
  const keys = Object.keys(obj);
  return keys.reduce((memo, current) => {
    const value = obj[current];
    if (typeof value === "object") {
      return {
        ...memo,
        [current]: deepClone(value)
      };
    }
    return {
      ...memo,
      [current]: value
    };
  }, {});
}
let a = {
  val: 1,
  desc: {
    text: "a"
  }
};

let b = deepClone(a);

b.val = 2;
console.log(a.val); // 1
console.log(b.val); // 2

b.desc.text = "b";
console.log(a.desc.text); // 'a'
console.log(b.desc.text); // 'b'

```
## 柯里化1
```js
// 实现一个add方法，使计算结果能够满足如下预期：

function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  // let _args = Array.prototype.slice.call(arguments);
  let _args = Array.from(arguments);
  console.log("_args=" + _args);
  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  let _adder = function () {
    _args.push(...arguments);
    return _adder;
  };

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = () => _args.reduce((a, b) => a + b);
  return _adder;
}

add(1)(2)(3); // 6
// add(1, 2, 3)(4); // 10
// add(1)(2)(3)(4)(5); // 15
// add(2, 6)(1); // 9

const curry = (fn, arr = []) => {
  return (...args) => {
    //判断参数总数是否和fn参数个数相等
    if ([...arr, ...args].length === fn.length) {
      return fn(...arr, ...args); //拓展参数，调用fn
    } else {
      return curry(fn, [...arr, ...args]); //迭代，传入现有的所有参数
    }
  };
};
//test
function sum(a, b, c, d, e) {
  console.log("curry success");
  console.log([a, b, c, d, e]);
}
let sumFn = curry(sum);
sumFn(1)(2)(3)(5, 4); //6
sumFn(1)(2, 3)(4)(5); //6

```
## 柯里化2
```js
function curryingHelper(fn, ...args) {
  //第一个括号里的
  return function(...args2) {
    //第二个括号里的args2
    let _totalArgs = args.concat(args2);
    return fn.apply(this, _totalArgs);
  };
}
function betterCurryingHelper(fn, len=fn.length) {
  return function(...args2) {
    let allArgsFulfilled = args2.length >= len;//后面参数大于方法参数就停止便利

    // 如果参数全部满足,就可以终止递归调用
    if (allArgsFulfilled) {
      return fn.apply(this, args2);
    } else {
      let argsNeedFulfilled = [fn].concat(...args2);
      return betterCurryingHelper(
        curryingHelper.apply(this, argsNeedFulfilled),
        len- args2.length
      );
    }
  };
}
function showMsg(name, age, fruit) {
  console.log(
    `My name is ${name}, I'm ${age} years old,  and I like eat ${fruit}`
  );
}
let betterShowMsg = betterCurryingHelper(showMsg);
betterShowMsg("dreamapple", 22, "apple"); // My name is dreamapple, I'm 22 years old,  and I like eat apple
betterShowMsg("dreamapple", 22)("apple"); // My name is dreamapple, I'm 22 years old,  and I like eat apple
betterShowMsg("dreamapple")(22, "apple"); // My name is dreamapple, I'm 22 years old,  and I like eat apple
betterShowMsg("dreamapple")(22)("apple"); // My name is dreamapple, I'm 22 years old,  and I like eat apple

```
## 柯里化es6版本
```js
const curry = (fn, ...args) =>
    // 函数的参数个数可以直接通过函数数的.length属性来访问
    args.length >= fn.length // 这个判断很关键！！！
        // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
        ? fn(...args)
        /**
         * 传入的参数小于原始函数fn的参数个数时
         * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
         */
        : (..._args) => curry(fn, ...args, ..._args);

function add1(x, y, z) {
  return x + y + z;
}
const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));

```
## debunce和throttle
```js
const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    console.log(this);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const throttle = (fn, delay = 500) => {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};

function con(...args) {
  console.log(args);
  console.log("hello");
}
throttle(con, 2000);

```
## deepfreeze
```js
function deepFreeze(object) {
  let propNames = Object.getOwnPropertyNames(object);
  for (let name of propNames) {
    let value = object[name];
    object[name] =
      value && typeof value === "object" ? deepFreeze(value) : value;
  }
  return Object.freeze(object);
}
//? hlsdfjsdlkfs
//x dkfdlsfj k
let person = {
  name: "Leonardo",
  profession: {
    name: "developer",
  },
};
deepFreeze(person);
person.profession.name = "doctor"; // TypeError: Cannot assign to read only property 'name' of object

```
## 去重

@[code](./res/quchong.ts)


## 一些技巧
@[code](./res/tips1.ts)
@[code](./res/tipsarray.ts)
