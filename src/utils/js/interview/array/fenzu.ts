/**
 * 蚂蚁的笔试题

 给定整数 n 和 m，写一个函数 dispatch ，把 1-n 尽量平均地分成m个组
 如

 let n = 2, m = 2;

 dispatch(n, m) 得到[[1], [2]];
 我自己实现的太烂了，所以想看看大家有没有什么好的实现方式

 * @param {number} n
 * @param {*} m
 */
function dispatch(n, m) {
  let base = Math.floor(n / m)
  let extra = n - m * base

  return [...Array(m)].map((v, i) => {
    let hasExtra = i < extra
    let jMax = base + (hasExtra ? 1 : 0)
    let baseNum = i * base + 1 + (hasExtra ? i : extra)

    return [...Array(jMax)].map((v, j) => j + baseNum)
  })
}
console.log(dispatch(7, 4))

/**
 * @param {number} n
 * @param {number} m
 */
function dispatch2(n, m) {
  let i,
    j,
    arrays = []

  for (i = 0; i < m; i++) arrays.push([])

  for (i = 1, j = 0; i <= n; i++, j = (j + 1) % m) arrays[j].push(i)

  return arrays
}
