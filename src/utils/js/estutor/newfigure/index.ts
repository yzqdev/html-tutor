{
  console.log(`________________________________________________`)
  let name = `xx`
  let age = 9
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
  let str = tag`${name}今年${age}岁了`
  console.log(str)
}

{
  console.log(`________________________________________________`)
  function* gen() {
    let a = yield `xx`
    console.log(a) //a
    let b = yield 9
    console.log(b)
    return b
  }
  let it = gen()
  console.log(it.next(`a`)) // value: 'xx', done: false }
  console.log(it.next(`b`)) //{ value: 9, done: false }
}

{
  console.log(`________________________________________________`)
  let obj = {
    name: `wangcai`,
    car: `BMW`,
    wife: `fatgirl`,
  }
  for (let item in obj) {
    console.log(item.padEnd(10, `-`) + `value:` + obj[item].padStart(10, `**`))
  }
  //name------value:***wangcai
  //car-------value:*******BMW
  //wife------value:***fatgirl
}
{
  console.log(`________________________________________________`)
  function foo() {
    setTimeout(() => {
      console.log(`args:`, arguments)
    }, 100)
  }

  foo(2, 4, 6, 8)
  // args: [2, 4, 6, 8]
}
{
  console.log(`________________________________________________`)
  let obj = {
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
