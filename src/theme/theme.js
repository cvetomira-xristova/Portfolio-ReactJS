import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B399D4',
    },
    secondary: {
      main: '#836D91',
    },
    gray: {
      main: '#316226',
    },
    white: {
      main: '#FFFFFF',
    },
  },
  breakpoints: {
    values: {
      sm: 480, //using the default tailwind breakpoints
      md: 769,
      lg: 976,
      xl: 1440,
    },
  },
  typography: {
    fontFamily: ['Serenata Vantages', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: '#FFFFFF',
        },
      },
    },
  },
});

export default theme;
