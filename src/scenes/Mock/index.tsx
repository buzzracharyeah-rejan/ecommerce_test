import { Breadcrumbs } from '@mui/material';
import CustomBreadCrumb from '../../components/BreadCrumb';
import Banner from '../../components/Banner';

const Mock = () => {
  return (
    <>
      <CustomBreadCrumb title='Home' location='test' location1='super test' />
      <Banner />
    </>
  );
};

export default Mock;
