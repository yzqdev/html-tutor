<template>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
</div></template>

<style lang="scss" scoped>
      #content {
          display: flex;
          width: 500px;
      }

      #content div {
          flex-basis: 120px;
          border: 3px solid rgba(0,0,0,.2);
      }

      .box {
          flex-shrink: 1;
      }

      .box1 {
          flex-shrink: 2;
      }</style>