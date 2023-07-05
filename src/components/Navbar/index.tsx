import { AppBar, Box, IconButton, Link, Toolbar } from '@mui/material';
import React from 'react';
import FlexBetween from '../FlexBetween';
import logo from '../../assets/logo.png';
import { Link as RouterLink } from 'react-router-dom';

/* ASSETS */
import './navbar.styles.css';
import {
  FavoriteBorder,
  PersonOutlined,
  SearchOutlined,
  ShoppingCartCheckoutOutlined,
} from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar
      sx={{ position: 'static', background: 'none', boxShadow: 'none', padding: '1.25rem 3.5rem' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          component='img'
          alt='profile'
          src={logo}
          height='32px'
          width='141px'
          sx={{ objectFit: 'cover' }}
        />

        <Box component='nav' maxWidth='430px' flexGrow={1}>
          <FlexBetween>
            <Link component={RouterLink} to='/' className='nav-item'>
              Home
            </Link>
            <Link component={RouterLink} to='/' className='nav-item'>
              Shop
            </Link>
            <Link component={RouterLink} to='/' className='nav-item'>
              About
            </Link>
            <Link component={RouterLink} to='/' className='nav-item'>
              Contact
            </Link>
          </FlexBetween>
        </Box>

        <FlexBetween>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <PersonOutlined />
          </IconButton>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
          <IconButton>
            <ShoppingCartCheckoutOutlined />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
