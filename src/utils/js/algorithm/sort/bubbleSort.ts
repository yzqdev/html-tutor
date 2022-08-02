/*
 * @Author: yanni
 * @Description: //TODO
 * 比较相邻的元素。如果第一个比第二个大，就交换他们两个；
 * 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数；
 * 针对所有的元素重复以上的步骤，除了最后一个；
 * 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
 * @Date: 13:11 2019/7/5
 * @Modified By:
 * @param:
 * @return: Array
 **/
const bubbleSort = (arr) => {
  let count = 0
  console.time(`冒泡`)
  const len = arr.length - 1
  for (let i = 0; i < len; ++i) {
    /* 外循环为排序趟数，len个数进行len-1趟 */
    for (let j = 0; j < len - i; ++j) {
      count++
      /* 内循环为每趟比较的次数，第i趟比较len-i次 */
      if (arr[j] > arr[j + 1]) {
        /* 相邻元素比较，若逆序则交换（升序为左大于右，逆序反之） */
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  console.timeEnd(`冒泡`)
  console.log(`bubbleSort排序完成用了${count}轮`)
  return arr
}
let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(bubbleSort(arr))
