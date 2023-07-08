import Banner from './fragments/Banner';
import FeaturedProducts from './fragments/FeaturedProducts';
import './dashboard.styles.css';
import ImageListings from './fragments/ImageList';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api';

const Dashboard = () => {
  // Queries
  const query = useQuery({ queryKey: ['products'], queryFn: getProducts });
  return (
    <>
      <Banner />
      <FeaturedProducts query={query} />
      <ImageListings />
    </>
  );
};

export default Dashboard;
