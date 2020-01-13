import React from 'react';
import Layout from './layout';
import Router from './router';
import './style.css';

export default () => {
  return (
    <Layout>
      <Router />
    </Layout>
  );
};
