import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shortener from './pages/Shortener';
import Stats from './pages/stats';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Shortener />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  );
};

export default App;
