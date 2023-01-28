# 实现图形

::: vue-demo

```vue
<template>
  <section class="section1">
    <article>
      <p>border特性如下</p>
      <div class="triangle1"></div>
    </article>
    <article>
      <p>实现三角形</p>
      <div class="triangle2"></div>
    </article>
    <article>
      <p>实现三角形</p>
      <div class="triangle3"></div>
    </article>
    <article>
      <p>实现扇形</p>
      <div class="sector1"></div>
    </article>
  </section>
  <section class="section2">
    <article>
      <p>实现正方形</p>
      <div class="square1"></div>
    </article>
    <article>
      <p>
        实现正方形2(利用元素的margin/padding百分比是相对父元素width的性质来实现)
      </p>
      <div class="square2"></div>
    </article>
    <article>
      <p>
        实现正方形2(利用元素的margin/padding百分比是相对父元素width的性质来实现)
      </p>
      <div class="square3"></div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.section1 {
  display: flex;
  flex-flow: row wrap;
  .triangle1 {
    width: 0;
    height: 0;
    border: 100px solid;
    border-color: orange blue red green;
  }
  .triangle2 {
    width: 0;
    height: 0;
    border-top: 50px solid red;
    border-right: 50px solid transparent;
    border-left: 50px solid transparent;
  }
  .triangle3 {
    width: 0;
    height: 0;
    border-bottom: 50px solid red;
    border-right: 50px solid transparent;
    border-left: 50px solid transparent;
  }

  .sector1 {
    border: 100px solid transparent;
    width: 0;
    height: 0;
    border-radius: 100px;
    border-top-color: red;
  }
}
.section2 {
  .square1 {
    width: 10%;
    height: 10vw;
    background: tomato;
  }
  .square2 {
    width: 10%;
    height: 0;
    padding-top: 10%;
    background: orange;
  }
  .square3 {
    width: 10%;
    overflow: hidden;
    background: yellow;
    &::after {
      content: '';
      display: block;
      margin-top: 100%;
    }
  }
}
</style>

```

:::
