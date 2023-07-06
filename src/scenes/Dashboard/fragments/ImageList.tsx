import { Box, Container, ImageList, ImageListItem, Typography } from '@mui/material';
import { itemData } from '../../../data';

const ImageListings = () => {
  return (
    <Box display='flex' flexDirection='column' gap='1.5rem' m='3.5rem 1rem'>
      <Typography
        textAlign='center'
        variant='h4'
        sx={{ fontSize: '1.2rem', lineHeight: '150%', fontWeight: 600 }}
      >
        Share your setup with
      </Typography>
      <Typography
        variant='h6'
        component='h2'
        textAlign='center'
        sx={{ fontSize: '40px', fontStyle: 'normal', fontWeight: '700', lineHeight: '120%' }}
      >
        #FuniroFurniture
      </Typography>

      <Container maxWidth='xl'>
        <Box
          maxWidth='xl'
          height='780px'
          overflow='scroll'
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <ImageList
            variant='masonry'
            cols={3}
            gap={8}
            sx={{
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <Box width='451px' height='312px'>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=161&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading='lazy'
                  />
                </ImageListItem>
              ))}
            </Box>
          </ImageList>
        </Box>
      </Container>
    </Box>
  );
};

export default ImageListings;
