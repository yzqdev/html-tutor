const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    console.log(this, 'this')
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

const say = () => {
  console.log('hello')
}
debounce(say, 300)
