function Foo() {
  getName = function () {
    console.log(1)
  }
  return this
}
Foo.getName = function () {
  console.log(2)
}
Foo.prototype.getName = function () {
  console.log(3)
}
let getName = function () {
  console.log(4)
}
function getName() {
  console.log(5)
}

//请写出以下输出结果：
Foo.getName() //;2
getName() //4
Foo().getName() //1
getName() //4
new Foo.getName()
new Foo().getName()
new new Foo().getName()
export {}
