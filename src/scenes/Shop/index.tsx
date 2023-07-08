import { Box } from '@mui/material';
import Header from '../../components/Header';
import ProductList from './fragments/ProductList';
import Banner from '../../components/Banner';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api';

const Shop = () => {
  const query = useQuery({ queryKey: ['products'], queryFn: getProducts });

  return (
    <>
      <Header title='Shop' location='Home' location1='Shop' />
      <ProductList query={query} />
      <Banner />
      {/* <Box sx={{ border: '1px solid #000', display: 'flex', justifyContent: 'center ' }}></Box> */}
    </>
  );
};

export default Shop;
