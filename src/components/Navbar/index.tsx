import { AppBar, Box, IconButton, InputBase, Link, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import FlexBetween from '../FlexBetween';
import logo from '/assets/logo.png';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

/* ASSETS */
import './navbar.styles.css';
import {
  FavoriteBorder,
  PersonOutlined,
  SearchOutlined,
  ShoppingCartCheckoutOutlined,
} from '@mui/icons-material';

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<boolean>(false);

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
            <Link component={RouterLink} to='/shop' className='nav-item'>
              Shop
            </Link>
            <Link component={RouterLink} to='/about' className='nav-item'>
              About
            </Link>
            <Link component={RouterLink} to='/contact' className='nav-item'>
              Contact
            </Link>
          </FlexBetween>
        </Box>

        <FlexBetween sx={{ width: '460px' }}>
          <InputBase
            placeholder='Search Product'
            sx={{
              background: '#f3f3f3',
              visibility: search ? 'visible' : 'hidden',
              p: '0.5rem 0.85rem',
            }}
          />
          <IconButton onClick={() => setSearch(!search)}>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <PersonOutlined />
          </IconButton>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
          <IconButton onClick={() => navigate('/cart')}>
            <ShoppingCartCheckoutOutlined />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
