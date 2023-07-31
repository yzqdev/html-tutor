// 例子 5-2
// 根据颜色找出对应的水果

// Bad
function test1(color) {
  switch (color) {
    case `red`:
      return [`apple`, `strawberry`]
    case `yellow`:
      return [`banana`, `pineapple`]
    case `purple`:
      return [`grape`, `plum`]
    default:
      return []
  }
}

test1(`yellow`) // ['banana', 'pineapple']
// Good
const fruitColor1 = {
  red: [`apple`, `strawberry`],
  yellow: [`banana`, `pineapple`],
  purple: [`grape`, `plum`],
}

function test2(color) {
  return fruitColor1[color] || []
}
// Better
const fruitColor2 = new Map()
  .set(`red`, [`apple`, `strawberry`])
  .set(`yellow`, [`banana`, `pineapple`])
  .set(`purple`, [`grape`, `plum`])

function test3(color) {
  return fruitColor2.get(color) || []
}
export {}
