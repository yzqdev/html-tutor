<template>
  <section>
    <h2>flex布局</h2>
    <article class="outer1">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
    </article>
    <h2>
      利用绝对定位的方式，左右两栏设置为绝对定位，中间设置对应方向大小的margin的值
    </h2>
    <article class="outer2">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
    </article>
    <h2>
      利用浮动的方式，左右两栏设置固定大小，并设置对应方向的浮动。中间一栏设置左右两个方向的margin值，
      <em>注意这种方式，中间一栏必须放到最后</em>
    </h2>
    <article class="outer3">
      <div class="left"></div>

      <div class="right"></div>
      <div class="center"></div>
    </article>
    <h2>圣杯布局,使用浮动和负边距实现</h2>
    <article class="outer4">
      <div class="center"></div>
      <div class="left"></div>

      <div class="right"></div>
    </article>
    <h2>
      双飞翼布局，双飞翼布局相对于圣杯布局来说，左右位置的保留是通过中间列的
      margin 值来实现的，而不是通过父元素的 padding
      来实现的。本质上来说，也是通过浮动和外边距负值来实现的。
    </h2>
    <article class="outer5">
      <div class="center"><div class="wrapper"></div></div>
      <div class="left"></div>

      <div class="right"></div>
    </article>
  </section>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.outer1 {
  display: flex;
  height: 100px;

  .left {
    width: 100px;
    background: tomato;
  }

  .right {
    width: 200px;
    background: gold;
  }

  .center {
    flex: auto;
    background: lightgreen;
  }
}

.outer2 {
  position: relative;
  height: 100px;

  .left {
    position: absolute;

    width: 100px;
    height: 100px;
    background: tomato;
  }

  .right {
    position: absolute;
    top: 0;
    right: 0;

    width: 200px;
    height: 100px;
    background: gold;
  }

  .center {
    margin-left: 100px;
    margin-right: 200px;
    height: 100px;
    background: lightgreen;
  }
}

.outer3 {
  height: 100px;

  .left {
    float: left;
    width: 100px;
    height: 100px;
    background: tomato;
  }

  .right {
    float: right;
    width: 200px;
    height: 100px;
    background: gold;
  }

  .center {
    height: 100px;
    margin-left: 100px;
    margin-right: 200px;
    background: lightgreen;
  }
}

.outer4 {
  height: 100px;
  padding-left: 100px;
  padding-right: 200px;

  .left {
    position: relative;
    left: -100px;

    float: left;
    margin-left: -100%;

    width: 100px;
    height: 100px;
    background: tomato;
  }

  .right {
    position: relative;
    left: 200px;

    float: right;
    margin-left: -200px;

    width: 200px;
    height: 100px;
    background: gold;
  }

  .center {
    float: left;

    width: 100%;
    height: 100px;
    background: lightgreen;
  }
}

.outer5 {
  height: 100px;

  .left {
    float: left;
    margin-left: -100%;

    width: 100px;
    height: 100px;
    background: tomato;
  }

  .right {
    float: left;
    margin-left: -200px;

    width: 200px;
    height: 100px;
    background: gold;
  }

  .center {
    width: 100%;
    float: left;
    height: 100px;
    background: lightgreen;

    .wrapper {
      width: 100%;
      height: 100px;
    }
  }
}
</style>
