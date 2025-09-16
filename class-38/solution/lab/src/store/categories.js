let initialState = {
  activeCategory: '',
  categoryList: []
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CATEGORY':
      return { ...state, activeCategory: payload };
    case 'INIT_CATEGORIES':
      return { ...state, categoryList: payload };
    default:
      return state;
  }
};

export const category = (name) => ({
  type: 'CATEGORY',
  payload: name
});

export const getCategories = () => async dispatch => {
  try {
    let res = await fetch(`${process.env.REACT_APP_API}/categories`);
    let data = await res.json();
    dispatch({ type: 'INIT_CATEGORIES', payload: data });
  } catch (err) {
    console.error('Failed to load categories', err);
  }
};
