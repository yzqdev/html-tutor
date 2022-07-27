function curryingHelper(fn, ...args) {
  //第一个括号里的
  return function(...args2) {
    //第二个括号里的args2
    let _totalArgs = args.concat(args2);
    return fn.apply(this, _totalArgs);
  };
}
function betterCurryingHelper(fn, len=fn.length) {
  return function(...args2) {
    let allArgsFulfilled = args2.length >= len;//后面参数大于方法参数就停止便利

    // 如果参数全部满足,就可以终止递归调用
    if (allArgsFulfilled) {
      return fn.apply(this, args2);
    } else {
      let argsNeedFulfilled = [fn].concat(...args2);
      return betterCurryingHelper(
        curryingHelper.apply(this, argsNeedFulfilled),
        len- args2.length
      );
    }
  };
}
function showMsg(name, age, fruit) {
  console.log(
    `My name is ${name}, I'm ${age} years old,  and I like eat ${fruit}`
  );
}
let betterShowMsg = betterCurryingHelper(showMsg);
betterShowMsg("dreamapple", 22, "apple"); // My name is dreamapple, I'm 22 years old,  and I like eat apple
betterShowMsg("dreamapple", 22)("apple"); // My name is dreamapple, I'm 22 years old,  and I like eat apple
betterShowMsg("dreamapple")(22, "apple"); // My name is dreamapple, I'm 22 years old,  and I like eat apple
betterShowMsg("dreamapple")(22)("apple"); // My name is dreamapple, I'm 22 years old,  and I like eat apple
