// 0.0.2/array_algorithms.js
const arr1 = [1, 7, 4, 5, 2, 1, 5, 3, 6, 2, 1, 3]
const arr2 = [2, 4, 3, 4, 5, 5, 5]

const intersection = (arr1, arr2) => {
  const map = new Map()
  const arr = []
  // 键值对，键是 value，值是 value 出现次数, 出现次数累加
  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i]
    console.log(map)
    console.log(value)
    let valueInMap = map.get(value)
    console.log(valueInMap)
    valueInMap = (valueInMap ? valueInMap : 0) + 1
    console.log(valueInMap)
    map.set(value, valueInMap)
    console.log(map)
  }
  // 键值对，中转 map 判断第二个数组的值是否存在，存在就留下来，然后 map 值次数减1
  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i]
    if (map.has(value) && map.get(value) !== 0) {
      arr.push(value)
      map.set(value, map.get(value) - 1)
    }
  }
  return arr
}

console.log(intersection(arr1, arr2)) // [ 2, 4, 3, 5, 5 ]
