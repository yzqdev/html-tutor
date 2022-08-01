{
  /**
   *        sfsdfsdsdsd
   * @param arr
   * @param element
   * @code llll
   * @class Serach
   * @returns {number} -notihs
   */
  const search = (arr, element) => {
    for (let i = 0; i < arr.length; i++) {
      if (element === arr[i]) {
        return i
      }
    }
  }
  const remov = (arr, element) => {
    const index = search(arr, element)
    arr.splice(index, 1)
    return arr
  }
  console.log(remov([1, 2, 3], 3))
}
