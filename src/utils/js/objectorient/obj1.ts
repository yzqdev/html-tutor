class Cat {
  constructor(name, color) {
    let heart = "❤️";
    let stomach = "胃";
    let heartbeat = function () {
      console.log(heart + "跳");
    };
    this.name = name;
    this.color = color;
    heartbeat();
    this.jump = function () {
      console.log("heheheh");
      console.log(this);
      console.log("我跳起来了~来追我啊");
    };
  }
  cleanTheBody = function () {
    console.log("我会用唾液清洁身体");
  };
  static descript = "我这个类是用来生产出一只猫的";
  static actingCute() {
    console.log(this);
    console.log("一听到猫我就想到了它会卖萌");
  }
}
Cat.staticName = "staticName";
let guaiguai = new Cat("guaiguai", "white");
console.log(guaiguai);
guaiguai.jump();
guaiguai.cleanTheBody();
console.log(guaiguai.descript);
// guaiguai.actingCute();
Cat.actingCute();
console.log(Cat.descript);
console.log(Cat.staticName);
