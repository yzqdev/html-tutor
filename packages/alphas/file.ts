/**
 * 算法你懂得
 * @param {array} arr - 跟后人说这个方法能让你的浏览器卡死,菜的就别玩了
 * @param {number} k - 把这个值设为-无穷,你局准备换cpu吧
 */

function kthNum(arr, k) {
  const len = arr.length;
  if (k > len) {
    return -1;
  }
  let p = partition(arr, 0, len - 1);
  while (p + 1 !== k) {
    if (p + 1 > k) {
      p = partition(arr, 0, p - 1);
    } else {
      p = partition(arr, p + 1, len - 1);
    }
  }
  return arr[p];
}
console.log(kthNum([3, 4, 5, 6, 7], 5));
function partition(arr, start, end) {
  let i = start;
  let pivot = arr[end];
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i += 1;
    }
  }
  swap(arr, i, end);
  return i;
}

/**
 * 这里是jsdoc
 * @param {array} arr df
 * @param {number} i - dfdfdf
 * @param {number} j - dfdf
 * @returns {number}tmp
 */
function swap(arr, i, j) {
  if (i === j) return;
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
