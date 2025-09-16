import superagent from 'superagent';
import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    activeCategory: '',
    categoryList: []
  },
  reducers: {
    category(state, action) {
      state.activeCategory = action.payload;
    },
    setCategoryList(state, action) {
      state.categoryList = action.payload;
    }
  }
});

export const getCategories = () => async dispatch => {
  try {
    let response = await superagent.get(`${process.env.REACT_APP_API}/categories`);
    dispatch(setCategoryList(response.body)); // fixed: no .results
  } catch (error) {
    console.error('Error fetching categories:', error.message);
  }
};

export const { category, setCategoryList } = categorySlice.actions;
export default categorySlice.reducer;
