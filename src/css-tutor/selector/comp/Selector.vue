<script setup lang="ts">

</script>

<template>
  <div>
    <h2>选择器列表</h2>
    <div class="box">
      <p>颜色是</p>
      <div>
        <p>孙子的颜色是</p>
      </div>
    </div>
    <h2>后代选择器</h2>
    <div class="box1">
      <p>颜色是</p>
      <div>
        <p>孙子的颜色是</p>
      </div>
    </div>

    <h2>子代关系选择器</h2>
    <div class="box2">
      <p>颜色是</p>
      <div>
        <p>孙子的颜色是</p>
      </div>
    </div>

    <h2>邻接兄弟 </h2>
    <div class="box3">
      <p>颜色是</p>
      <div>
        <p>孙子的颜色是</p>
      </div>
    </div>
    <p>我的兄弟</p>
    <p>我的兄弟2</p>

    <h2>通用兄弟</h2>
    <div class="box4">
      <p>颜色是</p>
      <div>
        <p>孙子的颜色是</p>
      </div>
    </div>
    <p>我的兄弟</p>
    <p>我的兄弟2</p>
  </div>
</template>

<style lang="scss" scoped>
.box {
  &,p{
     color:cyan; 
  }

}
.box1 {
  p {
    color: cyan
  }
}
.box2 {
  > p {
    color: cyan
  }
}
.box3{
  +p{
    color:cyan;
  }
}
.box4 {
  ~p {
    color: cyan;
  }
}
</style>
