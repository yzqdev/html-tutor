<style>
body {
  min-width: 550px;
  font-weight: bold;
  font-size: 20px;
}

.header,
.footer {
  background: rgba(29, 27, 27, 0.726);
  text-align: center;
  height: 60px;
  line-height: 60px;
}

.container {
  display: flex;
}

.container .column {
  text-align: center;
  height: 300px;
  line-height: 300px;
}

.center {
  flex: 1;
  background: rgb(206, 201, 201);
}

.left {
  width: 200px;
  background: rgba(95, 179, 235, 0.972);
}

.right {
  width: 150px;
  background: rgb(231, 105, 2);
}
</style>

<template>
  <div class="header">.header</div>
  <div class="container">
    <div class="left column">.left</div>
    <div class="center column">.center</div>
    <div class="right column">.right</div>
  </div>
  <div class="footer">.footer</div>
</template>
