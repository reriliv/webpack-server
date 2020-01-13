import React from 'react';
import { Layout, Menu } from 'antd';

import SelectBar from './SelectBar';

import styles from './style.css';

const { Header } = Layout;

const ToolBar = () => {
  return (
    <Header className={styles['header']}>
      <SelectBar />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};

export default ToolBar;
