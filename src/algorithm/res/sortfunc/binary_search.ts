let binarySearch = (array, item) => {
  let low = 0
  let high = array.length - 1
  let guess
  while (low <= high) {
    let mid = Math.round((low + high) / 2)
    guess = array[mid]
    if (guess == item) {
      return mid
    }
    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return null
}
console.log(binarySearch([1, 3, 4, 5, 6, 7, 8, 9], 9))
