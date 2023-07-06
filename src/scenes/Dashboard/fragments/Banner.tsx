import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';

import '../dashboard.styles.css';
import useStyles from '../useStyles';

const Banner = () => {
  const theme = useTheme();
  const classes = useStyles();
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

        <Button variant='contained' size='small' sx={classes.bannerButton}>
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
