<template>
  <section id="app">
    <article>
      <article>
        如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中
        <button @click="showMargin">点击</button>
      </article>
      <div
        v-for="item in [1, 2]"
        class="container"
        :style="bfcOverFlag ? bfcOverStyle : ''"
      >
        <article>{{ item }}</article>
      </div>
    </article>
    <article>
      <article>
        BFC 可以包含浮动的元素（清除浮动）
        <button @click="clearFix">点击</button>
      </article>
      <div class="parent" :style="clearFixFlag ? bfcOverStyle : ''">
        <div class="child"></div>
      </div>
    </article>
    <article style="margin-top: 150px">
      <article>
        BFC 可以阻止元素被浮动元素覆盖
        <button @click="removeFloat">点击</button>
      </article>

      <article
        style="height: 100px; width: 100px; float: left; background: lightblue"
      >
        我是一个左浮动的元素
      </article>
      <article
        style="width: 200px; height: 200px; background: #eee"
        :style="removeFloatFlag ? bfcOverStyle : ''"
      >
        我是一个没有设置浮动, 也没有触发 BFC 元素, width: 200px; height:200px;
        background: #eee;
      </article>
    </article>
  </section>
</template>
<script lang="ts">
export default defineComponent({
  data() {
    return {
      bfcOverStyle: { overflow: 'hidden' },
      bfcOverFlag: false,
      clearFixFlag: false,
      removeFloatFlag: false,
    }
  },

  methods: {
    showMargin() {
      this.bfcOverFlag = !this.bfcOverFlag
    },
    clearFix() {
      this.clearFixFlag = !this.clearFixFlag
    },
    removeFloat() {
      this.removeFloatFlag = !this.removeFloatFlag
    },
  },
})
</script>
<style lang="scss" scoped>
@import './bfc.scss';
</style>
