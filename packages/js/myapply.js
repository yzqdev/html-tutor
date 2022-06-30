Function.prototype.myapply = function(context=window, args) {
  if (typeof this !== "function") {
    throw new TypeError("not funciton");
  }
  if (arguments.length > 2) {
    throw new Error("Incorrect parameter length");
  }

  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;
  return result;
};
function adddd(a,b) {
  let c=a+b;
  console.log(c)
}
let c={}
adddd.myapply(c,[34,344])
