const z = { w: `Super Hello` }
const y = { x: `hello`, __proto__: z }

console.log(Reflect.getOwnPropertyDescriptor(y, `x`))
console.log(Reflect.has(y, `w`))
console.log(Reflect.ownKeys(y, `w`))

console.log(Reflect.has(y, `x`))
console.log(Reflect.deleteProperty(y, `x`))
console.log(Reflect.has(y, `x`))
