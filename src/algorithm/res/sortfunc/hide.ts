//节点类
function Node(element) {
  this.item = element
  this.next = null
}
//循环列表需要修改一下构造函数，和遍历时候的判断条件
//构造函数如下；希望从后向前遍历，又不想要建立双向链表，就使用循环链表。
function Llist() {
  this.head = new Node('1')
  this.head.next = this.head
  this.remove = remove
  this.insert = insert
  this.find = find
  this.display = display
  //..........
}
function find(number) {
  let current = this.head
  while (current.item != number) {
    current = current.next
  }
  return current
}
function insert(element, newElement) {
  let preNode = this.find(element)
  let current = new Node(newElement)
  current.next = preNode.next
  preNode.next = current
}
function remove() {
  let current = this.head
  console.log('remove')
  //跳过两个，杀死一个
  while (current.next.next != null && current.item != current.next.next.item) {
    let temp = current.next.next
    current.next.next = temp.next
    current = temp.next
    temp.next = null
  }
  return current
}
function display(flag, current) {
  let crr = this.head
  if (flag) {
    while (crr.next.item != '1') {
      console.log(crr.item)
      crr = crr.next
    }
  } else {
    //最后只剩两个直接输出
    console.log(current.item)
    console.log(current.next.item)
  }
}
let Clist = new Llist()
//输入排序
for (let i = 1; i < 41; i++) {
  Clist.insert(i.toString(), (i + 1).toString())
}
//先输出所有
Clist.display(1, null)
//通过remove返回最后杀死后的结果其中一个节点
Clist.display(0, Clist.remove()) //16,31
