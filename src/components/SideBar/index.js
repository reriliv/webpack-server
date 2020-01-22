import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
// import styles from './style.css';
import {
  LAYOUT_GETDATALIST, LAYOUT_GETCOLLECTIONS, LAYOUT_SELECTCOLLECTION,
} from 'models/layout/actions';

const { Sider } = Layout;

const SideBar = ({
  collections, currentDatabase, getCollections, currentCollection, selectCollection, dataList, getDataList, updateDataList,
}) => {
  useEffect(() => {
    if (collections[currentDatabase] && !collections[currentDatabase].length) {
      getCollections(currentDatabase, collections, dataList);
    }
  }, [collections, currentDatabase, dataList, getCollections]);

  useEffect(() => {
    if (dataList[currentCollection] && !dataList[currentCollection].length) {
      getDataList(currentDatabase, currentCollection, dataList);
      /*fetch(`/api/v1/database/${currentDatabase}/collection/${currentCollection}`, {
        method: 'GET'
      }).then(res => {
        if (res.ok) return res.json();
      }).then(res => {
        const list = res.data;
        const newDataList = Object.assign({}, dataList);
        newDataList[currentCollection] = list;
        updateDataList(newDataList);
      }).catch(err => {
        console.err(err);
      });*/
    }
  }, [currentCollection, currentDatabase, dataList, updateDataList]);

  const handleSelectCollection = ({ item, key, keyPath }) => {
    selectCollection(key);
  };

  return (
    <Sider width={200} style={{ position: 'fixed', left: 0, height: '100%', background: '#fff', overflow: 'auto' }}>
      <Menu mode="inline" style={{ borderRight: 0 }} onClick={handleSelectCollection}>
        {
          collections[currentDatabase] ?
            collections[currentDatabase].map(collection => (
              <Menu.Item key={collection} >{collection}</Menu.Item>
            ))
            : null
        }
      </Menu>
    </Sider>
  );
};

const mapStateToProps = ({ layout: { collections, currentDatabase, currentCollection, dataList } }) => ({
  collections, currentDatabase, currentCollection, dataList,
});

const mapDispatchToProps = (dispatch) => ({
  getCollections: (currentDatabase, collections, dataList) => dispatch({
    type: LAYOUT_GETCOLLECTIONS,
    payload: {
      currentDatabase,
      collections,
      dataList,
    },
  }),
  selectCollection: (currentCollection) => dispatch({
    type: LAYOUT_SELECTCOLLECTION,
    payload: {
      currentCollection
    }
  }),
  getDataList: (currentDatabase, currentCollection, dataList) => dispatch({
    type: LAYOUT_GETDATALIST,
    payload: {
      currentDatabase, currentCollection, dataList,
    },
  }),
  updateDataList: (dataList) => dispatch({
    type: 'layout/updateDataList',
    payload: {
      dataList
    }
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
