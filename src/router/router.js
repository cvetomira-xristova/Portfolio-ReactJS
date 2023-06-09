import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AboutMePage from '../pages/AboutMePage';
import LandingPage from '../pages/LandingPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProjectPage from '../pages/ProjectPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about-me' element={<AboutMePage />} />
        <Route path='/work/:projectName' element={<ProjectPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
