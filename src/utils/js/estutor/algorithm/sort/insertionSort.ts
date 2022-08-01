/*
 * @Author: yanni
 * @Description: //TODO
 *从第一个元素开始，该元素可以认为已经被排序；
 *取出下一个元素，在已经排序的元素序列中从后向前扫描；
 *如果该元素（已排序）大于新元素，将该元素移到下一位置；
 *重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
 *将新元素插入到该位置后；
 *重复步骤2~5。
 * @Date: 13:16 2019/7/5
 * @Modified By:
 * @param: Array
 * @return: Array
 **/
const insertionSort = (array) => {
  const len = array.length
  if (Object.prototype.toString.call(array).slice(8, -1) === `Array`) {
    console.time(`插入排序耗时：`)
    for (let i = 1; i < len; i++) {
      const key = array[i]
      let j = i - 1
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j]
        j--
      }
      array[j + 1] = key
    }
    console.timeEnd(`插入排序耗时：`)
    const set = new Set(array)

    return Array.from(set)
  } else {
    return `array is not an Array!`
  }
}
let arr = [3, 4, 5, 6, 7, 663, 42, 33, 3, 894, 2, 74, 8, 34, 8, 3]
const m = insertionSort(arr)
console.log(m)
