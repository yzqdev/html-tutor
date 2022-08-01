let globallet = 'global'
let outerlet = 'outer'
function outerFunc(outerParam: any) {
  function innerFunc(innerParam: any) {
    console.log(globalVar, outerParam, innerParam)
  }
  return innerFunc
}
const x = outerFunc(outerVar)
outerlet = 'outer-2'
globallet = 'guess'
x('inner')
export {}
