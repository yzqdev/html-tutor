// 实现一个add方法，使计算结果能够满足如下预期：

function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  // let _args = Array.prototype.slice.call(arguments);
  let _args = Array.from(arguments);
  console.log("_args=" + _args);
  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  let _adder = function () {
    _args.push(...arguments);
    return _adder;
  };

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = () => _args.reduce((a, b) => a + b);
  return _adder;
}

add(1)(2)(3); // 6
// add(1, 2, 3)(4); // 10
// add(1)(2)(3)(4)(5); // 15
// add(2, 6)(1); // 9

const curry = (fn, arr = []) => {
  return (...args) => {
    //判断参数总数是否和fn参数个数相等
    if ([...arr, ...args].length === fn.length) {
      return fn(...arr, ...args); //拓展参数，调用fn
    } else {
      return curry(fn, [...arr, ...args]); //迭代，传入现有的所有参数
    }
  };
};
//test
function sum(a, b, c, d, e) {
  console.log("curry success");
  console.log([a, b, c, d, e]);
}
let sumFn = curry(sum);
sumFn(1)(2)(3)(5, 4); //6
sumFn(1)(2, 3)(4)(5); //6
