import React from 'react';
import { connect } from 'react-redux';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Products = ({ products, activeCategory })  => {

  const { classes } = useStyles();

  const activeProducts = products.filter(product => product.category === activeCategory);

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {activeProducts.map((product) => (
            <Grid item key={product.name} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`https://source.unsplash.com/random?${product.name}`}
                  title={product.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Add To Cart
                  </Button>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

const mapStateToProps = ({ store }) => ({
  products: store.products,
  activeCategory: store.activeCategory
});

export default connect(mapStateToProps)(Products);
