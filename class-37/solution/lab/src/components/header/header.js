import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: '#f5f5f5',
    color: "#111",
  },
  appBar: {
    zIndex: 1000
  },
}));

const Header = ({ cart }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="relative">
      <Toolbar className={classes.toolbar}>
<Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h4">Our Store</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Cart ({cart.length})</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Header);
