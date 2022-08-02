/*
 * @Author: yanni
 * @Description: /
 * 选择排序
 * 在未排序序列中找到最小（大）元素，存放到排序序列的起始位置；
 * 然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾；
 * 以此类推，直到所有元素均排序完毕。
 * @Date: 13:08 2019/7/5
 * @Modified By:
 * @Param:Array
 * @return:Array
 **/
let selectionSort = (arr) => {
  const len = arr.length
  let count = 0
  let minIndex
  console.time(`选择排序耗时`)
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      count++
      if (arr[j] < arr[minIndex]) {
        //寻找最小的数

        minIndex = j //将最小数的索引保存
      }
    }
    ;[arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
  }
  console.timeEnd(`选择排序耗时`)
  console.log(`排序完成用了${count}轮`)
  return arr
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(selectionSort(arr))
