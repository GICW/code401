import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  toolbar: {
    background: '#f5f5f5',
    color: "#111",
  },
  appBar: {
    zIndex: 1000
  },
}));

const Header = props => {

  const { classes } = useStyles();

  return (
    <AppBar className={classes.appBar} position="relative">
      <Toolbar className={classes.toolbar}>
        <Grid container>
          <Grid item xs>
            <Typography variant="h4">
              Our Store
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
