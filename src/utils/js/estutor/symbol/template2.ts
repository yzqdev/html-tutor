function constant() {
  return () => arguments[1]
}

let result = constant(1)
console.log(result()) // 1
let s = Symbol(`foo`)
console.log(s instanceof Symbol)
const obj = {
  a: `list`,
  toString() {
    return `hello`
  },
}
const sym = Symbol(obj)
console.log(sym) // Symbol(abc)
