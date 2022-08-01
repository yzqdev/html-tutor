/**
 * 1. 确保数组值
 * @type {any[]}
 */
const array = Array(5).fill(``)
console.log(array)
/*2. 获取数组唯一值*/
const cars = [`Mazda`, `Ford`, `Renault`, `Opel`, `Mazda`]
const uniqueWithArrayFrom = Array.from(new Set(cars))
console.log(uniqueWithArrayFrom)

const uniqueWithSpreadOperator = [...new Set(cars)]
console.log(uniqueWithSpreadOperator)

// Merging objects
const product = { name: `Milk`, packaging: `Plastic`, price: `5$` }
const manufacturer = { name: `Company Name`, address: `The Company Address` }
/*3.使用展开运算符合并对象和对象数组*/
const productManufacturer = { ...product, ...manufacturer }
console.log(productManufacturer)

// Merging an array of objects into one
const cities = [
  { name: `Paris`, visited: `no` },
  { name: `Lyon`, visited: `no` },
  { name: `Marseille`, visited: `yes` },
  { name: `Rome`, visited: `yes` },
  { name: `Milan`, visited: `no` },
  { name: `Palermo`, visited: `yes` },
  { name: `Genoa`, visited: `yes` },
  { name: `Berlin`, visited: `no` },
  { name: `Hamburg`, visited: `yes` },
  { name: `New York`, visited: `yes` },
]

const result = cities.reduce(
  (accumulator, item) => ({
    ...accumulator,
    [item.name]: item.visited,
  }),
  {}
)

console.log(result)
/*数组map的方法*/
const cityNames = Array.from(cities, ({ name }) => name)
console.log(cityNames)
//有条件的对象属性
const getUser = (emailIncluded) => ({
  name: `John`,
  surname: `Doe`,
  ...(emailIncluded && { email: 'john@doe.com' }),
})

const user = getUser(true)
console.log(user) // Outputs { name: "John", surname: "Doe", email: "john@doe.com" }

const userWithoutEmail = getUser(false)
console.log(userWithoutEmail) // Outputs { name: "John", surname: "Doe" }
//结构原始数据
const rawUser = {
  name: `John`,
  surname: `Doe`,
  email: `john@doe.com`,
  displayName: `SuperCoolJohn`,
  joined: `2016-05-05`,
  image: `path-to-the-image`,
  followers: 45,
}
const user3 = {}
let userDetails = {}
;({ name: user.name, surname: user.surname, ...userDetails } = rawUser)
console.log(user3)
console.log(userDetails)
//动态属性名
const dynamic = `email`
const user4 = {
  name: `John`,
  [dynamic]: `john@doe.com`,
}
console.log(user4)
//字符串差值
const user5 = {
  name: `John`,
  surname: `Doe`,
  details: {
    email: `john@doe.com`,
    displayName: `SuperCoolJohn`,
    joined: `2016-05-05`,
    image: `path-to-the-image`,
    followers: 45,
  },
}

const printUserInfo = (user) => {
  const text = `The user is ${user.name} ${user.surname}. Email: ${user.details.email}. Display Name: ${user.details.displayName}. ${user.name} has ${user.details.followers} followers.`
  console.log(text)
}

printUserInfo(user5)
