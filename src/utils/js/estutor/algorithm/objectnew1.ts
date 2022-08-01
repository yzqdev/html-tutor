{
  console.log(`________________________________________________`)
  // 浅复制
  let num = [1, 2, 3, 4, 5]
  let newNum = num
  num[0] = 10
  console.log(newNum[0]) // 10
  //深复制
  function copy(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      arr2[i] = arr1[i]
    }
  }
  copy(num, newNum)
  num[0] = 10
  console.log(newNum[0])
}
{
  console.log(`________________________________________________`)
  let arr = [`Mike`, `John`, `Hexo`]
  console.log(arr.join()) // Mike,John,Hexo
  console.log(arr.toString()) // Mike,John,Hexo

  let arr1 = [1, 10, `Mike`]
  let arr2 = [8, 7, 6]
  let cat = arr1.concat(arr2)
  console.log(cat) // [1, 10, "Mike", 8, 7, 6]
  let num = [1, 2, 3, 4, 5, 6, 7]
  let a = num.splice(3, 2) // 3 表示索引，2 表示删除 2 个
  console.log(num) // [1, 2, 3, 6, 7]
}
{
  console.log(`________________________________________________`)
  function compare(num1, num2) {
    return num1 - num2
  }
  let nums = [3, 1, 2, 100, 4, 200]
  nums.sort(compare)
  console.log(nums) // 1, 2, 3, 4, 100, 200
}
{
  console.log(`________________________________________________`)
  // 用 forEach 开方
  function square(num) {
    console.log(num, num * num)
  }
  let num = [1, 2, 3, 4, 5]
  num.forEach(square)
  console.log(num)
}
{
  console.log(`________________________________________________`)
  /*
every() 返回值为布尔类型，对于应用的所有元素，该函数返回 true，则该方法返回 true
*/
  function isEven1(num) {
    return num % 2 === 0
  }
  let num = [2, 4, 6, 8, 10]
  let even = num.every(isEven1)
  if (even) {
    console.log(`所有的数字都是偶数`)
  } else {
    console.log(`不是所有的数字都是偶数`)
  }
}
{
  console.log(`________________________________________________`)
  /*
some() 与 every() 的不同就是只要有一个元素使改函数返回 true ，那么该方法就返回 true
*/
  function isEven2(num) {
    return num % 2 == 0
  }
  let num = [1, 2, 3, 4, 5, 6, 7, 8]
  let someEven = num.some(isEven2)
  if (someEven) {
    console.log(`有些数字是偶数`)
  } else {
    console.log(`没有数字是偶数`)
  }
}
{
  console.log(`________________________________________________`)
  /*
reduce() 有两个功能，一是可以对数组元素进行求和，二是将数组元素连接成字符串。
*/
  function add(num1, num2) {
    return num1 + num2
  }
  let num = [1, 2, 3, 4]
  let sum = num.reduce(add)
  console.log(sum) // 10

  function concat(str, i) {
    return str + i
  }
  let words = [`I am `, `a `, `coder `]
  let re = words.reduce(concat)
  console.log(re) // I am a coder
}
{
  console.log(`________________________________________________`)
  function passing(num) {
    return num >= 60
  }
  let grades = []
  for (let i = 0; i < 11; i++) {
    grades[i] = Math.floor(Math.random() * 101)
  }
  let pass = grades.filter(passing)
  console.log(`随机产生的 10 个同学的分数为：`)
  console.log(grades)
  console.log(`及格的分数有：`)
  console.log(pass)
}
{
  console.log(`________________________________________________`)
  let grades = [
    [88, 86, 82],
    [91, 82, 83],
    [77, 72, 79],
    [86, 80, 82],
  ]
  let total = 0
  let average = 0.0
  for (let row = 0; row < grades.length; ++row) {
    for (let col = 0; col < grades[row].length; ++col) {
      total += grades[row][col]
    }
    average = total / grades[row].length
    console.log(
      `student ` + parseInt(row + 1) + ` average: ` + average.toFixed(2)
    ) // toFixed 表示按照 2 位来保留小数
    total = 0
    average = 0.0
  }
}
{
  console.log(`________________________________________________`)
  function Point(x, y) {
    this.x = x
    this.y = y
  }
  function show(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].x + `, ` + arr[i].y)
    }
  }
  let p1 = new Point(1, 2)
  let p2 = new Point(2, 4)
  let p3 = new Point(8, 1)
  let p4 = new Point(2, 9)
  let point = [p1, p2, p3, p4]
  console.log(point.length)
  for (let i = 0; i < point.length; i++) {
    console.log(`Point ${parseInt(i + 1)}:  ${point[i].x}, ${point[i].y}`)
  }
  show(point)
}
