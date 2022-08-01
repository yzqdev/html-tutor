function groupList(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return []
  }

  let validItems = getValidItems(list)
  let result = {}

  validItems.forEach(function (item) {
    if (result.hasOwnProperty(item.type)) {
      result[item.type].push(item.content)
    } else {
      result[item.type] = []
      result[item.type].push(item.content)
    }
  })
  console.log(result)
  return adjustFormat(result)
}

function getValidItems(json) {
  return json.filter(function (element) {
    return isPureObject(element) && element.type && element.content
  })
}

function isPureObject(item) {
  return Object.prototype.toString.call(item).slice(8, -1) === 'Object'
}

function adjustFormat(obj) {
  return Object.keys(obj).map(function (type) {
    return { type: type, contents: obj[type] }
  })
}

// test
let input = [
  null,
  2,
  'test',
  undefined,
  {
    type: 'product',
    content: 'product1',
  },
  {
    type: 'product',
    content: 'product2',
  },
  {
    type: 'tag',
    content: 'tag1',
  },
  {
    type: 'product',
    content: 'product3',
  },
  {
    type: 'tag',
    content: 'tag2',
  },
]

console.log(JSON.stringify(groupList(input)))
// [{"type":"product","contents":["product1","product2","product3"]},{"type":"tag","contents":["tag1","tag2"]}]
