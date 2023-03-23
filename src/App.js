import { Container } from '@mui/material';
import React from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Router from './router/router';

function App() {
  return (
    <Container fixed>
      <Navigation />
      <Router />
      <Footer />
    </Container>
  );
}

export default App;
