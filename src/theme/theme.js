import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '',
  //   },
  //   secondary: {
  //     main: '',
  //   },
  // },
  typography: {
    fontFamily: ['Serenata Vantages', 'sans-serif'].join(','),
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '12px',
          fontFamily: ['Arial', 'sans-serif'].join(','),
          maxWidth: '180px',
        },
      },
    },
  },
});

export default theme;
