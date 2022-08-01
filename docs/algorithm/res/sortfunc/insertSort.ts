function insertionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    console.time('插入排序耗时：')
    for (let i = 1; i < array.length; i++) {
      let stand = array[i]
      console.log(`key=${stand}`)
      let j = i - 1
      while (j >= 0 && array[j] > stand) {
        array[j + 1] = array[j]
        console.log(`${array}`)
        j--
      }

      array[j + 1] = stand
      console.log(`第${i}轮遍历,最总结过${array}`)
    }
    console.timeEnd('插入排序耗时：')
    return array
  } else {
    return 'array is not an Array!'
  }
}

console.log(insertionSort([45, 23, 56, 778, 32, 5, 77, 4, 24]))
export {}
