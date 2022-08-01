/*
 * @Author: your name
 * @Date: 2020-03-18 16:37:56
 * @LastEditTime: 2020-04-09 16:04:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jstutor\js\es6curry.js
 */
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
