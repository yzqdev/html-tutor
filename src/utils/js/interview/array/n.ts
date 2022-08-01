let number = 5
let obj = {
  number: 3,
  fn: (function () {
    let number: number
    this.number *= 2
    number = number * 2
    number = 3
    return function () {
      let num = this.number
      this.number *= 2
      console.log(num)
      number *= 3
      console.log(number)
    }
  })(),
}
let myFun = obj.fn
myFun.call(null)
obj.fn()
console.log(this.number)
