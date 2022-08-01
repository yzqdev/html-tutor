const person = {
  name: 'tom',
  age: 20,
  _sex: 'male',
}
const proxy = new Proxy(person, {
  get(target, key, value, receiver) {
    console.log(`get target${target.age}`)
    Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    console.log(`${key} has been set to ${value}`)
    console.log(receiver)
    Reflect.set(target, key, value)
  },
  construct(target, argArray, newTarget) {
    console.log(argArray)
  },
})
console.log(proxy.name)
proxy.age = 333
console.log(proxy.age)
export {}
