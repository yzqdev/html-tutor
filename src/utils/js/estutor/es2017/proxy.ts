const curry = (fn, args = []) =>
  function () {
    const rest = [...args, ...arguments]
    console.log(fn.length, `this`)
    if (rest.length < fn.length) {
      return curry.call(this, fn, rest)
    }
    return fn.apply(this, rest)
  }
//Test
function sum(a, b, c) {
  return a + b + c
}
const sumFn = curry(sum)
console.log(sumFn(1)(2)(3)) //6
console.log(sumFn(1)(2, 3)) //6
