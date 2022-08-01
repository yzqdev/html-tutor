/*
 * @Author: frozen521
 * @Date:   2019-03-16 16:29:07
 * @Last Modified by:   frozen521
 * @Last Modified time: 2019-03-16 16:29:46
 */
function Queue() {
  let items = []

  this.enqueue = function (element) {
    items.push(element)
  }

  this.dequeue = function () {
    return items.shift()
  }

  this.front = function () {
    return items[0]
  }

  this.isEmpty = function () {
    return items.length === 0
  }

  this.clear = function () {
    items = []
  }

  this.size = function () {
    return items.length
  }

  this.print = function () {
    console.log(items.toString())
  }
}

const queue = new Queue()
console.log(queue.isEmpty())
