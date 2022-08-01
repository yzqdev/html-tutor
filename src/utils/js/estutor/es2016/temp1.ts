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
