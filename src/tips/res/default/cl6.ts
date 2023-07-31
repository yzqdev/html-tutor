function f2c(x) {
  function convert(str, p1, offset, s) {
    return ((p1 - 32) * 5) / 9 + 'C'
  }
  let s = String(x)
  let test = /(\d+(?:\.\d*)?)F\b/g
  return s.replace(test, convert)
}

console.log(f2c('232F'))
