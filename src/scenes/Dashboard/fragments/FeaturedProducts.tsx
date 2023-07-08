import React, { useState } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button, Fade } from '@mui/material';
import useStyles from '../useStyles';
import { UseQueryResult } from '@tanstack/react-query';
import { Product } from '../../../api';
import SkeletonLoader from '../../../components/Skeleton/CardLoader';

type FeaturedProductsProps = {
  query: UseQueryResult<Product[], unknown>;
};

const FeaturedProducts = ({ query: { error, isLoading, data } }: FeaturedProductsProps) => {
  const classes = useStyles();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleCardHover = (cardId: string) => {
    setHoveredCard(cardId);
    setIsHovered(true);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
    setIsHovered(false);
  };

  if (isLoading) {
    return (
      <Box
        display='flex'
        flexWrap='wrap'
        justifyContent='flex-start'
        alignItems='center'
        gap='42px'
      >
        {new Array(8).fill(null).map((_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </Box>
    );
  }

  return (
    <Box m='3.5rem 2.5rem'>
      <Typography variant='h4' textAlign='center' sx={classes.title}>
        Our Products
      </Typography>
      <Box display='flex' flexWrap='wrap' justifyContent='flex-start' gap='42px'>
        {data?.slice(0, 8)?.map((item) => (
          <Box
            key={item.id}
            position='relative'
            onMouseEnter={() => handleCardHover(item.id.toString())}
            onMouseLeave={handleCardLeave}
          >
            <Card sx={classes.card} elevation={0}>
              <CardMedia
                component='img'
                alt='green iguana'
                image={item?.image}
                sx={classes.cardMedia}
              />
              <CardContent sx={classes.cardContent}>
                <Typography gutterBottom variant='h5' component='div'>
                  {item?.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {item?.description}
                </Typography>
              </CardContent>
            </Card>

            <Fade in={hoveredCard === item.id.toString()}>
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
