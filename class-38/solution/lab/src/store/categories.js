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
      return { ...state, categoryList: payload.results }
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

export const getCategories = () => async dispatch => {
  let results = await fetch(`${process.env.REACT_APP_API}/categories`);
  let records = await results.json();
  dispatch(setCategories(records));
};

const setCategories = (list) => {
  return {
    type: 'INIT_CATEGORIES',
    payload: list
  };
}
