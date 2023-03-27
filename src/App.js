import { Container } from '@mui/material';
import React from 'react';
import Footer from './components/Footer';
import Router from './router/router';
import { createTheme, ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={'lg'}>
        <Header />
        <Router />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
