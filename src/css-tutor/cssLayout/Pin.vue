<template>
  <div class="div1">1</div>
  <div class="div2">2</div>
  <div class="div3">3</div>
</template>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  overflow: hidden;
}
div {
  margin: auto 0;
  width: 100px;
  height: 100px;
  background: red;
  font-size: 40px;
  line-height: 100px;
  color: #fff;
  text-align: center;
}

.div1 {
  margin: 100px auto 0;
}

.div2 {
  margin-left: 50%;
  background: green;
  float: left;
  transform: translateX(-100%);
}

.div3 {
  background: blue;
  float: left;
  transform: translateX(-100%);
}
</style>
