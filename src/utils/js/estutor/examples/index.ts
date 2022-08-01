// eslint-disable-next-line strict
class AddressList {
  constructor(root) {
    this.state = []
    // UI variables
    this.root = root
    this.form = root.querySelector(`form`)
    this.input = this.form.querySelector(`input`)
    this.help = this.form.querySelector(`.help`)
    this.ul = root.querySelector(`ul`)
    this.items = {} // Id -> li element
    // Event handlers
    this.form.addEventListener(`submit`, (e) => {
      e.preventDefault()
      const address = this.input.value

      this.input.value = ``
      this.addAddress(address)
    })
    this.ul.addEventListener(`click`, (e) => {
      const id = e.target.getAttribute(`data-delete-id`)

      if (!id) {
        return
      } // User clicked in something else
      this.removeAddress(id)
    })
  }
  addAddress(address) {
    // State logic
    const id = String(Date.now())

    this.state = this.state.concat({ address, id })
    // UI logic
    this.updateHelp()
    // eslint-disable-next-line no-undef
    const li = document.createElement(`li`)
    const span = document.createElement(`span`)
    const del = document.createElement(`a`)

    span.innerText = address
    del.innerText = `delete`
    del.setAttribute(`data-delete-id`, id)
    this.ul.appendChild(li)
    li.appendChild(del)
    li.appendChild(span)
    this.items[id] = li
  }
  removeAddress(id) {
    // State logic
    this.state = this.state.filter((item) => item.id !== id)
    // UI logic
    this.updateHelp()
    const li = this.items[id]

    this.ul.removeChild(li)
  }
  // Utility method
  updateHelp() {
    if (this.state.length > 0) {
      this.help.classList.add(`hidden`)
    } else {
      this.help.classList.remove(`hidden`)
    }
  }
}

const root = document.getElementById(`addressList`)

new AddressList(root)
