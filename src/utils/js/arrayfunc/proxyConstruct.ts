class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  say() {
    console.log(`my name is ${this.name}, and my age is ${this.age}`)
  }
}
const proxyTrack = (targetClass) => {
  const prototype = targetClass.prototype
  Object.getOwnPropertyNames(prototype).forEach((name) => {
    targetClass.prototype[name] = new Proxy(prototype[name], {
      apply(target, context, args) {
        console.time()
        target.apply(context, args)
        console.timeEnd()
      },
    })
  })

  return new Proxy(targetClass, {
    construct(target, args) {
      const obj = new target(...args)
      return new Proxy(obj, {
        get(target, prop) {
          console.log(`${target.name}.${prop} is being getting`)
          return target[prop]
        },
      })
    },
  })
}

const MyClass = proxyTrack(Person)
const myClass = new MyClass('tom', 21)
myClass.say()
myClass.name
export {}
