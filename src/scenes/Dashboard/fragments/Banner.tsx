import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';

import '../dashboard.styles.css';

const Banner = () => {
  const theme = useTheme();
  const classes = {
    bannerContainer: {
      height: '1007.93px',
      background: "url('/assets/heroImage.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: '0.85',
      position: 'relative',
      zIndex: 1,
    },
    bannerAdv: {
      letterSpacing: '3px',
      fontWeight: '600',
      fontSize: '16px',
      '&.MuiTypography-subtitle1': {},
    },
    bannerTitle: {
      color: '#B88E2F',
      fontSize: '52px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '65px',
      '&.MuiTypography-h6': {},
    },
    bannerDesc: {
      width: '546px',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '24px',
      letterSpacing: '1.2px',
      m: '1rem 0',
      '&.MuiTypography-body1': {},
    },
    button: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      p: '1.7rem 4rem',
      width: '190px',
      height: '24px',
      textAlign: 'center',
      borderRadius: 'none',
      '&:hover': {
        backgroundColor: theme.palette.secondary[400],
        color: theme.palette.primary.main,
      },
    },
  };
  return (
    <Box component='main' sx={classes.bannerContainer}>
      <Box
        display='flex'
        flexDirection='column'
        gap='1.5rem'
        className='banner-box'
        sx={{ backgroundColor: theme.palette.secondary[100] }}
      >
        <Box width='559px'>
          <Typography variant='subtitle1' sx={classes.bannerAdv}>
            New Arrival
          </Typography>
          <Typography variant='h6' sx={classes.bannerTitle}>
            Discover Our New Collection
          </Typography>
          <Typography variant='body1' className='banner-main__desc' sx={classes.bannerDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis.
          </Typography>
        </Box>

        <Button variant='contained' size='small' sx={classes.button}>
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
