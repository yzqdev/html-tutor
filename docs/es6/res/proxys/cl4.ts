let numbers = []

numbers = new Proxy(numbers, {
  // (*)
  set(target, prop, val) {
    // 拦截写入操作
    if (typeof val == 'number') {
      target[prop] = val
      return true
    } else {
      return false
    }
  },
})

numbers.push(1) // 添加成功
numbers.push(2) // 添加成功
console.log('Length is: ' + numbers.length) // 2

try {
  numbers.push('test')
} catch (error) {
  console.log('有错误', error)
} // TypeError （proxy 的 `set` 操作返回 false）
