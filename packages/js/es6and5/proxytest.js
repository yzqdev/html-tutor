function extend(sup, base) {
  let descriptor = Object.getOwnPropertyDescriptor(
    base.prototype,
    "constructor"
  );
  base.prototype = Object.create(sup.prototype);
  const handler = {
    construct(target, args) {
      let obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply(target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    }
  };
  let proxy = new Proxy(base, handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, "constructor", descriptor);
  return proxy;
}

let Person = function(name) {
  this.name = name;
};

let Boy = extend(Person, function(name, age) {
  this.age = age;
});

Boy.prototype.sex = "M";

let Peter = new Boy("Peter", 13);
console.log(Peter.sex); // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age); // 13
