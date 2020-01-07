import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Index} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};