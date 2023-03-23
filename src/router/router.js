import React from 'react';
import { Switch, Route, Routes, BrowserRouter } from 'react-router-dom';
import AboutMePage from '../pages/AboutMePage';
import LandingPage from '../pages/LandingPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about-me' element={<AboutMePage />} />
        {/* <Route path='/:projectName' component={ProjectPage} exact /> */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
