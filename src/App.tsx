import React, { useMemo } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './styles/theme';
import { useAppSelector } from './store';
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';

import Layout from './scenes/Layout';
import Dashboard from './scenes/Dashboard';

const App = () => {
  const mode = useAppSelector((state) => state.global.mode) as PaletteMode;
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Navigate to='/dashboard' replace />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
      <ThemeProvider theme={theme}></ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
