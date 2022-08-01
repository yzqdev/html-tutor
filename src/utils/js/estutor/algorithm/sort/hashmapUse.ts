// Usage:
const assert = require(`assert`)
const hashMap = require(`../Nativehashmap`)
// const hashMap = new NaiveHashMap();
hashMap.set(`cat`, 2)
hashMap.set(`rat`, 7)
hashMap.set(`dog`, 1)
hashMap.set(`art`, 8)
console.log(hashMap.buckets)
/*
  bucket #0: <1 empty item>,
  bucket #1: 8
*/
assert.equal(hashMap.get(`art`), 8) // this one is ok
assert.equal(hashMap.get(`cat`), 8) // got overwritten by art 😱
assert.equal(hashMap.get(`rat`), 8) // got overwritten by art 😱
assert.equal(hashMap.get(`dog`), 8) // got overwritten by art 😱
