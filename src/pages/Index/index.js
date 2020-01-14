import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
// import styles from './index.css';

const Index = ({ currentCollection, dataList }) => {
  const [columns, setColumns] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    if (dataList[currentCollection]) {
      const newDataSource = [];
      dataList[currentCollection].forEach((item, index) => {
        newDataSource.push({ ...item, key: index });
        if (!index) {
          const keys = Object.keys(item);
          const newColumns = keys.map(key => {
            return { key, title: key, dataIndex: key, textWrap: 'word-break', ellipsis: true };
          });
          setColumns(newColumns);
        }
      });
      setDataSource(newDataSource);
    }
  }, [dataList, currentCollection, columns.length]);

  return (
    <Table
      bordered={true}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

const mapStateToProps = ({ layout: { currentCollection, dataList } }) => ({
  currentCollection,
  dataList
});

export default connect(mapStateToProps)(Index);
