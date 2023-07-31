const m = Request
class Player {
  constructor(name, sex) {
    this._name = name
    this._sex = sex
  }

  get age() {
    return this._age
  }

  set age(value) {
    this._age = value
  }

  get sex() {
    return this._sex
  }

  set sex(value) {
    this._sex = value
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }

  show() {
    console.log(`${this._name}的性别是${this._sex}`)
  }

  static infor() {
    console.log(`nononononn`)
  }
}

const plaer = new Player(`kuli`, `nan`)
console.log(plaer.name, plaer.sex)
console.log(plaer)
plaer.age = `343434`
console.log(plaer.age)
console.log(plaer)
export {}
