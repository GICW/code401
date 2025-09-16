import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { When } from 'react-if';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { removeFromCart } from '../../store/cart';

const useStyles = makeStyles((theme) => ({
  drawer: { width: "340px", top: "5em", flexShrink: 0 },
  item: { display: "flex", justifyContent: "space-between", marginBottom: theme.spacing(1) },
  remove: { cursor: "pointer", color: "#fff", background: "#800", borderRadius: "50%", padding: "0 6px" },
  footer: { marginTop: theme.spacing(2), textAlign: "center" }
}));

const SimpleCart = ({ removeFromCart, cart }) => {
  const classes = useStyles();

  const total = cart.items.reduce((sum, i) => sum + i.price, 0);

  return (
    <When condition={cart.items.length > 0}>
      <div className="simple-cart">
        <ul>
          {cart.items.map(item => (
            <li key={item._id} className={classes.item}>
              <Link component={RouterLink} to={`/product/${item._id}`}>{item.name}</Link>
              <span className={classes.remove} onClick={() => removeFromCart(item)}>x</span>
            </li>
          ))}
        </ul>

        <div className={classes.footer}>
          <Typography variant="subtitle1">Total: ${total.toFixed(2)}</Typography>
          <Button variant="contained" color="primary" component={RouterLink} to="/cart">
            Checkout
          </Button>
        </div>
      </div>
    </When>
  );
};

const mapStateToProps = state => ({ cart: state.cart });
const mapDispatchToProps = { removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
