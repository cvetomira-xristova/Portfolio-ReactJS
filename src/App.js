import { Container } from '@mui/material';
import React from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Router from './router/router';
import { createTheme, ThemeProvider } from '@mui/material';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={'md'}>
        <Navigation />
        <Router />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
