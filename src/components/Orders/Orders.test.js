import React from 'react';
import { shallow } from 'enzyme';
import { Orders, mapStateToProps, mapDispatchToProps } from './Orders'
import { setOrders } from '../../actions';

describe('OrdersContainer', () => {

  describe('Orders component', () => {
    let wrapper;
    const mockOrders = [{
      id: 1,
      ingredients: ["beans", "lettuce", "carnitas", "queso fresco", "jalapeno"],
      name: "Pat"
    }, {
      id: 2,
      ingredients: ["beans", "rice", "carnitas", "jalapeno"],
      name: "SAM"
    }]
    const mockSetOrders = jest.fn();

    beforeEach(() => {
      wrapper = shallow(<Orders 
        orders={mockOrders}
        setOrders={mockSetOrders}
      />);  
    });
    
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });


  });

  describe('mapStateToProps', () => {
    it('should return orders(array)', () => {
      const orders = [{
        id: 1,
        ingredients: ["beans", "lettuce", "carnitas", "queso fresco", "jalapeno"],
        name: "Pat"
      }, {
        id: 2,
        ingredients: ["beans", "rice", "carnitas", "jalapeno"],
        name: "SAM"
      }]
      const mockState = {
        orders
      }
      const expected = {
        orders
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a newOrder when setNewOrder is called', () => {
      const mockDispatch = jest.fn();
      const orders = [{
        id: 1,
        ingredients: ["beans", "lettuce", "carnitas", "queso fresco", "jalapeno"],
        name: "Pat"
      }, {
        id: 2,
        ingredients: ["beans", "rice", "carnitas", "jalapeno"],
        name: "SAM"
      }];
      const actionToDispatch = setOrders(orders);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setOrders(orders);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});