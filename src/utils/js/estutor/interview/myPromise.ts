function Mypromise(func) {
  this.fullfilled = false
  this.rejected = false
  this.pending = true
  this.handlers = []
  this.errorHandlers = []
  function resolve(...args) {
    this.handlers.forEach((handler) => handler(...args))
  }
  function reject(...args) {
    this.errorHandlers.forEach((handler) => handler(...args))
  }
  func.call(this, resolve.bind(this), reject.bind(this))
}

Mypromise.prototype.then = function (func) {
  this.handlers.push(func)
  return this
}
Mypromise.prototype.catch = function (func) {
  this.errorHandlers.push(func)
  return this
}

Mypromise.race = (promises) =>
  new Mypromise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve, reject)
    })
  })

Mypromise.all = (promises) =>
  new Mypromise((resolve, reject) => {
    let len = promises.length
    let res = []
    promises.forEach((p, i) => {
      p.then((r) => {
        if (len === 1) {
          resolve(res)
        } else {
          res[i] = r
        }
        len--
      }, reject)
    })
  })

// test
const p1 = new Mypromise((resolve) =>
  setTimeout(resolve.bind(null, 'resolved'), 3000)
)
p1.then(console.log).then((...args) => console.log('second', ...args))

const p2 = new Mypromise((resolve, reject) =>
  setTimeout(reject.bind(null, 'rejected'), 3000)
)
p2.then(console.log).catch((...args) => console.log('fail', ...args))
