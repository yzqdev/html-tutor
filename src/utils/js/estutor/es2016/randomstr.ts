function randomString(n) {
  const str = `abcdefghijklmnopqrstuvwxyz0123456789`
  let tmp = ``
  for (let i = 0; i < n; i++) {
    tmp += str.charAt(Math.round(Math.random() * str.length))
  }
  return tmp
}

console.log(randomString(12))
export {}
