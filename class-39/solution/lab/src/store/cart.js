import superagent from 'superagent';
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], customer: {}, paymentInfo: {} },
  reducers: {
    add(state, action) {
      state.items = state.items.filter(product => product.id !== action.payload.id);
      state.items.push(action.payload);
    },
    remove(state, action) {
      state.items = state.items.filter(product => product.id !== action.payload.id);
    },
    updateCustomer(state, action) {
      state.customer = action.payload;
    },
    updatePaymentInfo(state, action) {
      state.paymentInfo = action.payload;
    }
  }
});

export const addToCart = (product) => async dispatch => {
  try {
    const updatedProduct = { inStock: product.inStock - 1 };
    const url = `${process.env.REACT_APP_API}/products/${product.id}`;
    const res = await superagent.put(url).send(updatedProduct);
    dispatch(cartSlice.actions.add(res.body));
  } catch(err) {
    console.error("Error adding to cart:", err.message);
  }
};

export const removeFromCart = (product) => async dispatch => {
  try {
    const updatedProduct = { inStock: product.inStock + 1 };
    const url = `${process.env.REACT_APP_API}/products/${product.id}`;
    const res = await superagent.put(url).send(updatedProduct);
    dispatch(cartSlice.actions.remove(res.body));
  } catch(err) {
    console.error("Error removing from cart:", err.message);
  }
};

export const { add, remove, updateCustomer, updatePaymentInfo } = cartSlice.actions;
export default cartSlice.reducer;
