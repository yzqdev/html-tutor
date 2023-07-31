# promise

<<< ./res/promise/cl1.ts
<<< ./res/promise/cl2.ts
<<< ./res/promise/cl3.ts
<<< ./res/promise/cl4.ts
<<< ./res/promise/cl5.ts
<<< ./res/promise/promise2.ts

## async

```js
/*
 * @Author: your name
 * @Date: 2020-04-08 15:45:38
 * @LastEditTime: 2020-04-08 15:46:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \jstutor\asyne.js
 */
/* 选自 小美娜娜 文章 */
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(() => {
  console.log("settimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");
```
