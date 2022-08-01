/*
 * @Author: frozen521
 * @Date:   2019-03-16 17:04:12
 * @Last Modified by:   frozen521
 * @Last Modified time: 2019-03-16 17:06:46
 */

/**
 * 单向链表
 * @Author    yangzq
 * @DateTime  2019-03-16
 * @copyright [copyright]
 * @license   [license]
 * @version   1.0
 * @param     {[type]}    ) {               class Node {        constructor(element) {            this.element [description]
 * @return    {[type]}      [description]
 */
let LinkedList2 = (function () {
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
      let node = new Node(element),
        current
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
    insert(position, element) {
      if (position >= 0 && position <= this.size()) {
        let node = new Node(element),
          current = this.getHead(),
          previous,
          index = 0
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
      } else {
        return false
      }
    }
    removeAt(position) {
      if (position > -1 && position < this.size()) {
        let current = this.getHead(),
          previous,
          index = 0
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
      } else {
        return null
      }
    }
    remove(element) {
      let index = this.indexOf(element)
      return this.removeAt(index)
    }
    indexOf(element) {
      let current = this.getHead(),
        index = 0
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
      let current = this.getHead(),
        string = ``
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

function DoublyLinkedList() {
  let Node = function (element) {
    this.element = element
    this.next = null
    this.prev = null //NEW
  }
  let length = 0
  let head = null
  let tail = null //NEW
  this.insert = function (element) {
    let node = new Node(element),
      current
    if (head === null) {
      head = node
      tail = node //NEW
    } else {
      //NEW
      tail.next = node
      node.prev = tail
      tail = node
    }
    length++
  }
  this.insert = function (position, element) {
    if (position >= 0 && position <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0
      if (position === 0) {
        if (!head) {
          //NEW
          head = node
          tail = node
        } else {
          node.next = current
          current.prev = node //NEW
          head = node
        }
      } else if (position === length) {
        ////NEW
        current = tail
        current.next = node
        node.prev = current
        tail = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
        current.prev = node //NEW
        node.prev = previous //NEW
      }
      length++
      return true
    } else {
      return false
    }
  }
  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0
      if (position === 0) {
        //NEW
        if (length === 1) {
          //
          tail = null
        } else {
          head.prev = null
        }
      } else if (position === length - 1) {
        //NEW
        current = tail
        tail = current.prev
        tail.next = null
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
        current.next.prev = previous //NEW
      }
      length--
      return current.element
    } else {
      return null
    }
  }
  this.remove = function (element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }
  this.indexOf = function (element) {
    let current = head,
      index = -1
    if (element === current.element) {
      return 0
    }
    index++
    while (current.next) {
      if (element == current.element) {
        return index
      }
      current = current.next
      index++
    }
    //check last item
    if (element == current.element) {
      return index
    }
    return -1
  }
  this.isEmpty = function () {
    return length === 0
  }
  this.size = function () {
    return length
  }
  this.toString = function () {
    let current = head,
      s = current ? current.element : ``
    while (current && current.next) {
      current = current.next
      s += `, ` + current.element
    }
    return s
  }
  this.inverseToString = function () {
    let current = tail,
      s = current ? current.element : ``
    while (current && current.prev) {
      current = current.prev
      s += `, ` + current.element
    }
    return s
  }
  this.print = function () {
    console.log(this.toString())
  }
  this.printInverse = function () {
    console.log(this.inverseToString())
  }
  this.getHead = function () {
    return head
  }
  this.getTail = function () {
    return tail
  }
}
