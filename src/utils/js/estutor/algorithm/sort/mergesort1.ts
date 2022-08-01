const merge = (left, right) => {
  let resArr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      resArr.push(left.shift())
    } else {
      resArr.push(right.shift())
    }
  }
  return resArr.concat(left, right)
}

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(mergeSort(arr))
