function deepClone(value) {
  const obj = {}
  for (const item in value) {
    obj[item] = deepClone(value[item])
  }
  return obj
}

let a = {
  age: 34,

  sex: 'nan',
}

let b = deepClone(a)
console.log(b)
