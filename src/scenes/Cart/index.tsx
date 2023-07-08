import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';
import FlexBetween from '../../components/FlexBetween';
import ItemsTable from './ItemsTable';
import useStyles from './useStyles';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store';

const Cart = () => {
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart);
  const aggSum = cart.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const { classes } = useStyles();

  return (
    <>
      <Header title='Cart' location='Home' location1='Cart' />
      <Container maxWidth='xl' sx={{ p: '2.5rem 1.5rem', m: '3.5rem auto' }}>
        <Grid container>
          {/* LEFT */}
          <Grid item xs={12} md={6} lg={8} sx={{ p: '1rem 2.5rem' }}>
            <ItemsTable cart={cart} />
          </Grid>

          {/* RIGHT */}
          <Grid item xs={12} md={6} lg={4} sx={{ p: '1rem 2.5rem' }}>
            <Box sx={classes.cartContainer}>
              <Typography sx={classes.title} textAlign={'center'}>
                Cart Totals
              </Typography>
              <FlexBetween>
                <Typography variant='h6'>Subtotal</Typography>
                <Typography variant='subtitle1' sx={classes.subtitle}>
                  Rs {aggSum}
                </Typography>
              </FlexBetween>
              <FlexBetween>
                <Typography variant='h6'>Total</Typography>
                <Typography variant='subtitle1' fontSize='1rem'>
                  Rs {aggSum}
                </Typography>
              </FlexBetween>

              <Button sx={classes.orderBtn} onClick={() => navigate('/checkout')}>
                Check Out
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
