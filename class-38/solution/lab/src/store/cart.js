import superagent from 'superagent';

let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      let cart = state.filter(product => product.name !== payload.name);
      return [...cart, payload];

    default:
      return state;
  }
};

export const add = (product) => async dispatch => {
  let updatedProduct = { inStock: product.inStock - 1 };
  let url = `${process.env.REACT_APP_API}/products/${product._id}`;
  let results = await superagent.put(url).send(updatedProduct);
  let record = results.body;
  dispatch(addAction(record));
  // so, we've updated the server, but haven't re-fetched the list
  // is our display in sync with the server?
};

const addAction = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  };
};
