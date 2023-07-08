import { Box, Button, Divider, Grid, Typography, useTheme } from '@mui/material';
import FlexBetween from '../../components/FlexBetween';
import Header from '../../components/Header';
import { useForm } from 'react-hook-form';
import { FormInputText } from '../../components/CustomFormInputs';
import useStyles from './useStyles';

const Checkout = () => {
  const { classes } = useStyles();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <Box m='3.5rem 0'>
      <Header title='Contacts' location='Home' location1='Checkout' />
      <Grid container>
        {/* LEFT */}
        <Grid item xs={12} md={6} lg={5} display={'flex'} flexDirection={'column'}>
          <Box sx={{ ...classes.justifyContentCol, m: '6.5rem 0 2.5rem 0' }}>
            <Typography
              variant='h4'
              textAlign={'center'}
              sx={{
                ...classes.title,
                fontWeight: '600',
                fontSize: '2.1rem',
                letterSpacing: '1.2px',
              }}
            >
              Billing details
            </Typography>
            <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ mt: '1rem' }}>
              <Box sx={{ ...classes.justifyContent }}>
                <Grid container width='453px' gap='0.91rem'>
                  <Grid item xs={12} md={5.8}>
                    <Box>
                      <FormInputText name='fname' control={control} label='First Name' />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={5.8}>
                    <Box>
                      <FormInputText name='lname' control={control} label='Last Name' />
                    </Box>
                  </Grid>
                </Grid>

                <Box width='453px'>
                  <FormInputText name='company' control={control} label='Company Name (Optional)' />
                </Box>
                <Box width='453px'>
                  <FormInputText name='country' control={control} label='Country / Region' />
                </Box>
                <Box width='453px'>
                  <FormInputText name='street' control={control} label='Street address' />
                </Box>
                <Box width='453px'>
                  <FormInputText name='town' control={control} label='Town / City' />
                </Box>
                <Box width='453px'>
                  <FormInputText name='province' control={control} label='Province' />
                </Box>
                <Box width='453px'>
                  <FormInputText name='zip' control={control} label='ZIP code' />
                </Box>
                <Box width='453px'>
                  <FormInputText name='phone' control={control} label='Phone' />
                </Box>
                <Box width='453px'>
                  <FormInputText name='email' control={control} label='Email address' />
                </Box>
                <Box width='453px'>
                  <FormInputText name='additionalInfo' control={control} label='' />
                </Box>
              </Box>
            </Box>
            <Box mt='2.5rem' mb='0.5rem' textAlign={'center'}>
              <Button type='submit' sx={classes.submitBtn}>
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* RIGHT */}
        <Grid item xs={12} md={5} lg={6} mx='2.5rem'>
          <Box sx={{ ...classes.justifyContentCol, m: '6.5rem 0 2.5rem 0' }}>
            <FlexBetween sx={{ m: '1rem 0' }}>
              <Box display='flex' flexDirection={'column'} gap={3}>
                <Typography variant='h6' sx={classes.title}>
                  Product
                </Typography>
                <Typography variant='subtitle1' sx={classes.subtitle}>
                  Asgaard sofa <span style={{ fontWeight: '500', color: '#000' }}>X</span> 1
                </Typography>
                <Typography sx={classes.body}>Subtotal</Typography>
                <Typography sx={classes.body}>Total</Typography>
              </Box>
              <Box display='flex' flexDirection={'column'} gap={3}>
                <Typography sx={classes.title}>Subtotal</Typography>
                <Typography sx={classes.body}>Rs 250,000.00</Typography>
                <Typography sx={classes.body}>Rs 250,000.00</Typography>
                <Typography sx={{ ...classes.highlightPrice, ml: '-2rem' }}>
                  Rs 250,000.00
                </Typography>
              </Box>
            </FlexBetween>
          </Box>
          <Divider />
          <Box sx={{ ...classes.justifyContentCol, m: '2.5rem  0' }}>
            <Box display='flex' justifyContent='flex-start' alignItems='center' gap={2}>
              <Box borderRadius='50%' height='14px' width='14px' sx={{ background: '#000' }} />
              <Typography sx={classes.title}>Direct Bank Transfer</Typography>
            </Box>
            <Typography sx={classes.subtitle}>
              Make your payment directly into our bank account. Please use your Order ID as the
              payment reference. Your order will not be shipped until the funds have cleared in our
              account.
            </Typography>

            <Typography sx={classes.body}>
              Your personal data will be used to support your experience throughout this website, to
              manage access to your account, and for other purposes described in our privacy policy.
            </Typography>
            <Box textAlign={'center'} mt='1rem'>
              <Button sx={classes.orderBtn}>Place order</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;
