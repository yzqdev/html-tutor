let str = '携程C2t0r1i8p2020校招'
function handleStr(str) {
  let nums = str.match(/\d/g).join('')
  let words = str.match(/[a-zA-Z]/g).join('')

  return uniqueStr(nums) + words
}

function uniqueStr(str) {
  let arr = str.split('')

  return arr
    .filter(function (element, index) {
      return arr.indexOf(element) === index
    })
    .join('')
}

// 测试
console.log(handleStr('携程C2t0r1i8p2020校招'))
// 2018Ctrip
export {}
