/*
 * @Author: yanni
 * @Date:   2019-02-26 14:20:11
 * @Last Modified by:   yanni
 * @Last Modified time: 2019-02-28 20:25:02
 */
let s='hello';
console.log(s.includes('h'));
console.log('x'.repeat(34));
console.log('msg'.padStart());
for (let i = 0; i<10; i++) {
  setTimeout(() => {
    // noinspection JSReferencingMutableVariableFromClosure
    console.log(i)
  })
}
for (let j=0; j<10; j++) {
  setTimeout(() => {
    console.log(j)
  })
}
