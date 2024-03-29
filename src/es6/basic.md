# 基础

 <<< ./res/close.ts 
<<<  ./res/func.ts 

```js
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
```

## object

```js
// 木易杨
if (typeof Object.assign2 !== `function`) {
  // Attention 1
  Object.defineProperty(Object, `assign2`, {
    value: function (target) {
      'use strict'
      if (target == null) {
        // Attention 2
        throw new TypeError(`Cannot convert undefined or null to object`)
      }

      // Attention 3
      const to = Object(target)

      for (let index = 1; index < arguments.length; index++) {
        const nextSource = arguments[index]

        if (nextSource != null) {
          // Attention 2
          // Attention 4
          for (const nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey]
            }
          }
        }
      }
      return to
    },
    writable: true,
    configurable: true,
  })
}
let a = {
  name: 'advanced',
  age: 18,
}
let b = {
  name: 'muyiy',
  book: {
    title: "You Don't Know JS",
    price: '45',
  },
}
let c = Object.assign2(a, b)
console.log(c)
```
