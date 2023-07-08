const useStyles = () => {
  const classes = {
    title: {
      color: '#000',
      fontSize: '42px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    subtitle: {
      color: '#9F9F9F',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
    },
    button: {
      width: '185px',
      height: '55px',
      borderRadius: '15px',
      border: '1px solid #000',
    },
    controlButton: {
      width: '123px',
      height: '64px',
      flexShrink: '0',
      borderRadius: '10px',
      border: '1px solid #9F9F9F',
      background: '#FFF',
    },
  };
  return { classes };
};

export default useStyles;
