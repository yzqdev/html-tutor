<template>
  <label>
    没有防抖
    <input type="text" id="debounce" />
  </label>
</template>
<script setup lang="ts">
//模拟一段ajax请求
function ajax(content) {
  console.log('ajax request ' + content)
}

function debounce(fun, delay) {
  return function (args) {
    let that = this
    let _args = args
    clearTimeout(fun.id)
    fun.id = setTimeout(() => {
      fun.call(that, _args)
    }, delay)
  }
}

let inputb = document.getElementById('debounce')

let debounceAjax = debounce(ajax, 3000)

inputb.addEventListener('keyup', function (e) {
  debounceAjax(e.target.value)
})
const da = new Date()
let biu = function () {
  console.log(
    'biu biu biu',
    `${da.getHours()}:${da.getMinutes()}:${da.getSeconds()}`,
  )
}

let boom = function () {
  console.log(
    'boom boom boom',
    `${da.getHours()}:${da.getMinutes()}:${da.getSeconds()}`,
  )
}

setInterval(debounce(biu, 2000), 1000)
setInterval(debounce(boom, 2000), 1000)
</script>
