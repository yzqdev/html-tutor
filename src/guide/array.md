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

合并对象并不是一个罕见的问题，你很有可能已经遇到过这个问题，并且在不远的未来还会再次遇到。不同的是，在过去你手动完成了大部分工作，但从现在开始，你将使用 ES6 的新功能。

```ts
// 合并对象
const product = { name: 'Milk', packaging: 'Plastic', price: '5$' }
const manufacturer = { name: 'Company Name', address: 'The Company Address' }

const productManufacturer = { ...product, ...manufacturer };
console.log(productManufacturer); 
// 输出 { name: "Company Name", packaging: "Plastic", price: "5$", address: "The Company Address" }

// 将对象数组合并成一个对象
const cities = [
    { name: 'Paris', visited: 'no' },
    { name: 'Lyon', visited: 'no' },
    { name: 'Marseille', visited: 'yes' },
    { name: 'Rome', visited: 'yes' },
    { name: 'Milan', visited: 'no' },
    { name: 'Palermo', visited: 'yes' },
    { name: 'Genoa', visited: 'yes' },
    { name: 'Berlin', visited: 'no' },
    { name: 'Hamburg', visited: 'yes' },
    { name: 'New York', visited: 'yes' }
];

const result = cities.reduce((accumulator, item) => {
  return {
    ...accumulator,
    [item.name]: item.visited
  }
}, {});

console.log(result);
/* 输出
Berlin: "no"
Genoa: "yes"
Hamburg: "yes"
Lyon: "no"
Marseille: "yes"
Milan: "no"
New York: "yes"
Palermo: "yes"
Paris: "no"
Rome: "yes"
*/
```

数组映射

```ts
const cities = [
    { name: 'Paris', visited: 'no' },
    { name: 'Lyon', visited: 'no' },
    { name: 'Marseille', visited: 'yes' },
    { name: 'Rome', visited: 'yes' },
    { name: 'Milan', visited: 'no' },
    { name: 'Palermo', visited: 'yes' },
    { name: 'Genoa', visited: 'yes' },
    { name: 'Berlin', visited: 'no' },
    { name: 'Hamburg', visited: 'yes' },
    { name: 'New York', visited: 'yes' }
];

const cityNames = Array.from(cities, ({ name}) => name);
console.log(cityNames);
// 输出 ["Paris", "Lyon", "Marseille", "Rome", "Milan", "Palermo", "Genoa", "Berlin", "Hamburg", "New York"]
```

动态设置对象属性名

```ts
const dynamic = 'email';
let user = {
    name: 'John',
    [dynamic]: 'john@doe.com'
}
console.log(user); // 输出 { name: "John", email: "john@doe.com" }
```
