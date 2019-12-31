import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './pages/Index';

export default () => {
  return (
    <BrowserRouter>
      <Route path='/' component={Index} />
    </BrowserRouter>
  );
};