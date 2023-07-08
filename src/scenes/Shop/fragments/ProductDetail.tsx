import {
  Box,
  Grid,
  IconButton,
  Button,
  Typography,
  Tabs,
  Tab,
  InputBase,
  InputAdornment,
  Divider,
  useTheme,
  Select,
  SelectChangeEvent,
  MenuItem,
  Skeleton,
} from '@mui/material';
import Header from '../../../components/Header';
import FlexBetween from '../../../components/FlexBetween';
import { AccountCircle } from '@mui/icons-material';
import useStyles from '../useStyles';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Product, getProduct } from '../../../api';
import { addProduct } from '../../../store/slices/cart.slice';
import { useAppDispatch } from '../../../store';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const ProductDetail = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { id: prodId } = useParams();
  const { classes } = useStyles();

  const { error, isLoading, data } = useQuery({
    queryKey: ['producst'],
    queryFn: () => getProduct(prodId!),
  });

  const [quanity, setQuantity] = useState<string>('10');

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = (item: Product) => {
    dispatch(addProduct({ ...item, quanity }));
  };

  if (isLoading) {
    return (
      <Grid container mt='2.5rem' gap='3.5rem'>
        <Grid item sm={12} md={5} lg={4} p='1.5rem 2.85rem'>
          <Skeleton variant='rounded' width={481} height={300} />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={7}
          display={'flex'}
          flexDirection={'column'}
          gap='0.85rem'
          p='1rem 2.5rem 0.25rem 3.25rem'
        >
          <Skeleton variant='rectangular' width={210} height={60} />
          <Skeleton variant='rectangular' width={210} height={60} />
          <Skeleton variant='rectangular' width={424} height={60} />
        </Grid>
      </Grid>
    );
  } else if (error) {
    <Grid container mt='2.5rem' gap='3.5rem'>
      <Typography variant='h4' letterSpacing={1.5}>
        Something went wrong
      </Typography>
    </Grid>;
  } else
    return (
      <>
        <Header location='Home' location1='Shop' />
        <Grid container mt='2.5rem' gap='3.5rem'>
          {/* LEFT */}
          <Grid item sm={12} md={5} lg={4} p='1.5rem 2.85rem'>
            <FlexBetween sx={{ maxWidth: '460px' }}>
              <Box
                display='grid'
                flexDirection='column'
                alignItems='center'
                justifyContent={'flex-start'}
                gap='2rem'
              >
                <Box
                  component='img'
                  width='83px'
                  height='55px'
                  alt={'min-image'}
                  src={data?.image}
                  sx={{
                    background: theme.palette.secondary[100],
                    borderRadius: '0.25rem',
                    objectFit: 'contain',
                  }}
                />
                <Box
                  component='img'
                  width='83px'
                  height='55px'
                  alt={'min-image'}
                  src={data?.image}
                  sx={{
                    background: theme.palette.secondary[100],
                    borderRadius: '0.25rem',
                    objectFit: 'contain',
                  }}
                />
                <Box
                  component='img'
                  width='83px'
                  height='55px'
                  alt={'min-image'}
                  src={data?.image}
                  sx={{
                    background: theme.palette.secondary[100],
                    borderRadius: '0.25rem',
                    objectFit: 'contain',
                  }}
                />
              </Box>

              {/* MAIN IMAGE DISPLAY */}
              <Box
                component='img'
                maxWidth='481px'
                height='300px'
                alt={'image'}
                src={data?.image}
                sx={{
                  backgroundColor: theme.palette.secondary[100],
                  borderRadius: '0.45rem',
                  objectFit: 'contain',
                }}
              />
            </FlexBetween>
          </Grid>

          {/* RIGHT */}
          <Grid
            item
            xs={12}
            md={6}
            lg={7}
            display={'flex'}
            flexDirection={'column'}
            gap='0.85rem'
            p='1rem 2.5rem 0.25rem 3.25rem'
          >
            <Typography variant='h4' sx={{ ...classes.title }}>
              {data?.title}
            </Typography>
            <Typography variant='subtitle1' sx={{ ...classes.subtitle, fontSize: '1rem' }}>
              Rs {data?.price}
            </Typography>
            <Typography
              variant='subtitle1'
              sx={{
                ...classes.title,
                fontSize: '0.85rem',
                width: '424px',
                letterSpacing: '1.2px',
                lineHeight: '20px',
              }}
            >
              {data?.description}
            </Typography>

            <Box>
              <Typography
                variant='subtitle1'
                sx={{ ...classes.subtitle, fontSize: '0.95rem', mb: '0.85rem' }}
              >
                Colors
              </Typography>
              <FlexBetween sx={{ width: '150px' }}>
                <Box width='30px' height='30px' borderRadius='50%' sx={{ background: '#816DFA' }} />
                <Box
                  width='30px'
                  height='30px'
                  borderRadius='50%'
                  sx={{ backgroundColor: '#000000' }}
                />
                <Box
                  width='30px'
                  height='30px'
                  borderRadius='50%'
                  sx={{ backgroundColor: '#B88E2F' }}
                />
              </FlexBetween>
            </Box>
            <FlexBetween sx={{ width: '280px' }}>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={quanity}
                onChange={handleChange}
                sx={{
                  width: '80px',
                  borderRadius: '8px',
                }}
              >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
              </Select>
              <Button
                sx={{ ...classes.button, color: '#000' }}
                onClick={() => handleAddToCart(data!)}
              >
                Add to Cart
              </Button>
            </FlexBetween>
            <Divider sx={{ m: '1rem 0' }} />
            <Box display='flex' flexDirection={'column'} gap='0.85rem'>
              <Typography variant='subtitle1' sx={{ ...classes.subtitle, fontSize: '0.85rem' }}>
                SKU : {data?.id}
              </Typography>
              <Typography variant='subtitle1' sx={{ ...classes.subtitle, fontSize: '0.85rem' }}>
                Category : {data?.category}
              </Typography>
              <Typography variant='subtitle1' sx={{ ...classes.subtitle, fontSize: '0.85rem' }}>
                Tags : {data?.category}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box>
          {/* <Tabs>
          <Tab value='1'></Tab>
        </Tabs> */}
        </Box>
      </>
    );
};

export default ProductDetail;
