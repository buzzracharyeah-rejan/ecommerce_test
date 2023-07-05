import { Box, Divider, Link, Button, InputBase, Typography, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import FlexBetween from '../../components/FlexBetween';

import './footer.styles.css';

const Footer = () => {
  return (
    <>
      <Divider />
      <Box p='48px 100px 38px 100px'>
        <FlexBetween className='footer' sx={{ alignItems: 'flex-start' }}>
          <Box className='footer__meta' display='flex' flexDirection='column' gap='4.5rem'>
            <Typography variant='h4' className='footer__meta-title'>
              Funiro.
            </Typography>
            <Typography variant='body1' className='footer__meta-content'>
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </Typography>
          </Box>

          <Box display='flex' flexDirection='column' gap='3.5rem'>
            <Typography variant='subtitle2' className='subtitle'>
              Links
            </Typography>
            <Box component='nav' display='flex' flexDirection='column' gap='1.5rem'>
              <Link component={RouterLink} to='/' className='nav-item'>
                Home
              </Link>
              <Link component={RouterLink} to='/' className='nav-item'>
                Shop
              </Link>
              <Link component={RouterLink} to='/' className='nav-item'>
                About
              </Link>
              <Link component={RouterLink} to='/' className='nav-item'>
                Contact
              </Link>
            </Box>
          </Box>

          <Box display='flex' flexDirection='column' gap='3.5rem'>
            <Typography variant='subtitle2' className='subtitle'>
              Help
            </Typography>
            <Box component='nav' display='flex' flexDirection='column' gap='1.5rem'>
              <Link component={RouterLink} to='/' className='nav-item'>
                Payment Options
              </Link>
              <Link component={RouterLink} to='/' className='nav-item'>
                Returns
              </Link>
              <Link component={RouterLink} to='/' className='nav-item'>
                Policies
              </Link>
            </Box>
          </Box>

          <Box display='flex' flexDirection='column' gap='2.5rem'>
            <Typography variant='subtitle2' className='subtitle'>
              Newsletter
            </Typography>
            <Box display='flex' flexDirection='row' gap='1rem'>
              <InputBase
                placeholder='Enter Your Email Address'
                sx={{
                  '& .MuiInputBase-input': {
                    p: '0.4rem 0.85rem',
                    borderBottom: '1px solid #000',
                    borderRadius: '0.35rem',
                  },
                  '& .MuiInputBase-input:focus': {
                    border: '1px solid #f3f3f3',
                    borderBottom: '1px solid #000',
                  },
                }}
              />
              <Button
                variant='text'
                sx={{
                  '&.MuiButton-text': {
                    borderBottom: '1px solid #000',
                    color: '#000',
                    letterSpacing: '1.25px',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </FlexBetween>
        <Divider />
        <Typography variant='subtitle2' sx={{ p: '2.1rem 2.5rem' }}>
          2023 furino. All rights reverved
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
