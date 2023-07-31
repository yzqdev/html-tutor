const clone = (parent) => {
  // 判断类型
  const isType = (target, type) =>
    `[object ${type}]` === Object.prototype.toString.call(target)

  // 处理正则
  const getRegExp = (re) => {
    let flags = ''
    if (re.global) flags += 'g'
    if (re.ignoreCase) flags += 'i'
    if (re.multiline) flags += 'm'
    return flags
  }

  const _clone = (parent) => {
    if (parent === null) return null
    if (typeof parent !== 'object') return parent

    let child, proto

    if (isType(parent, 'Array')) {
      // 对数组做特殊处理
      child = []
    } else if (isType(parent, 'RegExp')) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent))
      if (parent.lastIndex) child.lastIndex = parent.lastIndex
    } else if (isType(parent, 'Date')) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime())
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent)
      // 利用Object.create切断原型链
      child = Object.create(proto)
    }
    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i])
    }
    return child
  }
  return _clone(parent)
}
