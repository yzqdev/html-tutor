<<<<<<< HEAD
# 前端常用代码合集

1.使用 FileReader 实现前端图片预览

```
<input type="file"<br<img src="" height="200" alt="Image preview area..." title="preview-img"
```

let fileInput = document.querySelector('input[type=file]');
let previewImg = document.querySelector('img');
fileInput.addEventListener('change', function () {
let file = this.files[0];
let reader = new FileReader();
reader.addEventListener('load', function () {
previewImg.src = reader.result;
}, false);
reader.readAsDataURL(file);
}, false); 2.取到页面中所有的 checkbox 怎么做？(不使用第三方框架)
let doc = document,
domList = doc.getElementsByTagName('input'),
checkBoxList = [],
len = domList.length;
while (len--) {
if (domList[len].type === 'checkbox') {
checkBoxList.push(domList[len]);
}
}
3.JavaScript 模版引擎小实例

 <div class="result"</div
 <script type="template" id="template"
数据:
 let data = [
 {
 title: "",
 href: "",
 imgSrc: ""
 },
 ...
 ];
方法一：
 let doc = document,
 template = doc.querySelector('#template').innerHTML,
 result = doc.querySelector('.result'),
 fragment = '';
 for (let i = 0, len = data.length; i < len; i++) {
 fragment += template
 .replace(/{{title}}/, data[i].title)
 .replace(/{{href}}/, data[i].href)
 .replace(/{{imgSrc}}/, data[i].imgSrc)
 }
 result.innerHTML = fragment;
方法二：
 let doc = document,
 template = doc.querySelector('#template').innerHTML,
 result = doc.querySelector('.result'),
 attachTemplateToData;
 attachTemplateToData = function (template, data) {
 let i = 0,
 len = data.length,
 fragment = '';
 function replace(obj) {
 let t, key, reg;
 for (key in obj) {
 reg = new RegExp('{{' + key + '}}', 'ig');
 t = (t || template).replace(reg, obj[key]);
 }
 return t;
 }
 for (; i < len; i++) {
 fragment += replace(data[i]);
 }
 return fragment;
 };
 result.innerHTML = attachTemplateToData(template, data);
------
4.实现JS函数重载
 let people = {
 values: ["Dean Edwards", "Sam Stephenson", "Alex Russell", "Dean Tom"]
 };
 function addMethod(object, name, fn) {
 let old = object[name];
 object[name] = function () {
 if (fn.length === arguments.length) {
 return fn.apply(this, arguments);
 } else if (typeof old === 'function') {
 return old.apply(this, arguments);
 }
 }
 }
 addMethod(people, "find", function () {
 return this.values;
 });
 addMethod(people, "find", function (firstName) {
 let ret = [];
 for (let i = 0; i < this.values.length; i++) {
 if (this.values[i].indexOf(firstName) === 0) {
 ret.push(this.values[i]);
 }
 }
 return ret;
 });
 addMethod(people, "find", function (firstName, lastName) {
 let ret = [];
 for (let i = 0; i < this.values.length; i++) {
 if (this.values[i] === (firstName + ' ' + lastName)) {
 ret.push(this.values[i]);
 }
 }
 return ret;
 });
 console.log(people.find());
 console.log(people.find("Sam"));
 console.log(people.find("Dean Edwards"));
5.JS跨浏览器绑定事件函数
常规实现方法:
 //跨浏览器添加事件
 function addHandler(target, eventType, handler) {
 //检测浏览器类型，并且重写addHandler方法
 if (target.addEventListener) {
 addHandler = function (target, eventType, handler) {
 target.addEventListener(eventType, handler, false);
 }
 } else { //IE
 addHandler = function (target, eventType, handler) {
 target.attachEvent("on" + eventType, handler);
 }
 }
 //调用新的函数
 addHandler(target, eventType, handler);
 }
 //跨浏览器移除事件
 function removeHandler(target, eventType, handler) {
 //检测浏览器类型，并且重写addHandler方法
 if (target.addEventListener) {
 removeHandler = function (target, eventType, handler) {
 target.removeEventListener(eventType, handler, false);
 }
 } else { //IE
 removeHandler = function (target, eventType, handler) {
 target.detachEvent("on", eventType, handler);
 }
 }
 target.detachEvent("on" + eventType, handler);
 }
优化方法:
 //绑定事件
 let addHandler = document.body.addEventListener ?
 function (target, eventType, handler) {//DOM2
 target.addEventListener(eventType, handler, false);
 } :
 function (target, eventType, handler) {//IE
 target.attachEvent("on" + eventType, handler);
 };
 //移除事件
 let removeHandler = document.body.removeEventListener ?
 function (target, eventType, handler) {
 target.removeEventListener(eventType, handler, false);
 } :
 function (target, eventType, handler) {
 target.detachEvent("on" + eventType, handler);
 };
6.JS单体模式
 let shoppingCar = (function () {
 //这个是由购物车构造器所创建的实例
 let instance;
 //购物车的构造器函数　
 function Trolley() {
 this.date = new Date().getDate();//实例属性，当前日期
 }
 //原型属性，一个返回当前日期的方法
 Trolley.prototype.getDate = function () {
 return this.date;
 };
 //暴露出去的公共API
 return function () {
 //如果实例不存在，那么就调用Trolley构造器实例化一个
 if (!instance) {
 instance = new Trolley();
 }
 //将实例返回外部
 return instance;
 }
 }());
 let a = new shoppingCar();
 let b = new shoppingCar();
 console.log(a === b);//true
7.使用prototype属性定义的对象方法
 let dom = function () {};
 dom.Show = function () {
 alert("Show Message");
 };
 dom.prototype.Display = function () {
 alert("Property Message");
 };
 dom.Display(); //error
 dom.Show(); //Show Message
 let d = new dom();
 d.Display(); //Property Message
 d.Show(); //error
1、不使用prototype属性定义的对象方法，是静态方法，只能直接用类名进行调用！另外，此静态方法中无法使用this变量来调用对象其他的属性！
2、使用prototype属性定义的对象方法，是非静态方法，只有在实例化后才能使用！其方法内部可以this来引用对象自身中的其他属性！
8.闭包实现结果缓存
 let CachedSearchBox = (function () {
 let cache = {},
 table = [];
 return {
 attachSearchBox: function (dsid) {
 if (dsid in cache) { //如果结果在缓存中
 return cache[dsid]; //直接返回缓存中的对象
 }
 let fsb = new uikit.webctrl.SearchBox(dsid);//新建
 cache[dsid] = fsb;//更新缓存
 if (count.length  100) {
 delete cache[shift()];
 }
 return fsb;
 },
 clearSearchBox: function (dsid) {
 if (dsid in cache) {
 cache[dsid].clearSelection();
 }
 }
 }
 })();
 CachedSearchBox.attachSearchBox('input');
我们开发中会碰到很多情况，设想我们有一个处理过程很耗时的函数对象，每次调用都会花费很长时间，
那么我们就需要将计算出来的值存储起来，当调用这个函数的时候，首先在缓存中查找，如果找不到，则进行计算，然后更新缓存并返回值，如果找到了，直接返回查找到的值即可。闭包正是可以做到这一点，因为它不会释放外部的引用，从而函数内部的值可以得以保留。
9.闭包实现封装
 let person = function () {
 let name = "Default";
 return {
 getName: function () {
 return name;
 },
 setName: function (newName) {
 name = newName;
 }
 }
 }();
 console.log(person.name);//undefined
 console.log(person.getName());//Default
 person.setName("GoodMan");
 console.log(person.getName());//GoodMan
10.闭包实现类和继承
 function Person() {
 let name = "default";
 return {
 getName: function () {
 return name;
 },
 setName: function (newName) {
 name = newName;
 }
 }
 }
 let p = new Person();
 p.setName('Tom');
 console.log(p.getName());
 let Jack = function () {
 };
 Jack.prototype = new Person();//继承自Person
 Jack.prototype.Say = function () { //添加私有方法
 console.log("Hello,my name is Jack");
 };
 let j = new Jack();
 j.setName("Jack");//Tom
 j.Say();//Hello,my name is Jack
 console.log(j.getName());//Jack
11.如何判断某变量是否为数组数据类型
 if (typeof Array.isArray === "undefined") {
 Array.isArray = function (arg) {
 return Object.prototype.toString.call(arg) === "[object Array]"
 };
 }
12.Javascript继承-借用构造函数
 let Widget = function (name) {
 this.messages = [];
 };
 Widget.prototype.type = 'Widget';
 let SubWidget = function (name) {
 Widget.apply(this, Array.prototype.slice.call(arguments));
 this.name = name;
 };
 SubWidget.prototype = Widget.prototype;
 let sub1 = new SubWidget('foo');
 let sub2 = new SubWidget('bar');
 sub1.messages.push('foo');
 sub2.messages.push('bar');
 console.log(sub1.messages);//foo
 console.log(sub2.messages);//bar
13.Javascript原型-封装
 let Dialog = (function () {
 function Dialog() {
 }
 Dialog.prototype = {
 init: function () {
 console.log("ok");
 }
 };
 return Dialog;
 }());
 let d = new Dialog();
 d.init();//ok
14.通过闭包修正函数的上下文（浏览器不支持解决方案）
 if (!('bind' in Function.prototype)) {
 Function.prototype.bind = function () {
 let fn = this,
 context = arguments[0],
 args = Array.prototype.slice.call(arguments, 1);
 return function () {
 return fn.apply(context, args.concat(arguments));
 }
 }
 }
15.优化JavaScript的构造函数(new关键字的使用)
 方法一：
 function User(name, age) {
 if (typeof Object.create === 'undefined') {
 Object.create = function (prototype) {
 function C() {
 C.prototype = prototype;
 return new C();
 }
 }
 }
 let self = this instanceof User ? this : Object.create(User.prototype);
 self.name = name;
 self.age = age;
 return self;
 }
 方法二：
 function Programmer(name, company, expertise) {
 if (!(this instanceof Programmer)) {
 return new Programmer(name, company, expertise);
 }
 this.name = name;
 this.company = company;
 this.expertise = expertise;
 this.writeCode = function () {
 console.log("Writing some public static thing..")
 }
 }
16.柯里化
 let curry = function (fn) {
 let limit = fn.length;
 return function judgeCurry(...args) {
 return function (...args) {
 if (args.length = limit) {
 return fn.apply(null, args);
 } else {
 return function (...args2) {
 return judgeCurry.apply(null, args.concat(args2))
 }
 }
 }
 }
 };
 let currySingle = fn = judgeCurry = (...args) = args.length = fn.length ? fn.apply(null, args) : (...args2) = judgeCurry.apply(null, args.concat(args2));
17.对象拷贝与赋值
 let obj = {
 name: 'xiaoming',
 age: 23
 };
 let newObj = obj;
 newObj.name = 'xiaohua';
 console.log(obj.name);//xiaohua
 console.log(newObj.name);//xiaohua
我们将obj对象赋值给了newObj对象，从而改变newObj的name属性，但是obj对象的name属性也被篡改，这是因为实际上newObj对象获得的只是一个内存地址，而不是真正的拷贝，所以obj对象被篡改。
 let obj = {
 name: 'xiaoming',
 age: 23
 };
 let newObj = Object.assign({}, obj, {color: 'blue'});
 newObj.name = 'xiaohua';
 console.log(obj.name);//xiaoming
 console.log(newObj.name);//xiaohua
 console.log(newObj.color);//blue
18.拷贝
利用Object.assign()方法进行对象的深拷贝可以避免源对象被篡改的可能。因为Object.assign()方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。
 let obj = {
 name: 'xiaoming',
 age: 23
 };
 let newObj = Object.create(obj);
 newObj.name = 'xiaohua';
 console.log(obj.name);//xiaoming
 console.log(newObj.name);//xiaohua
我们也可以使用Object.create()方法进行对象的拷贝，Object.create()方法可以创建一个具有指定原型对象和属性的新对象。
19.设置等高的列
 <div class="equalHeight" style="border: 1px solid"
 <pFirst Line</p
 <pSecond Line</p
 <pThird Line</p
 $(function () {
 equalHeight(".equalHeight");
 });
 let maxHeight = 0;
 function equalHeight(col) {
 col = $(col);
 col.each(function () {
 if ($(this).height()  maxHeight) {
 maxHeight = $(this).height()
 }
 });
 col.height(maxHeight);
 }
=======
1.熟练掌握html,css,熟练掌握DIV+CSS布局
2.熟悉js原生代码,熟练使用原生DOM操作,具备用es6为页面添加各种交互效果的能力
2.熟悉angularjs,vuejs,reactjs等js框架,熟练使用bootstrap,elementui,sematicUI等ui库;
2.熟练使用webpack打包工具,熟悉gulp自动化构建工具,具备使用nodejs开发小型程序的能力;
3.了解基本的http协议,对计算机网络有一定的了解;
4.熟练使用Photoshop,AI等软件,对UI设计有一定的理解;
>>>>>>> 90c11749a081961be86fb5b0f8db2113c6f3f642
