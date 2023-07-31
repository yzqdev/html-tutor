let meta = [
  0,
  '0',
  true,
  false,
  'true',
  'false',
  null,
  undefined,
  Infinity,
  {},
  [],
  function () {},
  { a: 1, b: 2 },
  { b: 2, a: 1 },
]
let meta2 = [
  NaN,
  NaN,
  Infinity,
  {},
  [],
  function () {},
  { a: 1, b: 2 },
  { b: 2, a: 1 },
]
let sourceArr = [
  ...meta,
  ...Array(1000000)
    .fill({})
    .map(() => meta[Math.floor(Math.random() * meta.length)]),
  ...meta2,
]

let alldata = { meta, meta2, sourceArr }
module.exports = {
  meta,
  meta2,
  sourceArr,
  alldata,
}
