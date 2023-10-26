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

## slugify

```ts
// 根据需求确定  .replace(/-$/g, ""); // 删除尾随 -
// 根据需求确定  .toLowerCase() // 将字符串转换为小写字母

const slugify = (string, separator = "-") => {
  return string
    .toString() // 转换为字符串(可选)
    .trim() // 删除字符串两侧的空格（可选）
    .replace(/\s+/g, separator) // 将空格替换为 -
    .replace(/[^\w-]+/g, "") // 删除所有非单词字符
    .replace(/_/g, separator) // 将 _ 替换为 -
    .replace(/--+/g, separator) // 将多个 - 替换为单个 -

};

slugify("Hello, World!");
// 输出: "Hello-World"

slugify("Hello, Universe!", "_");
// 输出: "Hello_Universe"
```

## validate email

```ts
const validateEmail = (email) => {
  const regex = /^\S+@\S+.\S+$/;
  return regex.test(email);
};

validateEmail("youremail@org.com"); // true
validateEmail("youremail@com"); // false
validateEmail("youremail.org@com"); // false
```

## capitalize

```ts
const capitalize = (str) => {
  const arr = str.trim().toLowerCase().split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(" ");
};

capitalize("hello, world!");
// 输出: "Hello, World!"

```

## santize html

```ts
const sanitizeHTML = (str) => {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
};

sanitizeHTML("<h1>Hello, World!</h1>");
// 输出: "&lt;h1&gt;Hello, World!&lt;/h1&gt;"
```
