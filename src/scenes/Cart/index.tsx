import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Header from '../../components/Header';
import FlexBetween from '../../components/FlexBetween';

const Cart = () => {
  const classes = {
    cartContainer: {
      background: '#F9F1E7',
      width: '393px',
      height: '390px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      p: '1.5rem 2.5rem',
    },
    title: {
      color: '#000',
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal',
    },
    subtitle: {
      color: '#9F9F9F',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    highlight: {
      color: 'var(--primary, #B88E2F)',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
    },
    orderBtn: {
      border: '1px solid #000',
      padding: '0.5rem 1.5rem',
      color: '#000',
      letterSpacing: '1.25px',
    },
  };
  return (
    <>
      <Header title='Cart' location='Home' location1='Cart' />
      <Container
        maxWidth='xl'
        sx={{ p: '2.5rem 1.5rem', m: '3.5rem auto', border: '1px solid #000' }}
      >
        <Grid container>
          {/* LEFT */}
          <Grid item xs={12} md={6} lg={8}></Grid>
          <Grid item xs={12} md={6} lg={4}>
            {/* RIGHT */}
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