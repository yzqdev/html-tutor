Function.prototype.myBind = function (context, ...args) {
  return () => {
    console.log(this)
    return this.apply(context, args)
  }
}

const person = {
  age: 20,
  getAge() {
    return this.age
  },
}
const getAge = person.getAge.myBind(person)
console.log(getAge()) // output :20
