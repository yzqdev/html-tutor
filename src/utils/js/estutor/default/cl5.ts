let str = 'abcabcabcbbccccc'
let num = 0
let char = ''
let arr = ['a', 'a', 'b', 'b', 'c', 'c', 'c']
// 使其按照一定的次序排列
let compress = function (chars) {
  chars = chars.join('')
  let temp = []

  let re = /(\w)\1+/g
  chars.replace(re, ($0, $1) => {
    temp.push($1)
    temp.push(String($0.length))
    return temp
  })
  console.log(chars)
  return chars.length
}
console.log(compress(arr))
export {}
