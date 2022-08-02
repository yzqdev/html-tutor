# symbol

## 符号

```js
function constant() {
  return () => arguments[1]
}

let result = constant(1)
console.log(result()) // 1
let s = Symbol(`foo`)
console.log(s instanceof Symbol)
const obj = {
  a: `list`,
  toString() {
    return `hello`
  },
}
const sym = Symbol(obj)
console.log(sym) // Symbol(abc)
```

```js
function message(literals, ...values) {
  return literals.reduce((prev, next, i) => {
    const value = values[i - 1]
    return prev + value + next
  })
}

console.log(message([1, 2, 3], [`list`, `ee`, `kode`]))

function oneLine(template, ...expressions) {
  let result = template.reduce((prev, next, i) => {
    const expression = expressions[i - 1]
    return prev + expression + next
  })

  result = result.replace(/(\n\s*)/g, ` `)
  result = result.trim()

  return result
}

oneLine([`list`, `ee`, `kode`], 3)

function stripIndents(template, ...expressions) {
  let result = template.reduce((prev, next, i) => {
    const expression = expressions[i - 1]
    return prev + expression + next
  })

  result = result.replace(/^[^\S\n]+/gm, ``)
  result = result.trim()

  return result
}

const html = `
 <ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
 <ul>
`
stripIndents(html)
```

## unicode

```js
const regex = new RegExp(`\u{61}`, `u`)

console.log(regex.unicode)
console.log(`\uD842\uDFD7`)
console.log(`\uD842\uDFD7`.codePointAt(0))
```

```js
const movies = {
  list: [{ title: `Heat` }, { title: `Interstellar` }],
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.list.length) {
          const value = this.list[index++].title
          return { value, done: false }
        }
        return { done: true }
      },
    }
  },
}

const [firstMovieTitle] = movies
console.log(firstMovieTitle) // => 'Heat'
```

```js
function constant() {
  return () => arguments[1]
}

let result = constant(1)
console.log(result()) // 1
let s = Symbol(`foo`)
console.log(s instanceof Symbol)
const obj = {
  a: `list`,
  toString() {
    return `hello`
  },
}
const sym = Symbol(obj)
console.log(sym) // Symbol(abc)
```
