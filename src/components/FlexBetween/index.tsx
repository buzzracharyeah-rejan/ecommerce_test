import { Box } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
};
const FlexBetween = ({ children }: Props) => {
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' gap='1.5rem'>
      {children}
    </Box>
  );
};

export default FlexBetween;
