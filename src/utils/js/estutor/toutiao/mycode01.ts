function squre(arr) {
  let newar = arr.map((x) => x ** 2)
  console.log(newar)
  return arr.map((x) => x ** 2)
}

console.log(squre([1, 2, 3]))
