import React from 'react';
import { connect } from 'react-redux';
import { When } from 'react-if';

import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';

const useStyles = makeStyles()((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  categoryName: {
    textTransform: 'uppercase'
  }
}));

const CurrentCategory = ({ activeCategory }) => {

  const { classes } = useStyles();

  return (
    <When condition={!!activeCategory}>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" className={classes.categoryName} align="center" color="textPrimary" gutterBottom>
            {activeCategory}
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Category Description Goes Here
        </Typography>
        </Container>
      </div>
    </When>
  );
}

const mapStateToProps = ({ store }) => ({
  activeCategory: store.activeCategory
});

export default connect(mapStateToProps)(CurrentCategory);
