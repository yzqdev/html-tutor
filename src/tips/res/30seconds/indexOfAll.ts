/*
 * @Author: frozen521
 * @Date:   2019-03-15 21:21:21
 * @Last Modified by:   frozen521
 * @Last Modified time: 2019-03-15 21:25:15
 */

/**
 * 返回数组中所有 val 的索引。 如果 val 从不出现，则返回 [] 。

使用 Array.forEach() 循环元素和 Array.push() 来存储匹配元素的索引。 返回索引数组。
 * @Author    yangzq
 * @DateTime  2019-03-15
 * @copyright [copyright]
 * @license   [license]
 * @version   [version]
 * @param     {number[]}    arr [description]
 * @param     {[type]}    val [description]
 * @return    {[type]}        [description]
 */
const indexofall = (arr, val) => {
  const indices = []
  arr.forEach((el, i) => {
    el === val && indices.push(i)
  })
  console.log(indices)
}
indexofall([1, 2, 3, 1, 2, 3], 1)
