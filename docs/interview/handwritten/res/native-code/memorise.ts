// 第一版 (来自《JavaScript权威指南》)
function memoize(f) {
  let cache = {}
  return function () {
    let key = arguments.length + Array.prototype.join.call(arguments, ',')
    if (key in cache) {
      return cache[key]
    } else return (cache[key] = f.apply(this, arguments))
  }
} // 第一版 (来自《JavaScript权威指南》)
function memoize(f) {
  let cache = {}
  return function () {
    let key = arguments.length + Array.prototype.join.call(arguments, ',')
    if (key in cache) {
      return cache[key]
    } else return (cache[key] = f.apply(this, arguments))
  }
}
export {}
