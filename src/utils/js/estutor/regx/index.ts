//进行柯里化
function checkByRegExp(regExp, string) {
  return regExp.test(string)
}
const _check = curry(checkByRegExp)
//生成工具函数，验证电话号码
const checkCellPhone = _check(/^1\d{10}$/)
//生成工具函数，验证邮箱
const checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/)

checkCellPhone(`18642838455`) // 校验电话号码
checkCellPhone(`13109840560`) // 校验电话号码
checkCellPhone(`13204061212`) // 校验电话号码

checkEmail(`test@163.com`) // 校验邮箱
checkEmail(`test@qq.com`) // 校验邮箱
checkEmail(`test@gmail.com`) // 校验邮箱
const port = 3434

const sau = () => {
  console.log(`port${port}`)
}
export { checkEmail, checkByRegExp }
