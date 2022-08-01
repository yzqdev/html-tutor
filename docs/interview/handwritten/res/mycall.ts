Function.prototype.mycall = function (context = window, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context.fn = this // 给context创建一个临时的fn属性，将值设置为需要调用的函数
  const result = context.fn(...args)
  delete context.fn // 删除临时属性
  return result
}
function adddd(a, b) {
  let c = a + b
  console.log(c)
}
let c = {}
adddd.mycall(c, 45, 555)
