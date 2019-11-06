export const orders = (state = [], action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      return action.orders;
    case 'NEW_ORDER':
      console.log(state)
      return [...state, action.newOrder]
    default:
      return state;
  }
};
