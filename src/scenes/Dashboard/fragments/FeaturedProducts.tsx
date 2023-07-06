import { Box, Card, CardMedia, CardContent, Typography, Button, Fade } from '@mui/material';
import { dataSource } from '../../../data';
import { useState } from 'react';
import useStyles from '../useStyles';

const FeaturedProducts = () => {
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
