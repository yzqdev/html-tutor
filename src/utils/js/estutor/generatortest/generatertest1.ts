const myPromise = new Promise((resolve, reject) => {
  if (Math.random() * 100 <= 90) {
    resolve(`Hello, Promises!`)
  }
  reject(new Error(`In 10% of the cases, I fail. Miserably.`))
})
myPromise
  .then(
    () => {
      console.log(`sucee`)
    },
    () => {
      console.log(`failed`)
    }
  )
  .catch(() => {
    console.log(`finally`)
  })
