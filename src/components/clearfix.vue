 
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      a {
        text-decoration: none;
        color: #333;
      }

      h1 {
        font-size: 22px;
        margin-top: 10px;
        padding: 10px 0;
        text-align: center;
      }

      h2 {
        font-size: 16px;
        margin: 20px 0;
        text-align: center;
        color: #555;
      }

      h3 {
        font-size: 14px;
        color: #666;
        padding: 10px 0;
      }

      .clearfix:after {
        clear: both;
        content: '.';
        display: block;
        height: 0;
        visibility: hidden;
      }

      .clearfix {
      }

      .clear {
        clear: both;
      }

      .left {
        float: left;
      }

      .right {
        float: right;
      }

      .left,
      .right {
        *display: inline;
      }

      div {
        padding: 15px 20px;
        font-size: 14px;
        color: #333;
      }

      .content {
        padding-bottom: 200px;
      }

      .wrap {
        border: 1px solid blue;
        width: 600px;
        margin: 30px auto 5px;
        background: #f5f5f5;
      }

      .main {
        height: 60px;
        width: 50%;
        background: #ffe3d7;
      }

      .side {
        width: 20%;
        background: lightblue;
      }

      .footer {
        border: 1px solid #ccc;
        background: #eee;
        width: 600px;
        margin: 5px auto 30px;
      }
    </style>
 

  <template>
    <div class="content">
      <h1>
        <a
          href="http://www.iyunlu.com/view/css-xhtml/those-years-we-have-cleared-with-floats.html"
          target="_blank"
          title="返回文章"
        >
          返回文章：那些年我们一起清除过的浮动
        </a>
      </h1>
      <h2>闭合浮动 与 清除浮动 的区别</h2>
      <div class="wrap">
        <div class="main left">
          .main：很抱歉，现代浏览器中我没能把wrap撑高(float:left)
        </div>
        <div class="side left">.side：我也浮动了(float:left)</div>
      </div>
      <div class="footer clear">
        .footer：我通过设置 clear:both
        <strong>清除浮动</strong>
        ,虽然位置正确了,但是 wrap 的高度没变,有些不爽
      </div>
      <div class="wrap clearfix" id="floa7">
        <div class="main left">
          .main：wrap自己闭合浮动了，所以footer不用再清除浮动了(float:left)
        </div>
        <div class="side left">.side：我也浮动了(float:left)</div>
      </div>
      <div class="footer">
        .footer：这次 wrap 人品爆发了, 通过 .clearfix 已经
        <strong>闭合浮动</strong>
        了
      </div>
      <h2>闭合浮动的几种方法</h2>
      <div class="wrap" id="float1">
        <h3>1）添加额外标签</h3>
        <div class="main left">.main{float:left;}</div>
        <div class="side left">.side{float:right;}</div>
        <div style="clear: both"></div>
      </div>
      <div class="footer">.footer</div>
      <div class="wrap" id="float2">
        <h3>2）使用 br标签和其自身的 html属性</h3>
        <div class="main left">.main{float:left;}</div>
        <div class="side left">.side{float:right;}</div>
        <br clear="all" />
      </div>
      <div class="footer">.footer</div>
      <div class="wrap" id="float3" style="overflow: hidden; *zoom: 1">
        <h3>3)父元素设置 overflow：hidden</h3>
        <div class="main left">.main{float:left;}</div>
        <div class="side left">.side{float:right;}</div>
      </div>
      <div class="footer">.footer</div>
      <div class="wrap" id="float6" style="display: table">
        <h3>6）父元素设置display:table</h3>
        <div class="main left">.main{float:left;}</div>
        <div class="side left">.side{float:right;}</div>
      </div>
      <div class="footer">.footer</div>
    </div>
  </template>
 
