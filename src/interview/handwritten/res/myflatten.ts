/*
 * @Author: your name
 * @Date: 2020-03-13 10:14:38
 * @LastEditTime: 2020-04-06 16:16:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \jstutor\js\myflatten.js
 */
let flattened = (arr) =>
  arr.reduce(
    (acc, cur) => acc.concat(Array.isArray(cur) ? flattened(cur) : cur),
    [],
  )

console.log(flattened([45, 44, [334, [555]]]))
