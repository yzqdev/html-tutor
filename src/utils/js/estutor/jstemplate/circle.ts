const data = [1, 2, 3]
const p = new Proxy(data, {
  get(target, key, receiver) {
    console.log(`get value:`, key)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    console.log(`set value:`, key, value)
    return Reflect.set(target, key, value, receiver)
  },
})

p.push(1)

// Get value: push
// Get value: length
// Set value: 3 1
// Set value: length 4
