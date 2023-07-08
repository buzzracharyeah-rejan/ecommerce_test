import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';
import FlexBetween from '../../components/FlexBetween';
import ItemsTable from './ItemsTable';
import useStyles from './useStyles';

const Cart = () => {
  const { classes } = useStyles();
  return (
    <>
      <Header title='Cart' location='Home' location1='Cart' />
      <Container maxWidth='xl' sx={{ p: '2.5rem 1.5rem', m: '3.5rem auto' }}>
        <Grid container>
          {/* LEFT */}
          <Grid item xs={12} md={6} lg={8} sx={{ p: '1rem 2.5rem' }}>
            <ItemsTable />
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
                  Rs 250000
                </Typography>
              </FlexBetween>
              <FlexBetween>
                <Typography variant='h6'>Total</Typography>
                <Typography variant='subtitle1' fontSize='1rem'>
                  Rs 250000
                </Typography>
              </FlexBetween>

              <Button sx={classes.orderBtn}>Check Out</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
