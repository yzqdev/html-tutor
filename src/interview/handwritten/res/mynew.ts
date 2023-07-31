function myNew(fn, ...args) {
  let instance = Object.create(fn.prototype)
  let result = fn.apply(instance, args)
  return typeof result === 'object' ? result : instance
}
