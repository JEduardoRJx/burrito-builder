import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postOrder } from '../../apiCalls';
import { setNewOrder } from '../../actions';

class OrderForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleIngredientChange = e => {
    e.preventDefault();
    this.setState({ingredients: [...this.state.ingredients, e.target.name]});
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { orders, setNewOrder } = this.props;
    const newOrder = {
      id: orders.length + 1,
      name: this.state.name,
      ingredients: this.state.ingredients
    }
    try {
      await postOrder(newOrder);
      setNewOrder(newOrder)
    } catch({message}) {
      console.log(message)
    }
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    const submitOrder = this.state.ingredients.length < 1 || this.state.name === '' ? <p>Nothing to Submit</p> : <button onClick={e => this.handleSubmit(e)}>
    Submit Order
  </button>

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        {submitOrder}
      </form>
    )
  }
}

const mapStateToProps = ({ orders }) => ({
  orders
})

const mapDispatchToProps = dispatch => ({
  setNewOrder: newOrder => dispatch( setNewOrder( newOrder ))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);