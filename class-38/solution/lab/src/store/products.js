let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'LOAD_PRODUCTS':
      return payload;

    case 'ADD_TO_CART':
      // Should have a new inStock count
      return state.map(product => product.name === payload.name ? payload : product);

    default:
      return state
  }
};

export const getProducts = (category) => async dispatch => {
  let results = await fetch(`${process.env.REACT_APP_API}/products`);
  let data = await results.json();
  let records = data.results || [];
  // Yuck ... but our API doesn't filter, so we'll just do it here
  let products = records.filter(product => product.category === category);
  dispatch(setProducts(products));
};

const setProducts = (list) => {
  return {
    type: 'LOAD_PRODUCTS',
    payload: list
  };
}

