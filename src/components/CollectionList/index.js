import React from 'react';
import { Menu } from 'antd';

const MenuItem = Menu.Item;

const CollectionList = ({ list }) => {
  return (
    <React.Fragment>
      {
        list.map(name => (
          <MenuItem key={name}>{name}</MenuItem>
        ))
      }
    </React.Fragment>
  );
};

export default CollectionList;
