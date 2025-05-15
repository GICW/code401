import React from 'react';
import { connect } from 'react-redux';
import { When } from 'react-if';

import './simple-cart.scss';

const SimpleCart = props => {

  return (
    <When condition={props.cart.length >= 1}>
      <div className="simple-cart">
        <ul>
          {props.cart.map(item =>
            <li key={item.name}>{item.name}</li>
          )}
        </ul>
      </div>
    </When>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

// Instead of exporing our component, export it after it's been connected to the Redux store.
export default connect(mapStateToProps)(SimpleCart);
