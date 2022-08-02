/*
 * @author: yanni
 * @Description: //TODO
 * 定义一个用来计算步长
 *
 * @date: 13:29 2019/7/5
 * @modified By: yzq
 * @param: Array
 * @return: Array
 **/
const shellSort = (arr) => {
  let len = arr.length,
    temp,
    gap = 1,
    count = 0
  console.time(`希尔排序耗时:`)
  while (gap < len / 5) {
    //动态定义间隔序列
    gap = gap * 5 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (let i = gap; i < len; i++) {
      let j
      temp = arr[i]
      for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        count++
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  console.timeEnd(`希尔排序耗时:`)
  console.log(`排序完成用了${count}轮`)
  return arr
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(shellSort(arr))
