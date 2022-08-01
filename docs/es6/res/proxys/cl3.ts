let dictionary = {
  Hello: 'Hola',
  Bye: 'Adiós',
}

dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    // 拦截读取属性操作
    if (phrase in target) {
      //如果字典包含该短语
      return target[phrase] // 返回译文
    } else {
      // 否则返回未翻译的短语
      return phrase
    }
  },
})
console.log(dictionary['Hello'])
console.log(dictionary['welcome to beijing'])
export {}
