import { Box } from '@mui/material';
import Header from '../../components/Header';
import ShoppingItems from './fragments/ShoppingItems';
import Banner from '../../components/Banner';

const Shop = () => {
  return (
    <>
      <Header title='Shop' location='Home' location1='Shop' />
      <ShoppingItems />
      <Banner />
      {/* <Box sx={{ border: '1px solid #000', display: 'flex', justifyContent: 'center ' }}></Box> */}
    </>
  );
};

export default Shop;
