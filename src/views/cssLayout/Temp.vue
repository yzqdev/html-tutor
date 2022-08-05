<style>
body {
  font-weight: bold;
  min-width: 550px; /* 2x leftContent width + rightContent width */
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

.footer {
  clear: both;
}

.container {
  padding-left: 200px; /* leftContent width */
  padding-right: 150px; /* rightContent width */
  overflow: hidden;
}

.container .column {
  position: relative;
  float: left;
  text-align: center;
  height: 300px;
  line-height: 300px;
  border: 4px solid black;
}

.center {
  width: 100%;
  background: rgb(206, 201, 201);
}

.left {
  width: 200px; /* leftContent width */
  right: 200px; /* leftContent width */
  margin-left: -100%;
  background: rgba(95, 179, 235, 0.972);
}

.right {
  width: 150px; /* rightContent width */
  margin-right: -150px; /* rightContent width */
  background: rgb(231, 105, 2);
}
</style>

<template>
  <div class="header">#header</div>
  <div class="container">
    <div class="column center">#center</div>
    <div class="column left">#left</div>
    <div class="column right">#right</div>
  </div>
  <div class="footer">#footer</div>
</template>
