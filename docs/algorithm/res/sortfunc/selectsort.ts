function selectionSort(arr) {
  let len = arr.length
  let minIndex, temp
  console.time('选择排序耗时')
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        //寻找最小的数
        minIndex = j //将最小数的索引保存
      }
    }
    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    console.log(arr)
  }
  console.timeEnd('选择排序耗时')
  return arr
}
let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(selectionSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
