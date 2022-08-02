let assert = require(`assert`)

class NaiveHashMap {
  constructor(initialCapacity = 2) {
    this.buckets = new Array(initialCapacity)
  }

  set(key, value) {
    const index = this.getIndex(key)
    this.buckets[index] = value
  }

  get(key) {
    const index = this.getIndex(key)
    return this.buckets[index]
  }

  hash(key) {
    let hashValue = 0
    const stringTypeKey = `${key}${typeof key}`
    for (let index = 0; index < stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index)
      hashValue += charCode << (index * 8)
    }
    return hashValue
  }

  getIndex(key) {
    const indexHash = this.hash(key)
    const index = indexHash % this.buckets.length
    return index
  }
}

const hashMap = new NaiveHashMap()
hashMap.set(`cat`, 2)
hashMap.set(`rat`, 7)
hashMap.set(`dog`, 1)
hashMap.set(`art`, 8)
console.log(hashMap.buckets)
/*
  bucket #0: <1 empty item>,
  bucket #1: 8
*/
// assert.equal(hashMap.get("art"), 8); // this one is ok
// assert.equal(hashMap.get("cat"), 8); // got overwritten by art 😱
// assert.equal(hashMap.get("rat"), 8); // got overwritten by art 😱
// assert.equal(hashMap.get("dog"), 8); // got overwritten by art 😱
console.log(hashMap.hash(1)) // 1843909523
console.log(hashMap.hash(`1`)) // 1927012762
console.log(hashMap.hash(`1,2,3`)) // 2668498381
console.log(hashMap.hash([1, 2, 3])) // 2533949129
console.log(hashMap.hash(`undefined`)) // 5329828264
console.log(hashMap.hash(undefined)) // 6940203017
