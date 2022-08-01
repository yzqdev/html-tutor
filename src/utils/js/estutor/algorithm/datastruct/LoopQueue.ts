class LoopQueue extends Queue {
  constructor(items) {
    super(items)
  }
  getIndex(index) {
    const length = this.items.length
    return index > length ? index % length : index
  }
  find(index) {
    return !this.isEmpty() ? this.items[this.getIndex(index)] : null
  }
}
{
  console.log(`________________________________________________`)
  console.log(q)
  const loopQueue = new LoopQueue([`Surmon`])
  loopQueue.enqueue(`SkyRover`)
  loopQueue.enqueue(`Even`)
  loopQueue.enqueue(`Alice`)
  console.log(loopQueue.size, loopQueue.isEmpty) // 4 false

  console.log(loopQueue.find(26)) // 'Evan'
  console.log(loopQueue.find(87651)) // 'Alice'
}
