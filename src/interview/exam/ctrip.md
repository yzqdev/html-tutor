# 携程

```js
let str = '携程C2t0r1i8p2020校招'
function handleStr(str) {
  let nums = str.match(/\d/g).join('')
  let words = str.match(/[a-zA-Z]/g).join('')

  return uniqueStr(nums) + words
}

function uniqueStr(str) {
  let arr = str.split('')

  return arr
    .filter(function (element, index) {
      return arr.indexOf(element) === index
    })
    .join('')
}

// 测试
console.log(handleStr('携程C2t0r1i8p2020校招'))
// 2018Ctrip
export {}
```

## 美团

```js
function groupList(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return []
  }

  let validItems = getValidItems(list)
  let result = {}

  validItems.forEach(function (item) {
    if (result.hasOwnProperty(item.type)) {
      result[item.type].push(item.content)
    } else {
      result[item.type] = []
      result[item.type].push(item.content)
    }
  })
  console.log(result)
  return adjustFormat(result)
}

function getValidItems(json) {
  return json.filter(function (element) {
    return isPureObject(element) && element.type && element.content
  })
}

function isPureObject(item) {
  return Object.prototype.toString.call(item).slice(8, -1) === 'Object'
}

function adjustFormat(obj) {
  return Object.keys(obj).map(function (type) {
    return { type: type, contents: obj[type] }
  })
}

// test
let input = [
  null,
  2,
  'test',
  undefined,
  {
    type: 'product',
    content: 'product1',
  },
  {
    type: 'product',
    content: 'product2',
  },
  {
    type: 'tag',
    content: 'tag1',
  },
  {
    type: 'product',
    content: 'product3',
  },
  {
    type: 'tag',
    content: 'tag2',
  },
]

console.log(JSON.stringify(groupList(input)))
// [{"type":"product","contents":["product1","product2","product3"]},{"type":"tag","contents":["tag1","tag2"]}]

```

## flat

```js
Array.prototype.myFlat = function (num = 1) {
  if (Array.isArray(this)) {
    let arr = []
    if (!Number(num) || Number(num) < 0) {
      return this
    }
    this.forEach((item) => {
      if (Array.isArray(item)) {
        let count = num
        arr = arr.concat(item.myFlat(--count))
      } else {
        arr.push(item)
      }
    })
    return arr
  } else {
    throw this + '.flat is not a function'
  }
}
```

## 防抖节流

```js
//非立即执行版:
//首先准备我们要使用的回调函数
function shotCat(content) {
  console.log('shotCat出品,必属精品!必须点赞!(滑稽)')
}

//然后准备包装函数:
//1,保存定时器标识
//2,返回闭包函数: 1)对定时器的判断清除;2)一般还需要保存函数的参数(一般就是事件返回的对象)和上下文(定时器存在this隐式丢失,详情可以看我不知道的js上)
//最后补充一句,这里不建议通过定义一个全局变量来替代闭包保存定时器标识.
const debounce = (fun, delay = 2000) => {
  let timer = null
  return (...args) => {
    //这里对定时器的设置有两种方法,第一种就是将定时器保存在函数(函数也是对象)的属性上,
    //这种写法,很简便,但不是很常用
    clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, delay)
    //另外一种写法就是我们比较常见的
    //if (timer) clearTimeout(timer);     相比上面的方法,这里多一个判断
    //timer = setTimeout(function () {
    //    fun.call(that, _args)
    //}, delay)
  }
}
//接着用变量保存保存 debounce 返回的带有延时功能的函数
let debounceShotCat = debounce(shotCat, 2000)

//最后添加事件监听 回调debounceShotCat 并传入事件返回的对象
debounceShotCat('防抖测试成功')
//带有立即执行选项的防抖函数:
//思路和上面的大致相同,如果是立即执行,则定时器中不再包含回调函数,而是在回调函数执行后,仅起到延时和重置定时器标识的作用
function debounce2(fun, delay = 500, immediate = true) {
  let timer = null //保存定时器
  return function (args) {
    let that = this
    let _args = args
    if (timer) clearTimeout(timer) //不管是否立即执行都需要首先清空定时器
    if (immediate) {
      if (!timer) fun.apply(that, Array.prototype.slice.apply(args)) //如果定时器不存在,则说明延时已过,可以立即执行函数
      //不管上一个延时是否完成,都需要重置定时器
      timer = setTimeout(function () {
        timer = null //到时间后,定时器自动设为null,不仅方便判断定时器状态还能避免内存泄露
      }, delay)
    } else {
      //如果是非立即执行版,则重新设定定时器,并将回调函数放入其中
      timer = setTimeout(function () {
        fun.call(that, _args)
      }, delay)
    }
  }
}
```
