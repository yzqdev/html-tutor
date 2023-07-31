# 原形链

```js
 
  //一个构造函数Foo
  function Foo() {  }
  //一个f1实例对象
  let f1 = new Foo()
  //翻译:f1是Foo的实例对象吗？
  //还记得我说过，一个实例对象通过proto指向其构造函数的原型对象上。
  //深入翻译：f1这个实例对象通过proto指向是否可以找到Foo.prototype上呢？
  console.log(f1 instanceof Foo) // true
  //这行代码可以得出，沿着proto只找了一层就找到了。
  console.log(f1.__proto__ === Foo.prototype);   // true

  //翻译：f1是Object的实例对象吗？
  //深入翻译：f1这个实例对象通过proto指向是否可以找到Object.prototype上呢？
  console.log(f1 instanceof Object) // true
  //这两行代码可以得出，沿着proto找了两层才找到。事实上，f1.__proto__找到了Foo.prototype（Foo构造函数原型上），再次去.__proto__，找到了Object的原型对象上。见下图。
  console.log(f1.__proto__ === Object.prototype);  // false
  console.log(f1.__proto__.__proto__ === Object.prototype);  // true


  //这个案例的实质还是那句话：一个实例对象通过proto属性指向其构造函数的原型对象上。
//翻译：实例对象Object是否可以通过proto属性（沿着原型链）找到Function.prototype（Function的原型对象）
  console.log(Object instanceof Function) // true
//以上结果的输出可以看到下图，Object.__proto__直接找到一层就是Function.prototype.（Object created by Function）可知Object构造函数是由Function创建出来的，也就是说，Object这个实例是new Function出来的。

  console.log(Object instanceof Object) // true
//很有意思。上面我们已经知道Object这个实例是new Function出来的。也就是Object.proto指向Function.prototype。有意思的是，Function的原型对象又是Object原型对象的一个实例，也就是Function.prototype.proto 指向  Object.prototype .很有意思吧，见下图很更清楚这个“走向”。


  console.log(Function instanceof Function) // true
//由这个可知，可以验证我们的结论：Function是通过new自己产生的实例。                                        Function.proto===Function.prototype

  console.log(Function instanceof Object) // true
//Function.proto.proto===Function.prototype (找了两层)

  //定义了一个Foo构造函数。由下图可知，Foo.proto.proto.proto===null
  function Foo() {}
  console.log(Object instanceof  Foo) // false
//这条语句要验证的是，Object是否可以通过其原型链找到Foo.prototype。
// Object.proto.proto.proto=null  并不会找到Foo.prototype。所以，返回FALSE。
```
