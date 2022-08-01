let arr = [3, 4, 55, 4, 1, 3, 55, 777, 645]
function unique() {
  return arr.filter((element, index) => {
    return arr.indexOf(element) === index
  })
}
console.log(unique())
