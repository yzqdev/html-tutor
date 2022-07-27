let str =// 长度为14的数组
  [4,5,56,56,78,23,4,5,6,90,56,34,]

let res=[]
str.forEach((item ,index ) => {
  if (!res.includes(item)) {
    res.push(item)
  }
})
console.log(res)
