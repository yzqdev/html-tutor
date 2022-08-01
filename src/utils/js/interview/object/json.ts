let data = {
  rows: [
    ['Lisa', 16, 'Female', '2000-12-01'],
    ['Bob', 22, 'Male', '1996-01-21'],
  ],
  metaData: [
    {
      name: 'name',
      note: '',
    },
    {
      name: 'age',
      note: '',
    },
    {
      name: 'gender',
      note: '',
    },
    {
      name: 'birthday',
      note: '',
    },
  ],
}

let result = data.rows.reduce(function (prev1, cur1) {
  prev1.push(
    data.metaData.reduce(function (prev, cur, index) {
      prev[cur.name] = cur1[index]
      return prev
    }, {})
  )
  return prev1
}, [])

console.log(result)
console.log(result[0])
console.log(result[1])

export {}
