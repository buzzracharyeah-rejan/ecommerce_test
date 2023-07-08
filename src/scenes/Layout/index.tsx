import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import FlexBetween from '../../components/FlexBetween';
import Navbar from '../../components/Navbar';
import Footer from '../Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Layout = () => {
  const queryClient = new QueryClient();
  return (
    <Box>
      <FlexBetween>
        <Navbar />
      </FlexBetween>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      <Footer />
    </Box>
  );
};

export default Layout;
