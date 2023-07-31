# proxy和reflect

<<< ./res/proxys/apply.ts
<<< ./res/proxys/cl1.ts
<<< ./res/proxys/cl2.ts
<<< ./res/proxys/cl3.ts
<<< ./res/proxys/cl4.ts
<<< ./res/proxys/cl5.ts
<<< ./res/proxys/cl6.ts
<<< ./res/proxys/has.ts
<<< ./res/proxys/objg1.ts
<<< ./res/proxys/reflectshow.ts

## reflect

```js
const z = { w: `Super Hello` }
const y = { x: `hello`, __proto__: z }

console.log(Reflect.getOwnPropertyDescriptor(y, `x`))
console.log(Reflect.has(y, `w`))
console.log(Reflect.ownKeys(y, `w`))

console.log(Reflect.has(y, `x`))
console.log(Reflect.deleteProperty(y, `x`))
console.log(Reflect.has(y, `x`))
```

```js
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
```

## get和set

```js
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
```

## proxy构造函数

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  say() {
    console.log(`my name is ${this.name}, and my age is ${this.age}`)
  }
}
const proxyTrack = (targetClass) => {
  const prototype = targetClass.prototype
  Object.getOwnPropertyNames(prototype).forEach((name) => {
    targetClass.prototype[name] = new Proxy(prototype[name], {
      apply(target, context, args) {
        console.time()
        target.apply(context, args)
        console.timeEnd()
      },
    })
  })

  return new Proxy(targetClass, {
    construct(target, args) {
      const obj = new target(...args)
      return new Proxy(obj, {
        get(target, prop) {
          console.log(`${target.name}.${prop} is being getting`)
          return target[prop]
        },
      })
    },
  })
}

const MyClass = proxyTrack(Person)
const myClass = new MyClass('tom', 21)
myClass.say()
myClass.name
export {}
```

## proxy校验

```js
// 验证规则
const validators = {
  name: {
    validate(value) {
      return value.length > 6
    },
    message: '用户名长度不能小于六',
  },
  password: {
    validate(value) {
      return value.length > 10
    },
    message: '密码长度不能小于十',
  },
  moblie: {
    validate(value) {
      return /^1(3|5|7|8|9)[0-9]{9}$/.test(value)
    },
    message: '手机号格式错误',
  },
}
// 验证方法
function validator(obj, validators) {
  return new Proxy(obj, {
    set(target, key, value) {
      const validator = validators[key]
      if (!validator) {
        target[key] = value
      } else if (validator.validate(value)) {
        target[key] = value
      } else {
        alert(validator.message || '')
      }
    },
  })
}
let form = {}
form = validator(form, validators)
form.name = '666' // 用户名长度不能小于六
form.password = '113123123123123'
```

## array push

```js
const handle = (params) => {
  if (Array.isArray(params)) {
    return params.reduce((accumulator, currentValue) => {
      typeof currentValue === 'object'
        ? accumulator.push(handle(currentValue))
        : accumulator.push(currentValue)
      return accumulator
    }, [])
  } else {
    return Reflect.ownKeys(params).reduce((accumulator, currentValue) => {
      typeof params[currentValue] === 'object'
        ? (accumulator[currentValue] = handle(params[currentValue]))
        : (accumulator[currentValue] = params[currentValue])
      return accumulator
    }, {})
  }
}

let a = [
  {
    age: '23',
    name: 334,
  },
  { time: 'ee', date: new Date() },
]
b = handle(a)
b.push({ naa: 'erer' })
console.log(b)
console.log(a)
export {}
```

```js
function extend(sup, base) {
  let descriptor = Object.getOwnPropertyDescriptor(
    base.prototype,
    'constructor'
  )
  base.prototype = Object.create(sup.prototype)
  const handler = {
    construct(target, args) {
      let obj = Object.create(base.prototype)
      this.apply(target, obj, args)
      return obj
    },
    apply(target, that, args) {
      sup.apply(that, args)
      base.apply(that, args)
    },
  }
  let proxy = new Proxy(base, handler)
  descriptor.value = proxy
  Object.defineProperty(base.prototype, 'constructor', descriptor)
  return proxy
}

let Person = function (name) {
  this.name = name
}

let Boy = extend(Person, function (name, age) {
  this.age = age
})

Boy.prototype.sex = 'M'

let Peter = new Boy('Peter', 13)
console.log(Peter.sex) // "M"
console.log(Peter.name) // "Peter"
console.log(Peter.age) // 13
```
