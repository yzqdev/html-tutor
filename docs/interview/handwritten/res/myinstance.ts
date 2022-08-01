function myinstance(left, right) {
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if (proto == null) {
      return false
    }
    if (proto == right.prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
}

function Parent(name, sex) {
  this.name = name
  this.sex = sex
}
let a = 223
let p = new Parent('hh', 'sex')
console.log(myinstance(a, Parent))
