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
