const text = parseInt(readline())
const num = text.replace(/[^0-9]/gi, ``)
const alphabet = text.replace(/[^a-z]+/gi, ``)
const newstrnum = Number(text.replace(alphabet, ``))
switch (alphabet) {
  case `bps`:
    console.log(newstrnum)
    break
  case `Kbps`:
    console.log(newstrnum * 1000)
    break
  case `Mbps`:
    console.log(newstrnum * 1000000)
    break
  case `Gbps`:
    console.log(newstrnum * 1000000000)
    break
  case `Tbps`:
    console.log(newstrnum * 1000000000000)
    break
  default:
    console.log(`eee`)
}
export {}
