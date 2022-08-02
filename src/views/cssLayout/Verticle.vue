<template>
 <section>
      <p>利用绝对定位</p>
      <article>
        <div class="parent">
          <div class="child"></div>
        </div>
      </article>
      <p>
        利用绝对定位，设置四个方向的值都为0，并将margin设置为auto，由于宽高固定，因此对应方向实现平分，可以实现水平和垂直方向上的居中。该方法适用于盒子有宽高的情况
      </p>
      <article>
        <div class="parent1">
          <div class="child"></div>
        </div>
      </article>
      <p>使用flex布局</p>
      <article>
        <div class="parent2">
          <div class="child"></div>
        </div>
      </article>
    </section></template>


    <style lang="scss" scoped>
    .parent {
  position: relative;
  width: 500px;
  height: 400px;
  background: yellowgreen;
  .child {
    width: 100px;
    height: 100px;
    position: absolute;
    background: cyan;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.parent1 {
  position: relative;
  width: 500px;
  height: 400px;
  background: yellowgreen;
  .child {
    width: 100px;
    height: 100px;
    position: absolute;
    background: cyan;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}
.parent2 {
  display: flex;
  justify-content: center;
  align-items: center;  width: 500px;
  height: 400px;
  background: yellowgreen;
  .child{
    width: 100px;
    height: 100px;
    background: cyan;
  }
}
</style>