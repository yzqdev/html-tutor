const merge = (arr, startLeft, stopLeft, startRight, stopRight) => {
  /* 建立左右子序列 */
  let rightArr = new Array(stopRight - startRight + 1)
  let leftArr = new Array(stopLeft - startLeft + 1)
  /* 给左右序列排序 */
  let k = startRight
  for (let i = 0, len = rightArr.length; i < len - 1; ++i) {
    rightArr[i] = arr[k]
    ++k
  }
  k = startLeft
  for (let i = 0, len = leftArr.length; i < len - 1; ++i) {
    leftArr[i] = arr[k]
    ++k
  }
  //设置哨兵值，当左子列或右子列读取到最后一位时，即Infinity，可以让另一个剩下的列中的值直接插入到数组中
  rightArr[rightArr.length - 1] = Infinity
  leftArr[leftArr.length - 1] = Infinity
  let m = 0
  let n = 0
  // 比较左子列和右子列第一个值的大小，小的先填入数组，接着再进行比较
  for (let c = startLeft; c < stopRight; ++c) {
    if (leftArr[m] <= rightArr[n]) {
      arr[c] = leftArr[m]
      m++
    } else {
      arr[c] = rightArr[n]
      n++
    }
  }
}
const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  //设置子序列的大小
  let step = 1
  let left
  let right
  while (step < arr.length) {
    left = 0
    right = step
    while (right + step <= arr.length) {
      merge(arr, left, left + step, right, right + step)
      left = right + step
      right = left + step
    }
    if (right < arr.length) {
      merge(arr, left, left + step, right, arr.length)
    }
    step *= 2
  }
  return arr
}
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(mergeSort(arr))
