let add = (a, b, c, d) => {
  console.log(a + b + c + d)
}
const curry = (fn, arr = []) => {
  return (...args) => {
    console.log(args)
    console.log(arr)
    //判断参数总数是否和fn参数个数相等
    if ([...arr, ...args].length === fn.length) {
      return fn(...arr, ...args) //拓展参数，调用fn
    } else {
      return curry(fn, [...arr, ...args]) //迭代，传入现有的所有参数
    }
  }
}
const newadd = curry(add)
newadd(1, 2)(3)(4)
