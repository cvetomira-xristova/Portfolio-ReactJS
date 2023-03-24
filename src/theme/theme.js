import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Serenata Vantages', 'sans-serif'].join(','),
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '12px',
          fontFamily: ['Arial', 'sans-serif'].join(','),
        },
      },
    },
  },
});

export default theme;
