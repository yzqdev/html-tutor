Array.myisArray = function(data) {
  let typeArray = Object.prototype.toString.call(data).slice(7, -1);
  console.log(typeArray.trim());
  return typeArray.trim() === "Array";
};

console.log(Array.myisArray([1, 2, 3]));
//实现一个object.create
let create = function(o) {
  const F = function() {};
  F.prototype = o;
  return new F();
};
//实现一个new方法
function createNew(Con, ...args){
    // 创建一个空的对象
    this.obj = {};
    // 将空对象指向构造函数的原型链
    Object.setPrototypeOf(this.obj, Con.prototype);
    // obj绑定到构造函数上，便可以访问构造函数中的属性，即this.obj.Con(args)
    let result = Con.apply(this.obj, args);
    // 如果返回的result是一个对象则返回
    // new方法失效，否则返回obj
    return result instanceof Object ? result : this.obj;
}
