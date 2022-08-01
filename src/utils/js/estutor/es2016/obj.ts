const _ = require(`lodash`)

_.defaults({ a: 1 }, { a: 3, b: 2 })
console.log(_.now())
const saves = [`profile`, `settings`]

const done = _.after(saves.length, () => {
  console.log(`done saving!`)
})

_.forEach(saves, (type) => {
  asyncSave({ type: type, complete: done })
})
