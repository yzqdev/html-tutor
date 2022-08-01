{
  console.log(`________________________________________________`)
  const obj = new Proxy(
    {},
    {
      get(target, key, receiver) {
        console.log(`getting ${key}!`)
        return Reflect.get(target, key, receiver)
      },
      set(target, key, value, receiver) {
        console.log(`setting ${key}!`)
        return Reflect.set(target, key, value, receiver)
      },
    }
  )
}

{
  console.log(`________________________________________________`)
  const handler = {
    get: (target, name) => (name in target ? target[name] : 29),
  }
  const p = new Proxy({}, handler)
  p.a = 1
  p.b = undefined
  console.log(`c` in p, p.c)
}
