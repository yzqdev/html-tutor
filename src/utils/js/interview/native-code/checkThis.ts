let student = {
  getInfo: function (name, isRegistered) {
    console.log('this1', this)
  },
  getInfo2(name, isRegistered) {
    console.log('this2', this) //跟上面一样
  },
  getInfo3: (name, isRegistered) => {
    console.log('this3', this) // 指向window
  },
}
let a = student.getInfo
console.log(Object.getPrototypeOf(a))
student.getInfo2('aa')
student.getInfo3('aa')
