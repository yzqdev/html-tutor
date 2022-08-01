function myInstanceOf(left: string, right: string) {
  let lproto = Object.getPrototypeOf(left)
  while (true) {
    if (lproto == null) {
      return false
    }
    if (lproto === right.prototype) {
      return true
    }
    lproto = Object.getPrototypeOf(lproto)
  }
}

console.log(myInstanceOf([1, 2], Array)) // true

export {}
