const all = (arr, fn = Boolean) => {
  return arr.every(fn)
}

const convToArray = (num) => [...`${num}`].map((el) => parseInt(el))
console.log(
  `%c${convToArray(123456)}`,
  `color:red;font-size:16px;background:transparent`
)
