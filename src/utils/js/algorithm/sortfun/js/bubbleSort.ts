/**
 * 方法说明：冒泡排序
 * @param {Array} arr
 * @return {Array}
 */
function bubbleSort(arr) {
  let len = arr.length;
    console.time(`改进前冒泡排序耗时`);
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
                //相邻元素两两对比
                let temp = arr[j + 1]; //元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
  }
  console.timeEnd(`改进前冒泡排序耗时`);
  return arr;
}
//1.改进冒泡排序
function bubbleSort2(arr2) {
    console.time(`1.改进后冒泡排序耗时`);
  let i = arr.length - 1; //初始时,最后位置保持不变
    while (i > 0) {
    let pos = 0; //每趟开始时,无记录交换
        for (let j = 0; j < i; j++)
            if (arr[j] > arr[j + 1]) {
                pos = j; //记录交换的位置
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
      }
        i = pos; //为下一趟排序作准备
    }
  console.timeEnd(`1.改进后冒泡排序耗时`);
    return arr2;
}
//2.改进冒泡排序
function bubbleSort3(arr3) {
  let low = 0;
    let high = arr.length - 1; //设置变量的初始值
  let tmp, j;
    console.time(`2.改进后冒泡排序耗时`);
  while (low < high) {
    for (
            j = low;
            j < high;
      ++j //正向冒泡,找到最大者
        )
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        --high; //修改high值, 前移一位
        for (
            j = high;
            j > low;
            --j //反向冒泡,找到最小者
    )
            if (arr[j] < arr[j - 1]) {
                tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
      }
        ++low; //修改low值,后移一位
  }
    console.timeEnd(`2.改进后冒泡排序耗时`);
    return arr3;
}
let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48,];
console.log(selectionSort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(bubbleSort2(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(bubbleSort3(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
