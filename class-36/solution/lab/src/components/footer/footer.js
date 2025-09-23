import React from 'react';

import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  footer: {
    backgroundColor: '#eee',
    padding: theme.spacing(6),
  },
}));

const Footer = props => {

  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        &copy; 2026 Javascript 401
        </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        React + Redux + Material UI
        </Typography>
    </footer>
  );
}

export default Footer;
