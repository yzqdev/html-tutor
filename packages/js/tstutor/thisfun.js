/*
 * @Author: your name
 * @Date: 2020-04-07 16:15:37
 * @LastEditTime: 2020-04-09 15:38:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jstutor\tstutor\thisfun.js
 */
Function.prototype.mycall = function (context = window, ...args) {
  context.fn = this;
  console.log(this);
  let result = context.fn(...args);
  delete fn;
  return result;
};
function adddd(a, b) {
  let c = a + b;
  console.log(c);
}
let c = {};
adddd.mycall(c, 45, 555);
