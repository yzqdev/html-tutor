const handle = (params) => {
  if (Array.isArray(params)) {
    return params.reduce((accumulator, currentValue) => {
      typeof currentValue === 'object'
        ? accumulator.push(handle(currentValue))
        : accumulator.push(currentValue)
      return accumulator
    }, [])
  } else {
    return Reflect.ownKeys(params).reduce((accumulator, currentValue) => {
      typeof params[currentValue] === 'object'
        ? (accumulator[currentValue] = handle(params[currentValue]))
        : (accumulator[currentValue] = params[currentValue])
      return accumulator
    }, {})
  }
}

let a = [
  {
    age: '23',
    name: 334,
  },
  { time: 'ee', date: new Date() },
]
b = handle(a)
b.push({ naa: 'erer' })
console.log(b)
console.log(a)
export {}
