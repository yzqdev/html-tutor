const quickSort = (arr) => {
  const len = arr.length
  if (len < 2) {
    return arr
  }
  const pivot = arr[0]
  const left = []
  const right = []
  for (let i = 1; i < len; ++i) {
    if (arr[i] >= pivot) {
      right.push(arr[i])
    }
    if (arr[i] < pivot) {
      left.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(quickSort(arr))
