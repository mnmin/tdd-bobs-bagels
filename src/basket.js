class Basket {
  constructor() {
    this.items = []
  }

  create(description) {
    const newItem = {
      id: description,
      textDescription: description,
      price: Number,
      quantity: Number
    }
    this.items.push(newItem)
    return newItem
  }

  addItem(item) {
    if (item === undefined) return this.items
    // maybe: check if item is valid (skip this for now)
    // add it to the basket.items
    this.items.push(item)
    // return the updated items list
    return this.items
  }

  removeItem(itemID) {
    const item = this.items.find((item) => item.id === itemID)
    if (item !== undefined) {
      return item
    }
    this.items.pop()
  }
}

module.exports = Basket
