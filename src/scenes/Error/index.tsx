import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import FlexBetween from '../../components/FlexBetween';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Container maxWidth='lg' sx={{ p: '5.5rem 0' }}>
      <FlexBetween sx={{ flexDirection: 'column', gap: '2.5rem' }}>
        <Box component='img' src='/assets/error.png' alt='error' />
        <Box>
          <Typography variant='h4' textAlign={'center'} p='1rem 0' fontWeight={600}>
            Opps!
          </Typography>
          <Typography
            variant='subtitle1'
            width={292}
            textAlign={'center'}
            lineHeight={2}
            letterSpacing={1.5}
          >
            We’re sorry. The page you requested could not be found.
          </Typography>
          <Box textAlign={'center'} mt='1.5rem'>
            <Button
              onClick={() => navigate('/home')}
              sx={{
                background: 'rgba(121,173,186)',
                '&:hover': {
                  background: 'rgba(121,173,186,0.8)',
                },
              }}
            >
              Back to the home page
            </Button>
          </Box>
        </Box>
      </FlexBetween>
    </Container>
  );
};

export default Error;
