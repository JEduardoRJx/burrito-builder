import { combineReducers } from 'redux';
import { orders } from './orders';
import { isLoading } from './isLoading';


const rootReducer = combineReducers({
  orders,
  isLoading
});

export default rootReducer;
