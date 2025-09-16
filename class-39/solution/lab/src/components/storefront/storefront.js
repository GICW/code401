import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CurrentCategory from './current-category';
import Categories from './categories';
import Products from './products';
import SimpleCart from '../cart/simple-cart';
import { category } from '../../store/categories';

const Storefront = ({ categories, activeCategory, category }) => {

  // Set first category as default if none
  useEffect(() => {
    if (!activeCategory && categories.length > 0) {
      category(categories[0].name);
    }
  }, [activeCategory, categories, category]);

  return (
    <>
      <Categories />
      <CurrentCategory />
      <Products />
      <SimpleCart />
    </>
  );
};

const mapStateToProps = state => ({
  categories: state.categories.categoryList,
  activeCategory: state.categories.activeCategory
});

const mapDispatchToProps = { category };

export default connect(mapStateToProps, mapDispatchToProps)(Storefront);
