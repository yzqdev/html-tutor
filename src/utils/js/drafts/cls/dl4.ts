let arr = [
  1,
  2,
  3,
  4,
  [1, 2, 3, [1, 2, 3, [1, 2, 3]]],
  5,
  'string',
  { name: '弹铁蛋同学' },
]
function flat(arr) {
  return arr.reduce((acc, cur, index) => {
    return acc.concat(Array.isArray(cur) ? flat(cur) : cur)
  }, [])
}
console.log(flat(arr))
