import { useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();

  const classes = {
    title: {
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
    },
    subtitle: {
      color: '#9F9F9F',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    body: {
      color: '#000',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    orderBtn: {
      border: '1px solid #000',
      padding: '0.5rem 1.5rem',
      color: '#000',
      letterSpacing: '1.25px',
    },
    highlightPrice: {
      color: 'var(--primary, #B88E2F)',
      fontFamily: 'Poppins',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 'normal',
    },
    justifyContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    justifyContentCol: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    submitBtn: {
      background: theme.palette.secondary.main,
      padding: '0.5rem 2.5rem',
      '&:hover': {
        background: theme.palette.secondary[400],
      },
    },
  };
  return { classes };
};

export default useStyles;
