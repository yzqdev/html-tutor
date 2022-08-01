/*
 * @Author: frozen521
 * @Date:   2019-03-15 21:44:31
 * @Last Modified by:   frozen521
 * @Last Modified time: 2019-03-15 21:45:56
 */
const capitalize = ([first, ...rest]: [string, string[]], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join(``).toLowerCase() : rest.join(``))

console.log(capitalize(`goob`))

const m = `letitgo`

function say([f, ...r]) {
  console.log(`f is${f}`)
  console.log(r)
}
console.log(say(m))
export { capitalize, say }
