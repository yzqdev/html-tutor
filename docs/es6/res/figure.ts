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

{
  console.log(`________________________________________________`)
  const name = `xx`
  const age = 9
  function tag(strArr, ...args) {
    let str = ``
    for (let i = 0; i < args.length; i++) {
      str += strArr[i] + args[i]
    }
    console.log(strArr, args)
    //[ '', '今年', '岁了' ]   [ 'xx', 9 ]
    //
    str += strArr[strArr.length - 1]
    console.log(str)
    return str
  }
  const str = tag`${name}今年${age}岁了`
  console.log(str)
}

{
  console.log(`________________________________________________`)
  function* gen() {
    const a = yield `xx`
    console.log(a) //A
    const b = yield 9
    console.log(b)
    return b
  }
  const it = gen()
  console.log(it.next(`a`)) // Value: 'xx', done: false }
  console.log(it.next(`b`)) //{ value: 9, done: false }
}

{
  console.log(`________________________________________________`)
  const obj = {
    name: `wangcai`,
    car: `BMW`,
    wife: `fatgirl`,
  }
  for (const item in obj) {
    console.log(`${item.padEnd(10, `-`)}value:${obj[item].padStart(10, `**`)}`)
  }
  //Name------value:***wangcai
  //Car-------value:*******BMW
  //Wife------value:***fatgirl
}
{
  console.log(`________________________________________________`)
  function foo() {
    setTimeout(() => {
      console.log(`args:`, arguments)
    }, 100)
  }

  foo(2, 4, 6, 8)
  // Args: [2, 4, 6, 8]
}
{
  console.log(`________________________________________________`)
  const obj = {
    name: `lang`,
    age: 22,
  }
  Object.defineProperty(`obj`, `name`, {
    configurable: false,
    writable: false,
    enumerable: false,
  })
  obj.name = `lll`
  console.log(obj.name)
}
