import { Box, SxProps } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  sx?: SxProps;
};
const FlexBetween = ({ className, children, sx }: Props) => {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      gap='1.5rem'
      className={className}
      sx={sx}
    >
      {children}
    </Box>
  );
};

export default FlexBetween;
