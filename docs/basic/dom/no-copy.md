# 不可复制

::: vue-demo

```vue
<template>
  <p id="h">和律师费</p>
  <p id="h1">和律师费</p>
  <p id="h2">和律师费</p>
  <p id="h3">和律师费</p>
  <input type="text" />
</template>

<script setup lang="ts">
// 禁止右键菜单
document.body.oncontextmenu = (e) => {
  console.log(e, '右键')
  return false
  // e.preventDefault();
}
// 禁止文字选择。
document.body.onselectstart = (e) => {
  console.log(e, '文字选择')
  return false
  // e.preventDefault();
}
// 禁止复制
document.body.oncopy = (e) => {
  console.log(e, 'copy')
  return false
  // e.preventDefault();
}
// 禁止剪切
document.body.oncut = (e) => {
  console.log(e, 'cut')
  return false
  // e.preventDefault();
}
// 禁止粘贴
document.body.onpaste = (e) => {
  console.log(e, 'paste')
  return false
  // e.preventDefault();
}
window.onload = function f1() {
  f2()
}

function f2() {
  console.log('hello')
  arraytest()
}

function arraytest() {
  for (let i = 1; i < 100; i++) {
    console.log((i + i) ^ 2)
  }
}
console.log('代码执行结束')
document.body.onpaste = (e) => {
  let clipboardData = e.clipboardData || window.clipboardData // 兼容处理
  console.log('要粘贴的数据', clipboardData.getData('text'))
}
</script>

```

:::
