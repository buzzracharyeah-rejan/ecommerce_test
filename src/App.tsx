import React, { useMemo } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './styles/theme';
import { useAppSelector } from './store';
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';

import Layout from './scenes/Layout';
import Dashboard from './scenes/Dashboard';
import Mock from './scenes/Mock';
import Shop from './scenes/Shop';

const App = () => {
  const mode = useAppSelector((state) => state.global.mode) as PaletteMode;
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Navigate to='/dashboard' replace />} />
            <Route path='/home' element={<Navigate to='/dashboard' replace />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/mock' element={<Mock />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
