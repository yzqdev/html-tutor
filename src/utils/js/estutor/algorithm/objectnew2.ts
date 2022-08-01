{
  console.log(`________________________________________________`)
  function Point(x, y) {
    this.x = x
    this.y = y
  }
  let p1 = new Point(1, 2)
  let p2 = new Point(2, 4)
  let p3 = new Point(8, 1)
  let p4 = new Point(2, 9)
  let point = [p1, p2, p3, p4]
  console.log(point.length)
  for (let i = 0; i < point.length; i++) {
    console.log(`Point ${parseInt(i + 1)}:  ${point[i].x}, ${point[i].y}`)
  }
}
