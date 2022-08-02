class Animal {
  /**
   * 动物类的构造方法
   * @constructor
   * @param {string} name -动物的名字
   * @param  {number} energy -动物能量
   */
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  sleep() {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  play() {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

class Dog extends Animal {
  constructor(name, energy, breed) {
    super(name, energy) // Calls Animal's constructor

    this.breed = breed
  }
  bark() {
    console.log(`Woof Woof!`)
    this.energy -= 0.1
  }
}
{
  console.log(`________________________________________________`)
  const d = new Dog(`alice`, 34, `44`)
  d.bark()
}
export {}
