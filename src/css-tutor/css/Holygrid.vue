<style>
body {
  min-width: 550px;
  font-weight: bold;
  font-size: 20px;
}

.main {
  display: grid;
}
.header,
.footer {
  background: rgba(29, 27, 27, 0.726);
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.header {
  grid-row: 1;
  grid-column: 1/5;
}
.footer {
  grid-row: 3;
  grid-column: 1/5;
}
.column {
  text-align: center;
  height: 300px;
  line-height: 300px;
}
.left {
  grid-row: 2;
  grid-column: 1/2;
  background: rgba(95, 179, 235, 0.972);
}
.center {
  grid-row: 2;
  grid-column: 2/4;
  background: rgb(206, 201, 201);
}
.right {
  grid-row: 2;
  grid-column: 4/5;
  background: rgb(231, 105, 2);
}
</style>

<template>
  <div class="main">
    <div class="header">.header</div>
    <div class="left column">.left</div>
    <div class="center column">.center</div>
    <div class="right column">.right</div>
    <div class="footer">.footer</div>
  </div>
</template>
