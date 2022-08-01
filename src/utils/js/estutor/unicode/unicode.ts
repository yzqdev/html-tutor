const regex = new RegExp(`\u{61}`, `u`)

console.log(regex.unicode)
console.log(`\uD842\uDFD7`)
console.log(`\uD842\uDFD7`.codePointAt(0))
