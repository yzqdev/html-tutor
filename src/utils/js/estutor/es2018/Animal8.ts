// 0.1.1/throttle.js
/**
 *
 * @param {Function} callback 回调函数
 * @param {Number} wait       间隔时间
 *
 * @return {Function} 节流函数
 */
function throttle(callback, wait = 3000) {
  let timer = null
  let startTime
  return function () {
    const ctx = this
    const args = arguments
    const now = +new Date()
    if (startTime && now < startTime + wait) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        startTime = now
        callback.apply(ctx, args)
      }, wait)
    } else {
      startTime = now
      callback.apply(ctx, args)
    }
  }
}
