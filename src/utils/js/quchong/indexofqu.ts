let str =// 长度为14的数组
  [4,5,56,56,78,23,4,5,6,90,56,34,]
let result=[]
str.forEach((item,index ) => {
  if (str.indexOf(item)===index ) {
   result.push(item)
  }
})
console.log(result)
