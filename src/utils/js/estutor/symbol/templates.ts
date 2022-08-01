function message(literals, ...values) {
  return literals.reduce((prev, next, i) => {
    const value = values[i - 1]
    return prev + value + next
  })
}

console.log(message([1, 2, 3], [`list`, `ee`, `kode`]))

function oneLine(template, ...expressions) {
  let result = template.reduce((prev, next, i) => {
    const expression = expressions[i - 1]
    return prev + expression + next
  })

  result = result.replace(/(\n\s*)/g, ` `)
  result = result.trim()

  return result
}

oneLine([`list`, `ee`, `kode`], 3)

function stripIndents(template, ...expressions) {
  let result = template.reduce((prev, next, i) => {
    const expression = expressions[i - 1]
    return prev + expression + next
  })

  result = result.replace(/^[^\S\n]+/gm, ``)
  result = result.trim()

  return result
}

const html = `
	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	<ul>
`
stripIndents(html)
