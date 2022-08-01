const array = [1, 2, 1, 1, `1`]

function unique(array) {
  return array.filter((item, index, array) => array.indexOf(item) === index)
}

console.log(unique(array))
export { unique }
