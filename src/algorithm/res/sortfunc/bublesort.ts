function swap(arr, indexA, indexB) {
  ;[arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
}
function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    //外层循环控制趟数
    for (let j = 0; j < len - 1 - i; j++) {
      //内层循环控制第i趟要比较的次数
      if (arr[j] > arr[j + 1]) {
        //相邻元素两两对比
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}
console.log(
  bubbleSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]),
)
