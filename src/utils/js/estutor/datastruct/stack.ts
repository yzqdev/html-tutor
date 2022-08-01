const LinkedList2 = (() => {
  class Node {
    constructor(element) {
      this.element = element
      this.next = null
    }
  }
  //这里我们使用WeakMap对象来记录长度状态
  const length = new WeakMap()
  const head = new WeakMap()
  class LinkedList2 {
    constructor() {
      length.set(this, 0)
      head.set(this, null)
    }
    append(element) {
      const node = new Node(element)
      let current
      if (this.getHead() === null) {
        head.set(this, node)
      } else {
        current = this.getHead()
        while (current.next) {
          current = current.next
        }
        current.next = node
      }
      let l = this.size()
      l++
      length.set(this, l)
    }
    // eslint-disable-next-line complexity
    insert(position, element) {
      if (position >= 0 && position <= this.size()) {
        const node = new Node(element)
        let current = this.getHead()
        let previous
        let index = 0
        if (position === 0) {
          node.next = current
          head.set(this, node)
        } else {
          while (index++ < position) {
            previous = current
            current = current.next
          }
          node.next = current
          previous.next = node
        }
        let l = this.size()
        l++
        length.set(this, l)
        return true
      }
      return false
    }
    // eslint-disable-next-line complexity
    removeAt(position) {
      if (position > -1 && position < this.size()) {
        let current = this.getHead()
        let previous
        let index = 0
        if (position === 0) {
          head.set(this, current.next)
        } else {
          while (index++ < position) {
            previous = current
            current = current.next
          }
          previous.next = current.next
        }
        let l = this.size()
        l--
        length.set(this, l)
        return current.element
      }
      return null
    }
    remove(element) {
      const index = this.indexOf(element)
      return this.removeAt(index)
    }
    indexOf(element) {
      let current = this.getHead()
      let index = 0
      while (current) {
        if (element === current.element) {
          return index
        }
        index++
        current = current.next
      }
      return -1
    }
    isEmpty() {
      return this.size() === 0
    }
    size() {
      return length.get(this)
    }
    getHead() {
      return head.get(this)
    }
    toString() {
      let current = this.getHead()
      let string = ``
      while (current) {
        string += current.element + (current.next ? `, ` : ``)
        current = current.next
      }
      return string
    }
    print() {
      console.log(this.toString())
    }
  }
  return LinkedList2
})()
