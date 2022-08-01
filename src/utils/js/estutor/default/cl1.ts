// 0.0.2/arrayUniqueFilter.js
const arr = [1, 2, 11, 22, 11, 1, 11, 22, 1, 2]
const unique = (arr) =>
  arr.filter(
    (element, index, self) =>
      // Self.indexOf(element) 每次都从数组第一个元素开始往下查
      self.indexOf(element) === index
  )
console.log(unique(arr)) // [1, 2, 11, 22]

// 上面可简写为
const unique2 = (arr) =>
  arr.filter((element, index, self) => self.indexOf(element) === index)
console.log(unique2(arr)) // [1, 2, 11, 22]

// 元素非对象
const arr3 = [
  { id: 1, name: `张三` },
  { id: 2, name: `李四` },
  { id: 11, name: `王五` },
  { id: 1, name: `张三` },
  { id: 11, name: `王五` },
  { id: 3, name: `李四` },
]
const unique3 = (arr, id) => {
  const cache = []
  for (const item of arr) {
    if (cache.find((v) => v[id] === item[id])) {
      continue
    }
    cache.push(item)
  }
  return cache
}
console.log(unique3(arr3, `id`)) // [{id: 1, name: "张三"}, {id: 2, name: "李四"}, {id: 11, name: "王五"}, {id: 3, name: "李四"}]
export {}
