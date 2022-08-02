<template>
  <div id="throttle"></div>
  <div id="debunce"></div>
</template>
<script setup lang="ts">
function throttle() {
  window.onload = function () {
    // 1、获取按钮，绑定点击事件
    let myThrottle = document.getElementById('throttle')
    myThrottle.addEventListener('click', throttle(sayThrottle))
  }

  // 2、节流函数体
  function throttle(fn) {
    // 4、通过闭包保存一个标记
    let canRun = true
    console.log('最早的canrun' + canRun)
    return function (...args) {
      // 5、在函数开头判断标志是否为 true，不为 true 则中断函数
      if (!canRun) {
        console.log('现在不能运行')
        return
      }
      console.log(canRun)
      // 6、将 canRun 设置为 false，防止执行之前再被执行
      canRun = false
      // 7、定时器
      setTimeout(() => {
        console.log(canRun)
        fn.call(this, args)
        // 8、执行完事件（比如调用完接口）之后，重新将这个标志设置为 true
        canRun = true
      }, 1000)
    }
  }

  // 3、需要节流的事件
  function sayThrottle() {
    console.log('节流成功！')
  }
}

function debunce() {
  window.onload = function () {
    // 1、获取这个按钮，并绑定事件
    let myDebounce = document.getElementById('debounce')
    myDebounce.addEventListener('click', debounce(sayDebounce))
  }

  // 2、防抖功能函数，接受传参
  function debounce(fn) {
    // 4、创建一个标记用来存放定时器的返回值
    let timeout = null
    return function (...args) {
      // 5、每次当用户点击/输入的时候，把前一个定时器清除
      clearTimeout(timeout)
      // 6、然后创建一个新的 setTimeout，
      // 这样就能保证点击按钮后的 interval 间隔内
      // 如果用户还点击了的话，就不会执行 fn 函数
      timeout = setTimeout(() => {
        console.log(this.id)
        fn.call(this, args)
      }, 1000)
    }
  }

  // 3、需要进行防抖的事件处理
  function sayDebounce() {
    // ... 有些需要防抖的工作，在这里执行
    console.log('防抖成功！')
  }
}
</script>
