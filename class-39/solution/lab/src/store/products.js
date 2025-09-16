import superagent from 'superagent';
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    productList: [],
    activeProduct: {}
  },
  reducers: {
    setProductList(state, action) {
      state.productList = action.payload;
    },
    setActiveProduct(state, action) {
      state.activeProduct = action.payload;
    }
  }
});

export const getProducts = (category) => async dispatch => {
  try {
    let response = await superagent.get(`${process.env.REACT_APP_API}/products`);
    let products = response.body.filter(p => p.category === category && p.inStock > 0); // filter
    dispatch(setProductList(products));
  } catch (error) {
    console.error('Error fetching products:', error.message);
  }
};

export const getProduct = (id) => async dispatch => {
  try {
    let response = await superagent.get(`${process.env.REACT_APP_API}/products/${id}`);
    dispatch(setActiveProduct(response.body));
  } catch (error) {
    console.error('Error fetching product:', error.message);
  }
};

export const { setActiveProduct, setProductList } = productSlice.actions;
export default productSlice.reducer;
