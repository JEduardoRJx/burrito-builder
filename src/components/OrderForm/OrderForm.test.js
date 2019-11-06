import React from 'react';
import { shallow } from 'enzyme';
import { OrderForm, mapStateToProps, mapDispatchToProps } from './OrderForm';
import { setNewOrder } from '../../actions'

describe('OrderFromContainer', () => {

  describe('OrderFrom component', () => {
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
    const mockSetNewOrder = jest.fn();

    beforeEach(() => {
      wrapper = shallow(<OrderForm 
        orders={mockOrders}
        setNewOrders={mockSetNewOrder}
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
      const newOrder = {
        id: 1,
        ingredients: ["beans", "lettuce", "carnitas", "queso fresco", "jalapeno"],
        name: "Pat"
      }
      const actionToDispatch = setNewOrder(newOrder);
      const mappedProps = mapDispatchToProps(mockDispatch);
      
      mappedProps.setNewOrder(newOrder);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});