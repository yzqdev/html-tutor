function createNew(Con, ...args) {
  const obj = Object.create(Con.prototype)
  const ret = Con.apply(obj, args)
  return ret instanceof Object ? ret : obj
}

// 1. 将构造函数的原型赋值给新建的obj的隐式原型__proto__。
// 2. 在obj下执行构造函数，并传入参数，
//    这个时候构造函数内的this就是obj。
// 3. 如果这个'构造函数'没有return对象格式的结果，
//    返回新创建的obj。

function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.getName = function () {
  console.log(this.name)
}

const xm = createNew(Person, 'xiaoming', 22)
console.log(xm)
