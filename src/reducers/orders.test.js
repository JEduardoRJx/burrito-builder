import { orders } from './orders';

describe('Orders', () => {

  it('should return the inital state', () => {
    const expected = [];
    const result = orders(undefined, []);
    expect(result).toEqual(expected);
  });

  it('Should return a new state when SET_ORDERS is the cae', () => {
    const allOrders = [{
      id: 1,
      ingredients: ["beans", "lettuce", "carnitas", "queso fresco", "jalapeno"],
      name: "Pat"
    }, {
      id: 2,
      ingredients: ["beans", "rice", "carnitas", "jalapeno"],
      name: "SAM"
    }]
    const action = {
      type: 'SET_ORDERS',
      orders: allOrders
    }
    const expected = allOrders;
    const result = orders([], action);
    expect(result).toEqual(expected);
  });

  it('should return a new state when NEW_ORDER is the case', () => {
    const allOrders = [{
      id: 1,
      ingredients: ["beans", "lettuce", "carnitas", "queso fresco", "jalapeno"],
      name: "Pat"
    }, {
      id: 2,
      ingredients: ["beans", "rice", "carnitas", "jalapeno"],
      name: "SAM"
    }];
    const newOrder = {
      id: 1,
      ingredients: ["beans", "lettuce", "carnitas", "queso fresco", "jalapeno"],
      name: "Pat"
    }
    const action = {
      type: 'NEW_ORDER',
      newOrder
    }
    const expected = [...allOrders, newOrder];
    const result = orders(allOrders, action);
    expect(result).toEqual(expected);
  })
})