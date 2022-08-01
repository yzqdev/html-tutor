// 使用Object.defineProperty()
// 接收的第一个参数为对象，第二个参数为属性名，第三个参数为配置对象
let obj = {}
Object.defineProperty(obj, `name`, {
  enumerable: true, // 是否可枚举，默认值 false
  // 如果为false的话，打印这个obj对象，是看不到name这个属性
  writable: true, // 是否可写，默认值 false
  // 如果为false的话，给name赋值，不会生效
  configurable: true, // 是否可配置（是否可删除），默认值 false
  // 如果为true，delete obj.name，再打印obj，则显示{}
  // 如果为false，delete obj.name，再打印obj,则显示{name:undefined}
  value: `swr`, // name对应的值
})
console.log(obj)

// 上面的写法其实和下面的写法是一样的
