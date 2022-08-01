function formatNumber(str) {
  let lastStr = str.substring(str.indexOf('.'))
  let formatStr = str.substring(0, str.indexOf('.'))
  // ["0", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
  console.log(lastStr)
  console.log(formatStr)
  let re = formatStr.split('').reverse()
  console.log(re)
  return (
    re.reduce((acc, cur, index) => {
      return (index % 3 ? cur : cur + ',') + acc
    }) + lastStr
  )
}
console.log(formatNumber('1234569234280689.45'))
export {}
