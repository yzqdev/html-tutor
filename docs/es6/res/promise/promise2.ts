const fetch = require(`node-fetch`)
const { URLSearchParams } = require(`url`)

const params = new URLSearchParams()
params.append(`a`, 1)

fetch(`https://httpbin.org/post`, { method: `POST`, body: params })
  .then((res) => res.json())
  .then((json) => console.log(json))
