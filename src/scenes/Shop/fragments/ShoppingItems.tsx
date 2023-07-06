import { useState } from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Fade,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  IconButton,
  useTheme,
  Pagination,
  Container,
  PaginationItem,
} from '@mui/material';
import useStyles from '../../Dashboard/useStyles';
import { dataSource } from '../../../data';
import FlexBetween from '../../../components/FlexBetween';

/* ASSETS */
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ShoppingItems = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  const [configSelect, setConfigSelect] = useState<{ limit: string; sort: string }>({
    limit: '5',
    sort: 'asc',
  });

  const handleCardHover = (cardId: string) => {
    setHoveredCard(cardId);
    setIsHovered(true);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
    setIsHovered(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target);
    setConfigSelect((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handlePageChange = (event: any, value: any) => {
    setPage(value);
  };

  return (
    <Box mb='3.5rem'>
      <Box
        height='100px'
        display='flex'
        alignItems='center'
        px='1.5rem'
        sx={{ background: '#F9F1E7' }}
      >
        <FlexBetween sx={{ width: '100%' }}>
          <Box>
            <FlexBetween>
              <FlexBetween>
                <IconButton>
                  <Box
                    component='img'
                    src='/assets/filter.svg'
                    alt='filter'
                    height='25'
                    width='25'
                  />
                </IconButton>
                <Typography variant='body1'>Filter</Typography>
              </FlexBetween>
              <FlexBetween>
                <IconButton>
                  <Box component='img' src='/assets/grid.svg' alt='filter' height='25' width='25' />
                </IconButton>
                <IconButton>
                  <Box component='img' src='/assets/list.svg' alt='filter' height='25' width='25' />
                </IconButton>
              </FlexBetween>
              |<Typography variant='body1'>Showing 1-16 of 32 results</Typography>
            </FlexBetween>
          </Box>
          <Box>
            <FlexBetween>
              <FlexBetween>
                <Typography variant='body1'>Show</Typography>
                <Box sx={{ minWidth: 70 }}>
                  <FormControl fullWidth>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={configSelect?.limit}
                      name='limit'
                      onChange={handleChange}
                      sx={{ border: 'none', background: theme.palette.primary.main }}
                    >
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </FlexBetween>

              <FlexBetween>
                <Typography variant='body1'>Default</Typography>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={configSelect?.sort}
                      name='sort'
                      onChange={handleChange}
                      sx={{
                        border: 'none',
                        outline: 'none',
                        background: theme.palette.primary.main,
                        '&.Mui-Select': {},
                      }}
                    >
                      <MenuItem value='asc'>Products(A - Z)</MenuItem>
                      <MenuItem value='desc'>Products(Z - A)</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </FlexBetween>
            </FlexBetween>
          </Box>
        </FlexBetween>
      </Box>

      <Box display='flex' justifyContent='center' my='2.5rem'>
        <Box
          display='flex'
          flexWrap='wrap'
          justifyContent='flex-start'
          gap='42px'
          width='90%'
          px='4rem'
        >
          {dataSource.map((item) => (
            <Box
              key={item.id}
              position='relative'
              onMouseEnter={() => handleCardHover(item.id)}
              onMouseLeave={handleCardLeave}
            >
              <Card sx={classes.card} elevation={0}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  image={item?.productMeta?.imageUrl}
                  sx={classes.cardMedia}
                />
                <CardContent sx={classes.cardContent}>
                  <Typography gutterBottom variant='h5' component='div'>
                    {item?.productMeta?.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item?.productMeta?.desc}
                  </Typography>
                </CardContent>
              </Card>

              <Fade in={hoveredCard === item.id}>
                <Button
                  variant='contained'
                  size='small'
                  sx={{
                    ...classes.button,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  Add to cart
                </Button>
              </Fade>
            </Box>
          ))}
        </Box>
      </Box>
      <Box display='flex' justifyContent='center'>
        <Pagination
          onChange={handlePageChange}
          variant='outlined'
          count={5}
          renderItem={(item) => (
            <PaginationItem
              components={{
                previous: ArrowBackIcon,
                next: ArrowForwardIcon,
              }}
              sx={{ borderRadius: '5px' }}
              {...item}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default ShoppingItems;
