import superagent from 'superagent';

let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      let cart = state.filter(product => product.id !== payload.id);
      return [...cart, payload];
    default:
      return state;
  }
};

export const add = (product) => async dispatch => {
  try {
    let updatedProduct = { ...product, inStock: product.inStock - 1 };
    let url = `${process.env.REACT_APP_API}/products/${product.id}`;
    let result = await superagent.put(url).send(updatedProduct);
    dispatch({ type: 'ADD_TO_CART', payload: result.body });
  } catch (err) {
    console.error('Failed to add to cart', err);
  }
};
