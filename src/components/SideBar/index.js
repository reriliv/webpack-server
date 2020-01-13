import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
// import styles from './style.css';

const { Sider } = Layout;

const SideBar = ({
  collections,
  currentDatabase,
  setCollections,
  currentCollection,
  selectCollection,
  dataList,
  setDataList,
  updateDataList
}) => {

  useEffect(() => {
    if (collections[currentDatabase] && !collections[currentDatabase].length) {
      fetch(`/api/v1/database/${currentDatabase}/collections`, {
        method: 'GET'
      }).then(res => {
        if (res.ok) {
          return res.json();
        }
      }).then(res => {
        if (res.status === 200) {
          const newCollections = Object.assign({}, collections);
          const list = res.data;
          newCollections[currentDatabase] = list;
          setCollections(newCollections);
          setDataList(list, dataList);
        }
      }).catch(err => {
        console.error(err);
      });
    }
  }, [collections, currentDatabase, dataList, setCollections, setDataList]);

  useEffect(() => {
    if (dataList[currentCollection] && !dataList[currentCollection].length) {
      fetch(`/api/v1/database/${currentDatabase}/collection/${currentCollection}`, {
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
      });
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

const mapStateToProps = ({ layout: {
  collections,
  currentDatabase,
  currentCollection,
  dataList
} }) => ({
  collections,
  currentDatabase,
  currentCollection,
  dataList
});

const mapDispatchToProps = (dispatch) => ({
  setCollections: (collections) => dispatch({
    type: 'layout/updateCollections',
    payload: {
      collections
    }
  }),
  selectCollection: (currentCollection) => dispatch({
    type: 'layout/selectCollection',
    payload: {
      currentCollection
    }
  }),
  updateDataList: (dataList) => dispatch({
    type: 'layout/updateDataList',
    payload: {
      dataList
    }
  }),
  setDataList: (collections, dataList) => dispatch({
    type: 'layout/setDataList',
    payload: {
      collections,
      dataList
    }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
