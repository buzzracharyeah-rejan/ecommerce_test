import { Box } from '@mui/material';
import Header from './fragments/Header';
import ShoppingItems from './fragments/ShoppingItems';

const Shop = () => {
  return (
    <>
      <Header />
      <ShoppingItems />
      {/* <Box sx={{ border: '1px solid #000', display: 'flex', justifyContent: 'center ' }}></Box> */}
    </>
  );
};

export default Shop;
