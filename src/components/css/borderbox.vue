 
    <style lang="scss" scoped>
      html {
        box-sizing: border-box;
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
      .box {
        display: inline-block;
        width: 150px;
        height: 150px;
        padding: 10px;
        background: tomato;
        color: white;
        border: 10px solid red;
      }
      .content-box {
        box-sizing: content-box;
      }
      .clearfix {
        border: solid 1px red;
      }
      .clearfix::after {
        content: '';
        display: block;
        clear: both;
      }
      .floated {
        float: left;
        margin-left: 20px;
      }
    </style>
 
  <template>
    <div class="box">border-box</div>
    <div class="box content-box">content-box</div>
    <section>
      <article>
        <div class="clearfix">
          <div class="floated">float a</div>
          <div class="floated">float b</div>
          <div class="floated">float c</div>
        </div>
      </article>
    </section>
  </template>
 
