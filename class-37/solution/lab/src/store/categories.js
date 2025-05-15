let initialState = {
  activeCategory: '',
  categoryList: [
    { name: 'electronics', displayName: 'Elecronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ]
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CATEGORY':
      return { ...state, activeCategory: payload };
    default:
      return state;
  }
};

export const category = (name) => {
  return {
    type: 'CATEGORY',
    payload: name
  };
};

