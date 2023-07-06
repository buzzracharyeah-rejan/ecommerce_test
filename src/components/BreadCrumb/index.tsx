import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type Props = {
  title?: string;
  location?: string;
  location1?: string;
  location2?: string;
};
const CustomBreadCrumb = ({ title, location, location1, location2 }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  };

  return (
    <Box>
      <Typography variant='h5' textAlign='center' py='0.85rem'>
        {title}{' '}
      </Typography>
      <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
        {location && (
          <Link
            component={RouterLink}
            underline='hover'
            key='1'
            color='inherit'
            to={`/${decodeURIComponent(location)}`}
          >
            {location}
          </Link>
        )}

        {location1 && (
          <Link
            component={RouterLink}
            underline='hover'
            key='2'
            color='inherit'
            to={`/${decodeURIComponent(location1.split(' ').join('-'))}`}
          >
            {location1}
          </Link>
        )}
        {location2 && (
          <Typography key='3' color='text.primary'>
            {location2}
          </Typography>
        )}
      </Breadcrumbs>
    </Box>
  );
};

export default CustomBreadCrumb;
