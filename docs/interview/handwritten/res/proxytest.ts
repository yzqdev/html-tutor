const obj = {
  name: 'app',
  age: '18',
  a: {
    b: 1,
    c: 2,
  },
}
const p = new Proxy(obj, {
  get(target, propKey, receiver) {
    console.log('你访问了' + propKey)
    return Reflect.get(target, propKey, receiver)
  },
  set(target, propKey, value, receiver) {
    console.log('你设置了' + propKey)
    console.log('新的' + propKey + '=' + value)
    Reflect.set(target, propKey, value, receiver)
  },
})
p.age = '20'
console.log(p.age)
p.newPropKey = '新属性'
console.log(p.newPropKey)
p.a.d = '这是obj中a的属性'
console.log(p.a.d)
