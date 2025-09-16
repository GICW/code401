import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { category, getCategories } from '../../store/categories';

const useStyles = makeStyles((theme) => ({
  categories: { margin: theme.spacing(3) }
}));

const Categories = ({ categories, category, getCategories }) => {
  const classes = useStyles();

  useEffect(() => { getCategories(); }, [getCategories]);

  if (!categories) return <div>Loading categories...</div>;

  return (
    <div className={classes.categories}>
      <Typography variant="h5">Browse our Categories</Typography>
      <ButtonGroup variant="text" color="primary">
        {categories.map(cat =>
          <Button key={cat.id} color="primary" onClick={() => category(cat.name)}>
            {cat.displayName || cat.name}
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
};

const mapStateToProps = state => ({ categories: state.categories.categoryList });
const mapDispatchToProps = { category, getCategories };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
