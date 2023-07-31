const dog = {
  name: `小黄`,
  friends: [
    {
      name: `小红`,
    },
  ],
}

// 1.首先new一个Proxy对象
let proxy = new Proxy(dog, {
  // 2.参数一为需要代理的数据，参数二为上图可以代理的13种的配置对象
  get(target, property) {
    // 3.参数1为上面dog对象，参数2为dog的属性
    console.log(`get被监控到了`)
    return target[property]
  },
  set(target, property, value, obj) {
    // 4.参数1为上面dog对象，参数2为dog的属性，参数3为设置的新值
    // 有点类似Object.defineProperty
    console.log(obj)
    console.log(target, property, value)
    console.log(`set被监控到了`)
    target[property] = value
  },
})

// 那么接下来我们设置一下这个属性
// Dog.name = '小红'  // set值时，发现不会打印 'set被监控到了'
// Dog.name // get值时，发现不会打印 'get被监控到了'

// 思考：为什么在set/get值的时候不会打印出来我们需要的东西呢？

// 上面说得很明白了，proxy相当于是一个壳，代理我们需要监控的数据，也就是我们要通过proxy来访问内部数据才会被监控到

proxy.name = `小红` // 打印输出 'set被监控到了'
console.log(proxy.name)
export {}
