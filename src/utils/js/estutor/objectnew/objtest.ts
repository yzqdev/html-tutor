{
  console.log(`________________________________________________`)
  const obj = {
    foo: true,
    abc: 123,
  }
  Object.entries(obj).forEach((k, v) => {
    console.log(k)
  })
}
{
  console.log(`________________________________________________`)
  const p = `foo`
  const obj = {
    [p]: 22,
    [`parm`]: `param`,
  }
  console.log(obj.parm)
}
{
  console.log(`________________________________________________`)
  const obj = {
    [`he` + `llo`]() {
      return 34
    },
  }
  console.log(obj.hello())
}
{
  console.log(`________________________________________________`)
  const keyA = { a: 1 }
  const keyB = { b: 2 }

  const myObject = {
    [keyA]: `valueA`,
    [keyB]: `valueB`,
  }
  console.log(myObject)
}

{
  console.log(`________________________________________________`)
  const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
  console.log(z)
}
