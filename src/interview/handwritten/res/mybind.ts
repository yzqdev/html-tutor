Function.prototype.mybind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('not funciton')
  }
  const fn = this
  const fNop = function () {}
  function fBound(...args2) {
    return fn.call(this instanceof fBound ? this : context, ...args, ...args2)
  }
  if (fn.prototype) {
    fNop.prototype = fn.prototype
  }
  fBound.prototype = new fNop()
  return fBound
}
//简介bind
Function.prototype.bind = function (context) {
  let _this = this
  let args = Array.prototype.slice.call(arguments, 1)
  return function () {
    return _this.apply(context, args)
  }
}
Function.prototype.bind = function (context, ...args) {
  let self = this //谨记this表示调用bind的函数
  let fBound = function () {
    //this instanceof fBound为true表示构造函数的情况。如new func.bind(obj)
    return self.apply(
      this instanceof fBound ? this : context || window,
      args.concat(Array.prototype.slice.call(arguments)),
    )
  }
  fBound.prototype = Object.create(this.prototype) //保证原函数的原型对象上的属性不丢失
  return fBound
}
