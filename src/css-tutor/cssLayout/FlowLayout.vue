<style lang="scss" scoped>
.wrap {
  float: left;

  position: relative;
  left: 50%;
  clear: both;
}
.wrap-center {
  left: -50%;
  width: 400px;
  height: 400px;
  background-color: aqua;
}
.parent {
  position: relative;
  height: 600px;
}
.left {
  position: absolute;
  left: 0;
  width: 100px;
  border: 2px solid red;
}
.right {
  position: absolute;
  right: 0;
  width: 100px;
  border: 2px solid red;
}
.center {
  position: absolute;
  left: 100px;
  right: 100px;
  border: 2px solid red;
}
</style>

<template>
  <div class="wrap"><div class="wrap-center"></div></div>

  <div class="parent">
    <div class="left"></div>
    <div class="right"></div>
    <div class="center"></div>
  </div>
</template>
