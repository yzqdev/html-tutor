// 一个简单的深拷贝函数，去掉了一些胶水部分
// 用户态输入一定是一个 Plain Object，并且所有 value 也是 Plain Object
function deepClone(obj) {
  const keys = Object.keys(obj);
  return keys.reduce((memo, current) => {
    const value = obj[current];
    if (typeof value === "object") {
      return {
        ...memo,
        [current]: deepClone(value)
      };
    }
    return {
      ...memo,
      [current]: value
    };
  }, {});
}
let a = {
  val: 1,
  desc: {
    text: "a"
  }
};

let b = deepClone(a);

b.val = 2;
console.log(a.val); // 1
console.log(b.val); // 2

b.desc.text = "b";
console.log(a.desc.text); // 'a'
console.log(b.desc.text); // 'b'
