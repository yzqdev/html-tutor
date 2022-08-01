# js数组

## filter
```js
function push(array, ...values) {
  const { length: arrayLength } = array;
  const { length: valuesLength } = values;

  for (let index = 0; index < valuesLength; index += 1) {
    array[arrayLength + index] = values[index];
  }

  return array.length;
}
// --------------------------------------------------
function filter(array, callback) {
  const result = [];

  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (callback(value, index, array)) {
      push(result, value);
    }
  }

  return result;
}
console.log(
  filter([2, 3, 4, 5], (data) => {
    data > 3;
  })
);

```
## map
```js
Array.prototype.myMap = function (fn, context) {
  const array = this;
  // 严格模式下
  const resultArr = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    let result = fn.call(context, item, i, array);
    console.log(result);
    resultArr.push(result);
  }
  return resultArr;
};
Array.prototype.myFilter = function (fn, context) {
  if (typeof fn !== "function") {
    throw new TypeError(`${fn} is not a function`);
  }

  let arr = this;
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    let result = fn.call(context, arr[i], i, arr);
    if (result) {
      temp.push(arr[i]);
    }
  }
  return temp;
};

Array.prototype.myReduce = function (fn, initialValue) {
  let arr = Array.prototype.slice.call(this);
  let res, startIndex;
  res = initialValue ? initialValue : arr[0];
  startIndex = initialValue ? 0 : 1;
  for (let i = startIndex; i < arr.length; i++) {
    res = fn.call(null, res, arr[i], i, this);
  }
  return res;
};

let arr = ["x", "y", "z"];

console.log(
  arr.myMap(function (item, index) {
    return item + `${index}`;
  })
);

```
