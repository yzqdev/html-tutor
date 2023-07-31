<style>
html {
  height: 101%;
}

body {
  background:
    radial-gradient(circle, white 10%, transparent 10%),
    radial-gradient(circle, white 10%, black 10%) 50px 50px;
  background-size: 100px 100px;
}

.box-shadow {
  background-color: #ff8020;
  width: 160px;
  height: 90px;
  margin-top: -45px;
  margin-left: -80px;
  position: absolute;
  top: 50%;
  left: 50%;
}

.box-shadow:after {
  content: '';
  width: 150px;
  height: 1px;
  margin-top: 88px;
  margin-left: -75px;
  display: block;
  position: absolute;
  left: 50%;
  z-index: -1;
  -webkit-box-shadow: 0px 0px 8px 2px #000000;
  -moz-box-shadow: 0px 0px 8px 2px #000000;
  box-shadow: 0px 0px 8px 2px #000000;
}

.blurry-text {
  color: transparent;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.loading:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  animation: ellipsis 2s infinite;
  content: '\2026'; /* ascii code for the ellipsis character */
}

@keyframes ellipsis {
  from {
    width: 2px;
  }
  to {
    width: 15px;
  }
}

::selection {
  background: #e2eae2;
}

::-moz-selection {
  background: #e2eae2;
}

::-webkit-selection {
  background: #e2eae2;
}
</style>

<template>
  <div class="box-shadow"></div>
  <h4 class="blurry-text">这是问题</h4>
  <h4 class="loading"></h4>
  <h4>这是选择区域</h4>
</template>
