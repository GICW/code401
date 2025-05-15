import React from 'react';

import CurrentCategory from './current-category';
import Categories from './categories';
import Products from './products';
import SimpleCart from '../cart/simple-cart';


const Store = props => {

  return (
    <section className="store">
      <Categories />
      <CurrentCategory />
      <Products />
      <SimpleCart />
    </section>
  );
}

export default Store;
