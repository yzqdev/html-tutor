 
  <template>
    <section>
      <p>header,content和footer等宽的单列布局</p>
      <article class="lay1">
        <div class="header"></div>
        <div class="content"></div>
        <div class="footer"></div>
      </article>
      <p>header与footer等宽,content略窄的单列布局</p>
      <article class="lay2">
        <div class="header">
          <div class="nav"></div>
        </div>
        <div class="content"></div>
        <div class="footer"></div>
      </article>
    </section>
  </template>
 
<style lang="scss" scoped>
@import './layout.scss'
</style>