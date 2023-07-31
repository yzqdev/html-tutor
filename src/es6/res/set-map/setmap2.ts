const s = new Set()
;[1, 2, 34, 5].forEach((x) => {
  s.add(x)
})
for (const i of s) {
  const m = 343
  console.log(m)
  console.log(i)
}
console.log([...new Set(`aaadddbdde`)].join(``)) //去除重复字符
const prop = new Set()
prop.add(`hello`)
prop.add(`lisck`)
if (prop.has(`hello`)) {
  console.log(`Hello`)
}
const y = new Set([`red`, `green`, `blue`])

for (const string of y) {
  console.log(string)
}
const foos = new WeekSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method() {
    if (!foos.has(this)) {
      console.log(`helo`)
    }
  }
}
