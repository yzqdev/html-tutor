const theProtoObj = {
  toString: function () {
    return `The ProtoOBject To string`
  },
}

const handler = () => `handler`

const obj = {
  // __proto__
  __proto__: theProtoObj,

  // Shorthand for ‘handler: handler’
  handler,

  // Methods
  toString() {
    // Super calls
    return `d ${super.toString()}`
  },

  // Computed (dynamic) property names
  [`prop_${(() => 42)()}`]: 42,
}

console.log(obj.handler)
console.log(obj.handler())
console.log(obj.toString())
console.log(obj.prop_42)
export {}
