import { useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  const classes = {
    cartContainer: {
      background: theme.palette.secondary[100],
      width: '393px',
      height: '390px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      p: '1.5rem 2.5rem',
    },
    title: {
      color: '#000',
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal',
    },
    subtitle: {
      color: '#9F9F9F',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    highlight: {
      color: 'var(--primary, #B88E2F)',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
    },
    orderBtn: {
      border: '1px solid #000',
      padding: '0.5rem 1.5rem',
      color: '#000',
      letterSpacing: '1.25px',
    },
    root: {
      display: 'flex',
      height: '100%',
    },
    dataGrid: {
      flexGrow: '1',
    },
  };

  return { classes };
};

export default useStyles;
