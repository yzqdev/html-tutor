/*
* @Author: yanni
* @Date:   2019-02-23 19:38:30
* @Last Modified by:   yanni
* @Last Modified time: 2019-02-24 18:55:22
*/

const bubbleSort = arr => {
  const list = arr.slice(); //保证函数为纯函数
  const len = list.length;
  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j > i; j--) {
      if (list[j] < list[j - 1]) {

        [list[j - 1], list[j]] = [list[j], list[j - 1]];
      }
    }
  }
  return list;
}
console.log(bubbleSort([1,44,23,12,122,34]))
