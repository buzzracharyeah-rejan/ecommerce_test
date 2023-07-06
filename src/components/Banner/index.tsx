import { Box, Typography } from '@mui/material';
import FlexBetween from '../../components/FlexBetween';
import { Dataset } from '@mui/icons-material';

/* ASSETS */
import { bannerData as data } from '../../data';

const Banner = () => {
  const classes = {
    bannerContainer: {
      height: '270px',
      width: '100%',
      padding: '100px 0px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#FAF3EA',
    },
    banner: {
      width: '310px',
      height: '70px',
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
  };
  return (
    <Box sx={classes.bannerContainer}>
      <FlexBetween>
        {data
          .sort((a, b) => a.order - b.order)
          .map((item, index) => (
            <Box key={`${item.meta.title} - ${index}`} sx={classes.banner}>
              <Box component='img' src={item.icon} alt='img' width='60px' height='60px' />
              <Box>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: '1.2rem',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '150%',
                  }}
                >
                  {item?.meta?.title}
                </Typography>
                <Typography
                  variant='subtitle1'
                  sx={{
                    color: 'var(--color-gray-3, #898989)',
                    fontSize: '1rem',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '150%',
                  }}
                >
                  {item?.meta?.desc}
                </Typography>
              </Box>
            </Box>
          ))}
      </FlexBetween>
    </Box>
  );
};

export default Banner;
