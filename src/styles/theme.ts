import { PaletteMode } from '@mui/material';

const reverseToken = (token: Record<string, Record<number, string>>) => {
  const reversedToken: Record<string, Record<string, Record<number, string>>> = {};
  Object.entries(token).forEach(([key, value]) => {
    const keys = Object.keys(value);
    const values = Object.values(value);
    const length = keys.length;
    const reversedObj: Record<string, any> = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedToken[key] = reversedObj;
  });
  return reversedToken;
};

const shades = {
  primary: {
    100: '#ffffff',
    200: '#ffffff',
    300: '#fefeff',
    400: '#fefeff',
    500: '#fefeff',
    600: '#cbcbcc',
    700: '#989899',
    800: '#666666',
    900: '#333333',
  },
  secondary: {
    100: '#cecfd1',
    200: '#9d9fa3',
    300: '#6b6e76',
    400: '#3a3e48',
    500: '#090e1a',
    600: '#070b15',
    700: '#050810',
    800: '#04060a',
    900: '#020305',
  },
};

const shadesDark = reverseToken(shades);

export const themeSettings = (mode: PaletteMode) => {
  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              ...shades.primary,
              main: shades.primary[400],
            },
            secondary: {
              ...shades.secondary,
              main: shades.secondary[400],
            },
          }
        : {
            primary: {
              ...shadesDark,
              main: shades.primary[400],
            },
            secondary: {
              ...shadesDark.secondary,
              main: shades.secondary[300],
            },
          }),
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};
