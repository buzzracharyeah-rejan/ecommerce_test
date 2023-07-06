import { Box } from '@mui/material';
import CustomBreadCrumb from '../BreadCrumb';

type HeaderProps = {
  title?: string;
  location?: string;
  location1?: string;
};
const Header = ({ title, location, location1 }: HeaderProps) => {
  const classes = {
    header: {
      background: 'url(/assets/background.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    justifyCenter: {
      display: 'grid',
      alignItems: 'center !important',
      justifyContent: 'center',
    },
  };
  return (
    <Box height='316px' sx={classes.header} position='relative'>
      <Box position='absolute' top='50%' left='50%' sx={{ transform: 'translate(-50%, -50%)' }}>
        <CustomBreadCrumb title={title} location={location} location1={location1} />
      </Box>
    </Box>
  );
};

export default Header;
