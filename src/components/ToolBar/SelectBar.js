import React, { useEffect } from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';

import {
  LAYOUT_GETDATABASES,
  LAYOUT_SETDATABASES,
  LAYOUT_SELECTDATABASE,
} from 'models/layout';

const { Option } = Select;

const SelectBar = ({ databases, getDatabases, setDatabases, selectDatabase, currentDatabase }) => {
  useEffect(() => {
    if (!databases.length) {
      getDatabases();
    }
  }, [databases.length, setDatabases]);

  const handleSelect = (value) => {
    selectDatabase(value);
  };

  return (
    <Select
      style={{ marginRight: 28, width: 200 }}
      onSelect={handleSelect}
      value={currentDatabase}
     >
      <Option key='default' value='default'>Choose Database...</Option>
      {
        databases.map(database => (
          <Option
            key={database}
            value={database}
          >
            {database}
          </Option>
        ))
      }
    </Select>
  );
};

const mapStateToProps = ({ layout: { databases, currentDatabase } }) => ({
  databases,
  currentDatabase
});

const mapDispatchToProps = (dispatch) => ({
  getDatabases: () => dispatch({
    type: LAYOUT_GETDATABASES,
  }),
  setDatabases: (databases) => dispatch({
    type: LAYOUT_SETDATABASES,
    payload: {
      databases
    }
  }),
  selectDatabase: (currentDatabase) => dispatch({
    type: LAYOUT_SELECTDATABASE,
    payload: {
      currentDatabase
    }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectBar);
