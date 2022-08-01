//写一个函数，列出一个整数所有的分解类型，比如对于数字4，可以做拆分得到下列字符串
function f(...args: string[]) {
  let before = args.slice(0, args.length - 1)
  let n = args[args.length - 1]
  for (let i = 1; i < n; i++) {
    f(...before, i, n - i)
  }
  console.log(args)
}
f(9)
