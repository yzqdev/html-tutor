async function count() {
  let counter = 1
  for (let i = 0; i < 100; i++) {
    counter += 1
    console.log(counter)
    await sleep(1000)
  }
}
count()
