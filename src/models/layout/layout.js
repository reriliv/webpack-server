export default {
  namespace: 'layout',
  state: {
    databases: [],
    collections: {},
    currentDatabase: 'default',
    currentCollection: '',
    dataList: {}
  },
  subscriptions: {
    setup(action) {
      console.log(action, '订阅');
    }
  },
  reducers: {
    updateDatabases(state, { payload: { databases } }) {
      return {
        ...state,
        databases
      };
    },
    updateCollections(state, { payload: { collections } }) {
      return {
        ...state,
        collections
      };
    },
    selectDatabase(state, { payload: { currentDatabase } }) {
      return {
        ...state,
        currentDatabase,
        currentCollection: ''
      };
    },
    selectCollection(state, { payload: { currentCollection } }) {
      return {
        ...state,
        currentCollection
      };
    },
    updateDataList(state, { payload: { dataList }}) {
      return {
        ...state,
        dataList
      };
    }
  },
  effects: {
    *setDatabases({ payload }, { put }) {
      yield put({
        type: 'updateDatabases',
        payload
      });
      const collections = {};
      payload.databases.forEach(database => {
        collections[database] = [];
      });
      yield put({
        type: 'updateCollections',
        payload: {
          collections
        }
      });
    },
    *setDataList({ payload: { collections, dataList } }, { put }) {
      const newDataList = Object.assign({}, dataList);
      collections.forEach(collection => {
        newDataList[collection] = [];
      });
      yield put({
        type: 'updateDataList',
        payload: {
          dataList: newDataList
        }
      });
    }
  }
};
