let str =// 长度为14的数组
  [4,5,56,56,78,23,4,5,6,90,56,34,]
let unique = (arr) =>  {
  if (!Array.isArray(arr)) return;
  return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
}
console.log(unique(str))
// 打印数组长度20：[false, "true", Infinity, true, 0, [],  [], {b: 2, a: 1}, {b: 2, a: 1}, {}, {}, "false", "0", null, undefined, {a: 1, b: 2}, {a: 1, b: 2}, NaN, function(){}, function(){}]
