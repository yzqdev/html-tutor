const actions = new Map([
  [1, [`processing`, `IndexPage`]],
  [2, [`fail`, `FailPage`]],
  [3, [`fail`, `FailPage`]],
  [4, [`success`, `SuccessPage`]],
  [5, [`cancel`, `CancelPage`]],
  [`default`, [`other`, `Index`]],
])
/**
 * 按钮点击事件
 * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消
 */
const onButtonClick = (status) => actions.get(status) || actions.get(`default`)
console.log(onButtonClick(3))
