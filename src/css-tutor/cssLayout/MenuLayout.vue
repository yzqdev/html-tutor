<style lang="scss" scoped>
.demo-ul {
  margin-bottom: 300px;
}
.demo-ul li {
  padding: 0 10px;
  width: 100px;
  background: #f90;
  position: relative;
}
.demo-ul li a {
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.demo-ul li ul {
  position: absolute;
  width: 100%;
  top: 40px;
  left: 0;
  transform: scaleY(0);
  overflow: hidden;
}
.ul-transition ul {
  transform-origin: 0 0;
  transition: all 0.5s;
}
.demo-ul li:hover ul {
  transform: scaleY(1);
}
.demo-ul li ul li {
  float: none;
  background: #0099ff;
}
</style>

<template>
  <div class="demo-hover demo-ul t_c">
    <ul class="fllil">
      <li>
        <a href="javascript:;">html</a>
        <ul>
          <li><a href="#">div</a></li>
          <li><a href="#">h1</a></li>
        </ul>
      </li>
      <li>
        <a href="javascript:;">js</a>
        <ul>
          <li><a href="#">string</a></li>
          <li><a href="#">array</a></li>
          <li><a href="#">object</a></li>
          <li><a href="#">number</a></li>
        </ul>
      </li>
      <li>
        <a href="javascript:;">css3</a>
        <ul>
          <li><a href="#">transition</a></li>
          <li><a href="#">animation</a></li>
        </ul>
      </li>
      <li>
        <a href="javascript:;">框架</a>
        <ul>
          <li><a href="#">vue</a></li>
          <li><a href="#">react</a></li>
        </ul>
      </li>
    </ul>
    <div class="clear"></div>
  </div>
  <div class="demo-hover demo-ul ul-transition t_c">
    <ul class="fllil">
      <li>
        <a href="javascript:;">html</a>
        <ul>
          <li><a href="#">div</a></li>
          <li><a href="#">h1</a></li>
        </ul>
      </li>
      <li>
        <a href="javascript:;">js</a>
        <ul>
          <li><a href="#">string</a></li>
          <li><a href="#">array</a></li>
          <li><a href="#">object</a></li>
          <li><a href="#">number</a></li>
        </ul>
      </li>
      <li>
        <a href="javascript:;">css3</a>
        <ul>
          <li><a href="#">transition</a></li>
          <li><a href="#">animation</a></li>
        </ul>
      </li>
      <li>
        <a href="javascript:;">框架</a>
        <ul>
          <li><a href="#">vue</a></li>
          <li><a href="#">react</a></li>
        </ul>
      </li>
    </ul>
    <div class="clear"></div>
  </div>
</template>
