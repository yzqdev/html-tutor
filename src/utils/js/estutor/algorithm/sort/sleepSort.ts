const list = [3, 4, 5, 8, 9, 7, 1, 3, 4, 3, 6]
const newList = []
list.forEach((item) => {
  setTimeout(function () {
    newList.push(item)
  }, item * 100)
})
console.log(list.sort())
