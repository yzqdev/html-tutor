{
  /**
   * @Author  yanni
   * @Description    //TODO
   * 1.使用 Array.includes 来处理多个条件
   * @Date  18:32 2019/7/14
   * @Modified By:
   */
  console.log(`__________1.使用 Array.includes 来处理多个条件_________________`)
  // bad
  const testbad = (fruit: string) => {
    if (fruit === `apple` || fruit === `strawberry`) {
      console.log(`red`)
    }
  }
  // good
  const testgood = (fruit: string) => {
    // 条件提取到数组中
    const redFruits = [`apple`, `strawberry`, `cherry`, `cranberries`]

    if (redFruits.includes(fruit)) {
      console.log(`red`)
    }
  }
}
{
  console.log(`__________2.减少嵌套，提前使用 return 语句_________________`)
  /**
   * @Author  yanni
   * @Description    //TODO
   * 2.减少嵌套，提前使用 return 语句
   * @Date  18:33 2019/7/14
   * @Modified By:
   */
  //good
  const testredfruit = (fruit: string, quantity: number | undefined) => {
    const redFruits = [`apple`, `strawberry`, `cherry`, `cranberries`]

    // 条件 1：fruit 必须有值
    if (fruit) {
      // 条件 2：必须为红色
      if (redFruits.includes(fruit)) {
        console.log(`red`)

        // 条件 3：数量必须大于 10
        if (quantity > 10) {
          console.log(`big quantity`)
        }
      }
    } else {
      throw new Error(`No fruit!`)
    }
  }

  // 测试结果
  // testredfruit(null); // 抛出错误：No fruits
  testredfruit(`apple`) // 打印：red
  testredfruit(`apple`, 20) // 打印：red，big quantity

  /* 在发现无效条件时提前 return */
  // better
  const test2 = (fruit, quantity) => {
    const redFruits = [`apple`, `strawberry`, `cherry`, `cranberries`]

    // 条件 1：提前抛出错误
    if (!fruit) throw new Error(`No fruit!`)

    // 条件2：必须为红色
    if (redFruits.includes(fruit)) {
      console.log(`red`)

      // 条件 3：数量必须大于 10
      if (quantity > 10) {
        console.log(`big quantity`)
      }
    }
  }
  //best
  /* 在发现无效条件时提前 return */

  const test3 = (fruit: string, quantity: number) => {
    const redFruits = [`apple`, `strawberry`, `cherry`, `cranberries`]

    if (!fruit) throw new Error(`No fruit!`) // 条件 1：提前抛出错误
    if (!redFruits.includes(fruit)) return // 条件 2：当 fruit 不是红色的时候，提前 return

    console.log(`red`)

    // 条件 3：必须是大量存在
    if (quantity > 10) {
      console.log(`big quantity`)
    }
  }
}
{
  console.log(`_________3.使用函数的默认参数 和 解构____________________`)
  const testfrout = (fruit, quantity = 1) => {
    // i如果没有提供 quantity 参数，则默认为 1
    if (!fruit) return
    console.log(`We have ${quantity} ${fruit}!`)
  }

  // 测试结果
  testfrout(`banana`) // We have 1 banana!
  testfrout(`apple`, 2) // We have 2 apple!
}
{
  console.log(
    `___________4.选择 Map / Object 字面量，而不是Switch语句_________________`
  )
  //bad
  function testapple1(color) {
    // 使用 switch case 语句，根据颜色找出对应的水果
    switch (color) {
      case `red`:
        return [`apple`, `strawberry`]
      case `yellow`:
        return [`banana`, `pineapple`]
      case `purple`:
        return [`grape`, `plum`]
      default:
        return []
    }
  }

  //测试结果
  testapple1(null) // []
  testapple1(`yellow`) // ['banana', 'pineapple']
  //good
  // 使用对象字面量，根据颜色找出对应的水果
  const fruitColor = {
    red: [`apple`, `strawberry`],
    yellow: [`banana`, `pineapple`],
    purple: [`grape`, `plum`],
  }

  function testapple2(color) {
    return fruitColor[color] || []
  }
  //best
  // 使用 Map ，根据颜色找出对应的水果
  const fruitColorMap = new Map()
    .set(`red`, [`apple`, `strawberry`])
    .set(`yellow`, [`banana`, `pineapple`])
    .set(`purple`, [`grape`, `plum`])

  function testapple3(color) {
    return fruitColorMap.get(color) || []
  }
  console.log(
    `我们是不是应该禁止使用 switch 语句呢？ 不要局限于此。 就个人而言，我尽可能使用对象字面量，但我不会设置硬规则来阻止使用 switch ，是否使用应该根据你的场景而决定`
  )
  const fruits = [
    { name: `apple`, color: `red` },
    { name: `strawberry`, color: `red` },
    { name: `banana`, color: `yellow` },
    { name: `pineapple`, color: `yellow` },
    { name: `grape`, color: `purple` },
    { name: `plum`, color: `purple` },
  ]

  function testapple4(color) {
    // 使用 Array filter  ，根据颜色找出对应的水果

    return fruits.filter((f) => f.color === color)
  }
}
{
  console.log(`________________________________________________`)
  const fruits1 = [
    { name: `apple`, color: `red` },
    { name: `banana`, color: `yellow` },
    { name: `grape`, color: `purple` },
  ]

  function test3() {
    // 条件：简短方式，所有的水果都必须是红色
    const isAllRed = fruits1.every((f) => f.color === `red`)

    console.log(isAllRed) // false
  }
  const fruits2 = [
    { name: `apple`, color: `red` },
    { name: `banana`, color: `yellow` },
    { name: `grape`, color: `purple` },
  ]

  function testredfruit() {
    // 条件：是否存在红色的水果
    const isAnyRed = fruits2.some((f) => f.color == `red`)

    console.log(isAnyRed) // true
  }
}

export {}
