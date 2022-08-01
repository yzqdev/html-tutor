{
  console.log(`________________________________________________`)

  const a1 = Array.of(1, 2, 3)
  const a2 = Array(6).fill(12)
  console.log(a1, a2)
}
{
  console.log(`________________________________________________`)
  const m = [1, 2, 3, 4].reduce(
    (accumulator, currentValue, currentIndex, array) =>
      accumulator * currentValue,
    1
  )
  console.log(m)
}
{
  console.log(`________________________________________________`)
  const a = [1, 2, 3]
  const it = a[Symbol.iterator]()
  console.log(it.next().done)
  console.log(it.next().value) //1
  console.log(it.next().value) //2
  console.log(it.next().value)
  const findResult = a.includes(1, 0)
  console.log(findResult, a.join(`*`))
  const b = Array.from(a, (x) => x % 2 === 0)
  console.log(b)
}
{
  console.log(`________________________________________________`)
  const list = [`a`, `b`, `c`]
  list.forEach((item, index) => {
    console.log(item) //Value
    console.log(index) //Index
  })
  //Index is optional
  list.forEach((item) => console.log(item))
}
{
  console.log(`________________________________________________`)
  const object = {
    name: `xiaoming`,
    age: 34,
    sex: `man`,
  }
  for (const property in object) {
    console.log(property) //Property name
    console.log(object[property]) //Property value
  }
}

{
  console.log(`________________________________________________`)
  const age = [16, 14, 18]

  const m = age.some((person) => person >= 18)
  console.log(m)
}
export {}
