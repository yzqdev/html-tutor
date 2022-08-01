const _ = require(`lodash`)
const fs = require(`fs-extra`)
function read(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, `utf8`, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    }).then((r) => {
      console.log(r)
    })
  })
}
read(`iterators.js`)
  .then((data) => {
    console.log(data)
  })

  .catch((reason) => {
    console.log(reason)
  })
