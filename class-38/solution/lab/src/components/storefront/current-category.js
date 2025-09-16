import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  heroContent: { padding: theme.spacing(8, 0, 6) },
  categoryName: { textTransform: 'uppercase' }
}));

const CurrentCategory = ({ activeCategory }) => {
  const classes = useStyles();
  if (!activeCategory) return null;

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" className={classes.categoryName}>{activeCategory}</Typography>
        <Typography variant="h5" align="center" color="textSecondary">Category Description Goes Here</Typography>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({ activeCategory: state.categories.activeCategory });
export default connect(mapStateToProps)(CurrentCategory);
