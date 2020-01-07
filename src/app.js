import React from 'react';
import Layout from './layout';
import Router from './router';
import './style.css';
import '__mock__/testmock.js';

export default () => {
  return (
    <Layout>
      <Router />
    </Layout>
  );
};
