import { Box, Skeleton } from '@mui/material';
import React from 'react';
import useStyles from '../../scenes/Dashboard/useStyles';

const SkeletonLoader = React.memo(() => {
  const classes = useStyles();
  return (
    <Box sx={classes.card}>
      <Skeleton variant='rounded' sx={classes.cardMedia} />
      <Skeleton variant='text' sx={classes.cardContent} />
    </Box>
  );
});

export default SkeletonLoader;
