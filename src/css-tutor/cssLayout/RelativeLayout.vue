<style lang="scss" scoped>
body {
  font-size: 20px;
}

.main {
}

.main .f {
  position: relative;
  float: left;
  margin: 0 auto;
  padding: 0 200px;
  height: 9.375rem;
  line-height: 9.375rem;
  font-size: 1.25rem;
  overflow: hidden;
}

.main .left {
  margin-left: 200px;
  width: 200px;
  right: 200px;

  background-color: aqua;
}

.main .center {
  width: auto;
  margin-left: -7.5rem;
  background-color: red;
}

.main .right {
  margin-right: -200px;
  width: 12.5rem;
  background-color: yellow;
}

.header,
.footer {
  background-color: gray;
  height: 6.25rem;
  text-align: center;
  line-height: 6.25rem;
}
</style>

<template>
  <div class="header">
    <p>header</p>
  </div>
  <div class="main">
    <div class="f left">left</div>
    <div class="f center">center</div>
    <div class="f right">right</div>
  </div>
  <div class="footer">footer</div>
</template>
