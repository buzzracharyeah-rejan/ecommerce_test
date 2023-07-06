import { Box, Container, Typography } from '@mui/material';
import Header from '../../components/Header';
import ContactForm from './fragments/ContactForm';

const Contact = () => {
  return (
    <>
      <Header title='Contacts' location='Home' location1='Contact' />
      <Container maxWidth='lg' sx={{ my: '2.5rem' }}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          gap='1rem'
          my='3.5rem'
        >
          <Typography
            variant='h4'
            textAlign={'center'}
            fontWeight={600}
            lineHeight={'normal'}
            fontSize={'1.8rem'}
          >
            Get In Touch With Us
          </Typography>
          <Typography variant='body1' textAlign={'center'} width={'644px'} color={'#9F9F9F'}>
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </Typography>
        </Box>
        <ContactForm />
      </Container>
    </>
  );
};

export default Contact;
