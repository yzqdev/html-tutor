const checkType = (obj) => Object.prototype.toString.call(obj).slice(8, -1)

const deepClone = (obj) => {}
console.log(checkType(null))

function objFact() {
  const obj = new Object()
  const con = [].shift.call(arguments)
  obj.__proto__ = con.prototype
  const result = con.apply(obj, arguments)
  return typeof result === `object` ? result : obj
}
const template = `我是{{name}}，年龄{{age}}，性别{{sex}}`
const data = {
  name: `姓名`,
  age: 18,
}
console.log(render(template, data)) // 我是姓名，年龄18，性别undefined

function render(template, data) {
  const reg = /{{(\w+)}}/ // 模板字符串正则
  if (reg.test(template)) {
    // 判断模板里是否有模板字符串
    const name = reg.exec(template)[1] // 查找当前模板里第一个模板字符串的字段
    template = template.replace(reg, data[name]) // 将第一个模板字符串渲染
    return render(template, data) // 递归的渲染并返回渲染后的结构
  }
  return template // 如果模板没有模板字符串直接返回
}
function isPhone(tel) {
  const regx = /^1[34578]\d{9}$/
  return regx.test(tel)
}

console.log(isPhone(`29394992`))

function parseParam(url) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1] // 将 ? 后面的字符串取出来
  const paramsArr = paramsStr.split(`&`) // 将字符串以 & 分割后存到数组中
  const paramsObj = {}
  // 将 params 存到对象中
  paramsArr.forEach((param) => {
    if (/=/.test(param)) {
      // 处理有 value 的参数
      let [key, val] = param.split(`=`) // 分割 key 和 value
      val = decodeURIComponent(val) // 解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val // 判断是否转为数字

      if (paramsObj.hasOwnProperty(key)) {
        // 如果对象有 key，则添加一个值
        paramsObj[key] = [].concat(paramsObj[key], val)
      } else {
        // 如果对象没有这个 key，创建 key 并设置值
        paramsObj[key] = val
      }
    } else {
      // 处理没有 value 的参数
      paramsObj[param] = true
    }
  })

  return paramsObj
}

const url = `http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled`
console.log(parseParam(url))
parseParam(url)
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/
const f = (s) => s.replace(/-\w/g, (x) => x.slice(1).toUpperCase())
let s1 = 'get-element-by-id'

// 转化为 getElementById
console.log(f(s1))
export {}
