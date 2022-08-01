let a = 1

function fn() {
  let a
  let a // 第二次申明变量a，覆盖了第一次申明
  function fn2() {
    console.log('3:' + a) // 6,在上级作用域fn里查找a
    a = 20 // 先在上级作用域fn里查找a并重新赋值
    b = 100
  }
  console.log('1:' + a) //undefined
  a = 5
  console.log('2:' + a) //5
  a++
  fn2()
  console.log('4:' + a) // 20，调用fn2()之后，a重新赋值
}
fn()
console.log('5:' + a) //1
a = 10
console.log('6:' + a) //10
console.log('7:' + b) //100
