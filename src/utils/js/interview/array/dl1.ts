const obj = { a: 1, b: 2, c: 3 }
//输出 {a:1,c:3}
function foo(o, arr) {
  const result = {}
  Object.keys(o)
    .filter((k) => arr.includes(k))
    .map((s) => {
      result[s] = o[s]
    })
  console.log(result)
}
const foo = (o, arr) =>
  arr.reduce((ret, key) => {
    ret[key] = o[key]
    return ret
  }, {})
foo(obj, ['a', 'c'])
