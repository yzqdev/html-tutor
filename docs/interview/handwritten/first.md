# 手写代码1

## 实现一个instanceof和new

```js
function create() {
  const obj = {};
  const constructort = [].shift().call(arguments);
  obj.__proto__ = constructort.prototype;
  const result = constructort.apply(obj, arguments);
  return typeof result === `object` ? result : obj;
}
function myInstanceOf(left: string, right: string) {
  let lproto = Object.getPrototypeOf(left)
  while (true) {
    if (lproto == null) {
      return false
    }
    if (lproto === right.prototype) {
      return true
    }
    lproto = Object.getPrototypeOf(lproto)
  }
}

console.log(myInstanceOf([1, 2], Array)) // true


```
