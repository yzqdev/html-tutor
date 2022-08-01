let length = 10
function fn() {
  console.log(`fn中的${this.length}`)
}

let obj = {
  length: 5,
  method: function (fn) {
    fn()
    arguments[0]()
  },
}

obj.method(fn, 1) //输出是什么？
