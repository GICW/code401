import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import products from './products.js';
import categories from './categories.js';
import cart from './cart.js';

let reducers = combineReducers({ categories, products, cart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
