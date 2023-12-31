import { useForm } from 'react-hook-form';
import { FormInputText } from '../../../components/CustomFormInputs';
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import FlexBetween from '../../../components/FlexBetween';

const ContactForm = () => {
  const theme = useTheme();
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
    <>
      <Grid container>
        {/* LEFT SIDE */}
        <Grid item md={6} lg={4} sx={{ p: '1.25rem' }}>
          <Box display='flex' flexWrap='wrap' justifyContent='space-around' gap='2.8rem'>
            <FlexBetween>
              <Box component='img' alt='location' src='/assets/location.svg' />
              <Box
                justifyContent='center'
                alignItems='center'
                display='flex'
                flexDirection={'column'}
                width='212px'
              >
                <Typography variant='h6'>Address</Typography>
                <Typography variant='body2' textAlign={'center'}>
                  236 5th SE Avenue, New York NY10000, United States
                </Typography>
              </Box>
            </FlexBetween>
            <FlexBetween>
              <Box component='img' alt='location' src='/assets/clock.svg' />
              <Box
                justifyContent='center'
                alignItems='center'
                display='flex'
                flexDirection={'column'}
                width='212px'
              >
                <Typography variant='h6'>Working Time</Typography>
                <Typography variant='body2' textAlign={'center'}>
                  Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                </Typography>
              </Box>
            </FlexBetween>
            <FlexBetween>
              <Box component='img' alt='location' src='/assets/location.svg' />
              <Box
                justifyContent='center'
                alignItems='center'
                display='flex'
                flexDirection={'column'}
                width='212px'
              >
                <Typography variant='h6'>Address</Typography>
                <Typography variant='body2' textAlign={'center'}>
                  236 5th SE Avenue, New York NY10000, United States
                </Typography>
              </Box>
            </FlexBetween>
          </Box>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} md={6} lg={8}>
          <Box
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3.5rem',
            }}
          >
            <Box minWidth='529px'>
              <FormInputText name='name' control={control} label='Your name' />
            </Box>

            <Box minWidth='529px'>
              <FormInputText name='email' control={control} label='Email Address' />
            </Box>
            <Box minWidth='529px'>
              <FormInputText name='subject' control={control} label='Subject' />
            </Box>
            <Box minWidth='529px'>
              <FormInputText name='message' control={control} label='Message' />
            </Box>
          </Box>
          <Box mt='2.5rem' mb='0.5rem' textAlign={'center'}>
            <Button
              type='submit'
              sx={{
                background: theme.palette.secondary.main,
                padding: '0.5rem 2.5rem',
                '&:hover': {
                  background: theme.palette.secondary[400],
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactForm;
