function Node(data, left, right) {
  // 创建节点
  this.data = data
  this.left = left
  this.right = right
  this.show = show
}

function show() {
  // 显示树的数据
  return this.data
}

function BST() {
  // 二叉查找树类
  this.root = null
  this.insert = insert
  this.inOrder = inOrder // inOrder是遍历BST的方式
}

function insert(data) {
  // 向树中插入数据
  let n = new Node(data, null, null)
  if (this.root == null) {
    this.root = n
  } else {
    let current = this.root
    let parent
    while (true) {
      parent = current
      if (data < current.data) {
        current = current.left
        if (current == null) {
          parent.left = n
          break
        }
      } else {
        current = current.right
        if (current == null) {
          parent.right = n
          break
        }
      }
    }
  }
}
