function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms)
    },
  })
}

function sayHi(user) {
  console.log(`Hello, ${user}!`)
}

sayHi = delay(sayHi, 3000)

console.log(sayHi.length) // 1 (*) proxy 转发“获取 length” 操作到目标对象

sayHi('John') // Hello, John! （3秒后）
