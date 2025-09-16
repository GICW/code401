import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  cart: { padding: theme.spacing(2), background: '#f5f5f5', margin: theme.spacing(2) },
}));

const SimpleCart = ({ cart }) => {
  const classes = useStyles();

  if (!cart || cart.length === 0) return <div className={classes.cart}>Cart is empty</div>;

  return (
    <div className={classes.cart}>
      <Typography variant="h6">Your Cart</Typography>
      <List>
        {cart.map(item => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`Qty: 1`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const mapStateToProps = state => ({ cart: state.cart });
export default connect(mapStateToProps)(SimpleCart);
