'use strict'
async function doubleAndAdd(a, b) {
  try {
    a = await doubleAfter1Sec(a)
    b = await doubleAfter1Sec(b)
  } catch (e) {
    return NaN //return something
  }
  return a + b
}
//🚀Usage:
doubleAndAdd(`one`, 2).then(console.log) // NaN
doubleAndAdd(1, 2).then(console.log) // 6
function doubleAfter1Sec(param) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let val = param * 2
      isNaN(val) ? reject(NaN) : resolve(val)
    }, 1000)
  })
}
export {}
