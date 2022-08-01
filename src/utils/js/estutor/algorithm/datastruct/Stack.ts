class Stack {
  constructor() {
    this.items = []
  }
  //入栈
  push(element) {
    this.items.push(element)
  }
  //出站
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
  const stack = new Stack()
  console.log(stack.isEmpty)
  //add elements
  stack.push(4)
  stack.push(6)
  stack.push(7)
  console.log(stack.peek)
  stack.push(11)
  console.log(stack.size)
  console.log(stack.isEmpty)
}
