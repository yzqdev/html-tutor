deepClone = source => {
  const targetObj = Array.isArray(source)? [] : {}; // 判断复制的目标是数组还是对象
  for (let keys in source) { // 遍历目标
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') { // 如果值是对象，就递归一下
        targetObj[keys] = Array.isArray(source[keys]) ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      } else { // 如果不是，就直接赋值
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
}

let str1 = {
  arr: [1, 2, 3],
  obj: {
    key: 'value'
  },
  fn: function () {
    return 1;
  }
};
let str3 = deepClone(str1);

str1.name='adsfsf'
console.log(str3)
