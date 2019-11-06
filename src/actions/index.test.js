import * as actions from './index';

describe('actions', () => {

  it('should have type of SET_ORDERS', () => {
    const orders = [{
      id: 1,
      ingredients: ["beans", "lettuce", "carnitas", "queso fresco", "jalapeno"],
      name: "Pat"
    }, {
      id: 2,
      ingredients: ["beans", "rice", "carnitas", "jalapeno"],
      name: "SAM"
    }]
    const expectedAction = {
      type: 'SET_ORDERS',
      orders
    }
    const result = actions.setOrders(orders)
    expect(result).toEqual(expectedAction)
  });

  it('should have type of NEW_ORDER', () => {
    const newOrder = [{
      id: 1,
      ingredients: ["beans", "lettuce", "carnitas", "queso fresco", "jalapeno"],
      name: "Pat"
    }]
    const expectedAction = {
      type: 'NEW_ORDER',
      newOrder
    }
    const result = actions.setNewOrder(newOrder)
    expect(result).toEqual(expectedAction)
  });

})