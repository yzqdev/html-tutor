<style lang="scss" scoped>
.container {
  width: 800px;
  height: 200px;
}

.left {
  font-size: 14px;
  background: red;
  display: inline-block;
  width: 100px;
  height: 100px;
}

.right {
  font-size: 14px;
  background: blue;
  display: inline-block;
  float: right;
  width: 100px;
  height: 100px;
}
</style>

<template>
  <div class="container">
    <div class="left">左</div>
    <div class="right">右</div>
  </div>
</template>
