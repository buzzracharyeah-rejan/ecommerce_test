import { Box } from '@mui/material';
import React from 'react';
import FlexBetween from '../../components/FlexBetween';
import Navbar from '../../components/Navbar';

const Layout = () => {
  return (
    <Box>
      <FlexBetween>
        <Navbar />
      </FlexBetween>
    </Box>
  );
};

export default Layout;
