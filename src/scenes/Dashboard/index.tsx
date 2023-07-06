import Banner from './fragments/Banner';
import FeaturedProducts from './fragments/FeaturedProducts';
import './dashboard.styles.css';
import ImageListings from './fragments/ImageList';

const Dashboard = () => {
  return (
    <>
      <Banner />
      <FeaturedProducts />
      <ImageListings />
    </>
  );
};

export default Dashboard;
