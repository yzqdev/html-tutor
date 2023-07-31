const curry = (fn) => {
  let params = []
  return (...args) => {
    params = [...params, ...args]
    if (params.length < fn.length) {
      return fn.call(fn, ...args)
    } else {
      return fn.apply(fn, params)
    }
  }
}

const sum = (a, b, c, d, e) => {
  console.log(sum.length)
  return a + b + c + d + e
}
const fn = curry(sum)
const res = fn(1)(2)(3)(4)
console.log(res)
export {}
