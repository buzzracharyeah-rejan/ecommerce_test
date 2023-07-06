import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
  useTheme,
  Hidden,
  Fade,
  Backdrop,
} from '@mui/material';
import { dataSource } from '../../../data';
import { useState } from 'react';

const FeaturedProducts = () => {
  const theme = useTheme();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCardHover = (cardId: string) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const classes = {
    card: {
      maxWidth: '285px',
      maxHeight: '446px',
      gap: '1rem',
      m: '1rem 0.5rem',
      borderRadius: 'none',
    },
    cardMedia: {
      width: '285px',
      height: '301px',
      flexShrink: '0',
    },
    cardContent: {
      width: '285px',
      height: '145px',
      flexShrink: '0',
      backgroundColor: 'var(--color-light-bg, #F4F5F7)',
    },
    title: {
      fontSize: '40px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '120%',
      m: '1.5rem',
    },
    button: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      width: '202px',
      height: '48px',
      textAlign: 'center',
      border: `1px solid ${theme.palette.secondary[200]}`,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main[600],
      },
    },
  };

  return (
    <Box m='3.5rem 2.5rem'>
      <Typography variant='h4' textAlign='center' sx={classes.title}>
        Our Products
      </Typography>
      <Box display='flex' flexWrap='wrap' justifyContent='flex-start' gap='42px'>
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
      <Box display='flex' justifyContent='center' m='2.5rem 0'>
        <Button variant='contained' size='small' sx={classes.button}>
          Show more
        </Button>
      </Box>
    </Box>
  );
};

export default FeaturedProducts;
