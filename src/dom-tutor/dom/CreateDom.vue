<template>
  <div ref="dom"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
let dom = ref()
onMounted(() => {
  let arr = []
  for (let a = 0; a < 10; a++) {
    arr.push(a)
  }
  function render(data) {
    for (let i = 0; i < arr.length; i++) {
      let div = document.createElement('div')
      div.innerHTML = arr[i]
      dom.value.append(div)
    }
  }

  //分时函数
  let timeChunk = function (data, fn, count = 20, delay = 200) {
    let obj, timer
    let start = function () {
      for (let i = 0; i < Math.min(count, data.length); i++) {
        let obj = data.shift()
        fn(obj)
      }
    }
    return function () {
      timer = setInterval(function () {
        if (data.length === 0) {
          return clearInterval(timer)
        }
        start()
      }, delay)
    }
  }

  let renderlist = timeChunk(arr, render, 20, 200)
  renderlist()
})
</script>
