// 验证规则
const validators = {
  name: {
    validate(value) {
      return value.length > 6
    },
    message: '用户名长度不能小于六',
  },
  password: {
    validate(value) {
      return value.length > 10
    },
    message: '密码长度不能小于十',
  },
  moblie: {
    validate(value) {
      return /^1(3|5|7|8|9)[0-9]{9}$/.test(value)
    },
    message: '手机号格式错误',
  },
}
// 验证方法
function validator(obj, validators) {
  return new Proxy(obj, {
    set(target, key, value) {
      const validator = validators[key]
      if (!validator) {
        target[key] = value
      } else if (validator.validate(value)) {
        target[key] = value
      } else {
        alert(validator.message || '')
      }
    },
  })
}
let form = {}
form = validator(form, validators)
form.name = '666' // 用户名长度不能小于六
form.password = '113123123123123'
export {}
