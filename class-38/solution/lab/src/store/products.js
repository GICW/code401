let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'LOAD_PRODUCTS':
      return payload;
    case 'ADD_TO_CART':
      return state.map(product => product.id === payload.id ? payload : product);
    default:
      return state;
  }
};

export const getProducts = (category) => async dispatch => {
  try {
    let res = await fetch(`${process.env.REACT_APP_API}/products`);
    let data = await res.json();
    let products = data.filter(p => p.category === category);
    dispatch({ type: 'LOAD_PRODUCTS', payload: products });
  } catch (err) {
    console.error('Failed to load products', err);
  }
};
