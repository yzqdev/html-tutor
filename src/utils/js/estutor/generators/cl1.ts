let infinity = {
  [Symbol.iterator]: function* () {
    let c = 1
    for (;;) {
      yield c++
    }
  },
}

console.log(`start`)
for (let n of infinity) {
  // truncate the sequence at 1000
  if (n > 10) break
  console.log(n)
}
