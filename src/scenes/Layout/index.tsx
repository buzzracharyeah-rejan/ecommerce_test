import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import FlexBetween from '../../components/FlexBetween';
import Navbar from '../../components/Navbar';
import Footer from '../Footer';

const Layout = () => {
  return (
    <Box>
      <FlexBetween>
        <Navbar />
      </FlexBetween>
      <Container maxWidth='xl'>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
