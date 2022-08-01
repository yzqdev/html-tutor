function crete(Con, ...args) {
  const obj = {}
  Reflect.setPrototypeOf(obj, Con.prototype)
  const result = obj.call(args)
  return result instanceof Object ? result : obj
}

const _ = require(`lodash`)
