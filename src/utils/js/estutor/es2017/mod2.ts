{
  console.log(`________________________________________________`)
  console.log(`list`.padStart(8, `=`))
  let m = [2, 3, 4, 5, 6, 7333].map((x) => x.toString().padStart(10, `*`))
  console.log(m)
}
{
  console.log(`________________________________________________`)
  const cars = {
    '🚙BMW': `10`,
    '🚘Tesla': `5`,
    '🚖Lamborghini': `0`,
  }
  Object.entries(cars).map(([name, count]) => {
    //padEnd appends ' -' until the name becomes 20 characters
    //padStart prepends '0' until the count becomes 3 characters.
    console.log(`${name.padEnd(20, ` -`)} Count: ${count.padStart(3, `0`)}`)
  })
}
export {}
