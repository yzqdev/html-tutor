/*
 * @Author: frozen521
 * @Date:   2019-03-15 21:06:10
 * @Last Modified by:   frozen521
 * @Last Modified time: 2019-03-15 21:07:21
 */
const compact = (arr: any[]) => arr.filter(Boolean)
console.log(compact([0, 1, false, 2, ``, 3, `a`, `e` * 23, NaN, `s`, 34]))
