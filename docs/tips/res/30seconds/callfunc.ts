/*
 * @Author: frozen521
 * @Date:   2019-03-15 20:57:33
 * @Last Modified by:   frozen521
 * @Last Modified time: 2019-03-15 20:57:43
 */

/**
 * @Author: yanni
 * @Description:给定一个 key 和一个 set 作为参数，给定上下文时调用它们。主要用于函数组合。使用闭包以存储的参数调用存储的 key 。
 * @Date: 21:36 2019/3/15
 * @Modified By:
 * @Params:
 */

const call =
  (key, ...args) =>
  (context) =>
    context[key](...args)
Promise.resolve([1, 2, 3])
  .then(call(`map`, (x) => 2 * x))
  .then(console.log) //[ 2, 4, 6 ]
const map = call.bind(null, `map`)
Promise.resolve([1, 2, 3])
  .then(map((x) => 2 * x))
  .then(console.log) //[ 2, 4, 6 ]
export {}
