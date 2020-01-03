import React from 'react';
import { Layout } from 'antd';
import './styles.css';

const { Header, Content, Footer } = Layout;

export default ({ children }) => {
  return (
    <Layout style={{ height: '100%' }}>
      <Header>Header</Header>
      <Content>
        {children}
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
