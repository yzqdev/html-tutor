<template>
  <input id="input" type="" name="" value="" />
  <p></p>
</template>
<script setup lang="ts">
let el = document.getElementById('input') // 1. 获取输入框的dom节点
let obj = {
  // 2. 创建一个对象
  name: '',
}

function oberseve(obj) {
  // 3. 对对象进行观察
  if (typeof obj !== 'object') return // 3.1 判断参数是否为对象
  for (let key in obj) {
    // 3.2 对对象进行遍历，目的是为了把每个属性都设置get/set
    defineReactive(obj, key, obj[key])
    oberseve(obj[key]) // 3.3 obj[key] 有可能还是一个函数，需要递归，给obj[key]里的属性进行设置get/set
  }
}

function defineReactive(target, property, value) {
  // 4. 使用Object.defineProperty
  Object.defineProperty(target, property, {
    get() {
      el.value = value // 4.1 当读取时，把值赋值给input框
      return value
    },
    set(newVal) {
      el.value = newVal // 4.1 当设置时，把赋值给input框
      value = newVal
    },
  })
}

oberseve(obj) // 5.执行该函数，对obj对象里的属性进行设置get/set
el.addEventListener('input', function () {
  // 6.给输入框绑定input事件
  obj.name = this.value
  document.querySelectorAll('p').innerHTML = obj.name
  //   内容赋值给obj.name，触发obj.name的set方法
})
</script>
