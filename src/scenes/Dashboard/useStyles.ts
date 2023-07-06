import { useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();

  const bannerStyles = {
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
    },
    bannerTitle: {
      color: '#B88E2F',
      fontSize: '52px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '65px',
    },
    bannerDesc: {
      width: '546px',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '24px',
      letterSpacing: '1.2px',
      m: '1rem 0',
    },
    bannerButton: {
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

  const featProductStyles = {
    card: {
      maxWidth: '285px',
      maxHeight: '446px',
      gap: '1rem',
      m: '1rem 0.5rem',
      borderRadius: 'none',
    },
    cardMedia: {
      width: '285px',
      height: '301px',
      flexShrink: '0',
    },
    cardContent: {
      width: '285px',
      height: '145px',
      flexShrink: '0',
      backgroundColor: 'var(--color-light-bg, #F4F5F7)',
    },
    title: {
      fontSize: '40px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '120%',
      m: '1.5rem',
    },
    button: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      width: '202px',
      height: '48px',
      textAlign: 'center',
      border: `1px solid ${theme.palette.secondary[200]}`,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main[600],
      },
    },
    backdrop: {
      position: 'absolute',
      top: 0,
      left: 0,
      background: ' rgba(0, 0, 0, 0.5)',
      zIndex: 10,
    },
  };

  return { ...bannerStyles, ...featProductStyles };
};

export default useStyles;
