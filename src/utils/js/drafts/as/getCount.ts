let cars = ['BMW', 'Benz', 'Benz', 'Tesla', 'BMW', 'Toyota']
console.time('测试开发')
let carsObj = cars.reduce(function (obj, name) {
  console.log(obj)
  console.log(name)
  obj[name] = obj[name] ? ++obj[name] : 1
  return obj
}, {})
console.log(carsObj) // => { BMW: 2, Benz: 2, Tesla: 1, Toyota: 1 }
console.timeEnd('测试开发')
