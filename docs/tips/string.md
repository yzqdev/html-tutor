# 字符串

## randomStr

```js
function randomString(n) {
  const str = `abcdefghijklmnopqrstuvwxyz0123456789`
  let tmp = ``
  for (let i = 0; i < n; i++) {
    tmp += str.charAt(Math.round(Math.random() * str.length))
  }
  return tmp
}

console.log(randomString(12))

```

## template

```js
function message(literals, ...values) {
  return literals.reduce((prev, next, i) => {
    let value = values[i - 1]
    return prev + value + next
  })
}

console.log(message([1, 2, 3], [`list`, `ee`, `kode`]))

function oneLine(template, ...expressions) {
  let result = template.reduce((prev, next, i) => {
    let expression = expressions[i - 1]
    return prev + expression + next
  })

  result = result.replace(/(\n\s*)/g, ` `)
  result = result.trim()

  return result
}

oneLine([`list`, `ee`, `kode`], 3)

function stripIndents(template, ...expressions) {
  let result = template.reduce((prev, next, i) => {
    let expression = expressions[i - 1]
    return prev + expression + next
  })

  result = result.replace(/^[^\S\n]+/gm, ``)
  result = result.trim()

  return result
}

let html = `
 <ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
 <ul>
`
stripIndents(html)
export { stripIndents }
```
