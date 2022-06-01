const Basket = require('../src/basket.js')

describe('Basket class', () => {
  it('can add an item to the basket', () => {
    // setup
    const basket = new Basket()
    const itemToAdd = {
      id: 1,
      name: 'cheese bagel',
      price: 2.99
    }
    const expectedResult = [itemToAdd]
    // execute
    const updatedBasket = basket.addItem(itemToAdd)
    // verify
    expect(updatedBasket).toEqual(expectedResult)
  })

  it('cannot add an item that is undefined to the basket', () => {
    // setup
    const basket = new Basket()
    const expectedResult = []
    // execute
    const updatedBasket = basket.addItem()
    // verify
    expect(updatedBasket).toEqual(expectedResult)
  })
  it('remove an item from the basket', () => {
    // setup
    const basket = new Basket()
    basket.create('plain bagel')
    // execute
    const updatedBasket = basket.removeItem(1)
    // verify
    expect(updatedBasket).toEqual()
  })
})
