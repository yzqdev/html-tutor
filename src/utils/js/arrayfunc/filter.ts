function push(array, ...values) {
  const { length: arrayLength } = array
  const { length: valuesLength } = values

  for (let index = 0; index < valuesLength; index += 1) {
    array[arrayLength + index] = values[index]
  }

  return array.length
}
// --------------------------------------------------
function filter(array, callback) {
  const result = []

  const { length } = array

  for (let index = 0; index < length; index += 1) {
    const value = array[index]

    if (callback(value, index, array)) {
      push(result, value)
    }
  }

  return result
}
console.log(
  filter([2, 3, 4, 5], (data) => {
    data > 3
  })
)
export {}
