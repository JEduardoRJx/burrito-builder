import { orders } from './orders';

describe('Orders', () => {

  it('should return the inital state', () => {
    const expected = [];
    const result = orders(undefined, []);
    expect(result).toEqual(expected);
  })
})