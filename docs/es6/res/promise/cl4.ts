let p1 = Promise.resolve(1)
let p2 = Promise.resolve(p1)
let p3 = new Promise(function (resolve, reject) {
  resolve(1)
})
let p4 = new Promise(function (resolve, reject) {
  resolve(p1)
})

console.log(p1 === p2)
console.log(p1 === p3)
console.log(p1 === p4)
console.log(p3 === p4)

p4.then(function (value) {
  console.log('p4=' + value)
})

p2.then(function (value) {
  console.log('p2=' + value)
})

p1.then(function (value) {
  console.log('p1=' + value)
})
// Promise.resolve(...)可以接收一个值或者是一个Promise对象作为参数。当参数是普通值时，它返回一个resolved状态的Promise对象，对象的值就是这个参数；当参数是一个Promise对象时，它直接返回这个Promise参数。因此，p1 === p2。但通过new的方式创建的Promise对象都是一个新的对象，因此后面的三个比较结果都是false。另外，为什么p4的then最先调用，但在控制台上是最后输出结果的呢？因为p4的resolve中接收的参数是一个Promise对象p1，resolve会对p1”拆箱“，获取p1的状态和值，但这个过程是异步的
