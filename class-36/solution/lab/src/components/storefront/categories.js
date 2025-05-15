import React from 'react';
import { connect } from 'react-redux';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';

import { category, reset } from '../../store/products.js';

const useStyles = makeStyles()((theme) => ({
  categories: {
    margin: theme.spacing(3),
  },
}));

const Categories = props => {

  const { classes } = useStyles();

  return (
    <div className={classes.categories} data-testid="categories">
      <Typography variant="h5">Browse our Categories</Typography>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        {props.categories.map(cat =>
          <Button
            key={cat._id}
            color="primary"
            onClick={() => props.category(cat.name)}
          >
            {cat.displayName || cat.name}
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
}

const mapStateToProps = ({ store }) => ({
  categories: store.categories,
});

const mapDispatchToProps = { category, reset };

// Instead of exploring our component, export it after it's been connected to the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
