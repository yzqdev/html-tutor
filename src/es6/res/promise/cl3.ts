let p1 = new Promise(function (resolve, reject) {
  foo.bar()
  resolve(1)
})

p1.then(
  function (value) {
    console.log('p1 then value: ' + value)
  },
  function (err) {
    console.log('p1 then err: ' + err)
  },
).then(
  function (value) {
    console.log('p1 then then value: ' + value)
  },
  function (err) {
    console.log('p1 then then err: ' + err)
  },
)

let p2 = new Promise(function (resolve, reject) {
  resolve(2)
})

p2.then(
  function (value) {
    console.log('p2 then value: ' + value)
    foo.bar()
  },
  function (err) {
    console.log('p2 then err: ' + err)
  },
)
  .then(
    function (value) {
      console.log('p2 then then value: ' + value)
    },
    function (err) {
      console.log('p2 then then err: ' + err)
      return 1
    },
  )
  .then(
    function (value) {
      console.log('p2 then then then value: ' + value)
    },
    function (err) {
      console.log('p2 then then then err: ' + err)
    },
  )
// Promise中的异常由then参数中第二个回调函数（Promise执行失败的回调）处理，异常信息将作为Promise的值。异常一旦得到处理，then返回的后续Promise对象将恢复正常，并会被Promise执行成功的回调函数处理。另外，需要注意p1、p2 多级then的回调函数是交替执行的 ，这正是由Promise then回调的异步性决定的。
