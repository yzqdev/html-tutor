let user = {
  name: 'John',
  age: 30,
  _password: '***',
}

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith('_'))
  },
})

// "ownKeys" 过滤掉 _password
for (let key in user) console.log(key) // name，然后是 age

// 对这些方法同样有效：
console.log(Object.keys(user)) // name,age
console.log(Object.values(user)) // John,30
// 我们使用 ownKeys 钩子拦截 for..in 对 user 的遍历，还使用 Object.keys 和 Object.values 来跳过以下划线 _ 开头的属性：
