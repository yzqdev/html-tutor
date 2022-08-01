console.log(Number.EPSILON)
console.log(Number.isInteger(Infinity))
console.log(Number.isNaN(`NaN`))

console.log(Math.acosh(3))
console.log(Math.hypot(3, 4))
console.log(Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2))

console.log(`abcde`.includes(`cd`))
console.log(`abc`.repeat(3))

console.log(Array.of(1, 2, 3))
console.log([0, 0, 0].fill(7, 1))
console.log([1, 2, 3].find((x) => x === 3))
console.log([1, 2, 3].findIndex((x) => x === 2))
console.log([1, 2, 3, 4, 5].copyWithin(3, 0))
console.log([`a`, `b`, `c`].entries())
console.log([`a`, `b`, `c`].keys())
console.log([`a`, `b`, `c`].values())

console.log(Object.assign({}, { origin: new Point(0, 0) }))
