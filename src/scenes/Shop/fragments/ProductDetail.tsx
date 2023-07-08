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
} from '@mui/material';
import Header from '../../../components/Header';
import FlexBetween from '../../../components/FlexBetween';
import { AccountCircle } from '@mui/icons-material';
import useStyles from '../useStyles';
import { useState } from 'react';

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
  const { classes } = useStyles();

  const [quanity, setQuantity] = useState<string>('10');

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value);
  };

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
                src={'/assets/min-sofa1.png'}
                sx={{ background: theme.palette.secondary[100], borderRadius: '0.25rem' }}
              />
              <Box
                component='img'
                width='83px'
                height='55px'
                alt={'min-image'}
                src={'/assets/min-sofa2.png'}
                sx={{ background: theme.palette.secondary[100], borderRadius: '0.25rem' }}
              />
              <Box
                component='img'
                width='83px'
                height='55px'
                alt={'min-image'}
                src={'/assets/min-sofa3.png'}
                sx={{
                  background: theme.palette.secondary[100],
                  borderRadius: '0.25rem',
                }}
              />
            </Box>

            {/* MAIN IMAGE DISPLAY */}
            <Box
              component='img'
              maxWidth='481px'
              height='300px'
              alt={'image'}
              src={'/assets/sofa.png'}
              sx={{
                backgroundColor: theme.palette.secondary[100],
                borderRadius: '0.45rem',
                objectFit: 'cover',
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
            Asgaard sofa
          </Typography>
          <Typography variant='subtitle1' sx={{ ...classes.subtitle, fontSize: '1rem' }}>
            Rs 250,000
          </Typography>
          <Typography
            variant='subtitle1'
            sx={{ ...classes.title, fontSize: '0.85rem', width: '424px' }}
          >
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
            highs for a sound.
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
              label='Age'
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
            <Button sx={{ ...classes.button, color: '#000' }}>Add to Cart</Button>
          </FlexBetween>
          <Divider sx={{ m: '1rem 0' }} />
          <Box display='flex' flexDirection={'column'} gap='0.85rem'>
            <Typography variant='subtitle1' sx={{ ...classes.subtitle, fontSize: '0.85rem' }}>
              SKU : ss0011
            </Typography>
            <Typography variant='subtitle1' sx={{ ...classes.subtitle, fontSize: '0.85rem' }}>
              Category : Sofa
            </Typography>
            <Typography variant='subtitle1' sx={{ ...classes.subtitle, fontSize: '0.85rem' }}>
              Tags : Single Seater, Luxury
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Tabs>
          <Tab value='1'></Tab>
        </Tabs>
      </Box>
    </>
  );
};

export default ProductDetail;
