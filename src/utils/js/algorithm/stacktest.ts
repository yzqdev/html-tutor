class stacktest {
  constructor() {
    this.items = []
  }
  push(elemnt) {
    this.items.push(elemnt)
  }
  pop() {
    return this.items.pop()
  }
  get peek() {
    return this.items[this.items.length - 1]
  }
  get isEmpty() {
    return !this.items.length
  }
  get size() {
    return this.items.length
  }
  clear() {
    this.items = []
  }
  print() {
    console.log(this.items.toString())
  }
}

{
  console.log(`________________________________________________`)
  let s = new stacktest()
  console.log(s.isEmpty)
  s.push(2)
  s.push(3)
  s.push(5)
  console.log(s)
  s.pop()
  console.log(s)
  s.print()
}

/*
 * @Author: frozen521
 * @Date:   2019-03-16 15:47:27
 * @Last Modified by:   frozen521
 * @Last Modified time: 2019-03-16 16:28:29
 */
function Stack() {
  let items = []

  this.push = function (element) {
    items.push(element)
  }

  this.pop = function () {
    return items.pop()
  }

  this.peek = function () {
    return items[items.length - 1]
  }

  this.isEmpty = function () {
    return items.length === 0
  }

  this.size = function () {
    return items.length
  }

  this.clear = function () {
    items = []
  }

  this.print = function () {
    console.log(items.toString())
  }

  this.toString = function () {
    return items.toString()
  }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(1)
stack.push(3)
console.log(stack.peek())
console.log(stack.size())
stack.clear()

console.log(stack.size())
