{
  // eslint-disable-next-line no-console
  console.log(`________________________________________________`)
  const arr = [1, 3, 4]
  const iter = arr[Symbol.iterator]()
  for (let i = 0; i < arr.length; i++) {
    console.log(iter.next().value)
  }
}
{
  console.log(`________________________________________________`)
  let a = 1
  let b = 2
  ;[a, b] = [b, a]
  console.log(a, b)
}
{
  console.log(`________________________________________________`)
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  }
  const obj2 = {
    ...obj,
    d: 4,
  }
  console.log(obj2)
}
{
  console.log(`________________________________________________`)
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`settime`)
      resolve(`soleved`)
    }, 2000)
  })
  promise.then((res) => {
    console.log(res)
  })
}
