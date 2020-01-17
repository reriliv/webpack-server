import { delay, put, takeEvery } from 'redux-saga/effects';
import {
  LAYOUT_GETDATABASES,
  LAYOUT_SETDATABASES,
  LAYOUT_SETDATALIST,
  LAYOUT_UPDATEDATABASES,
  LAYOUT_UPDATECOLLECTIONS,
  LAYOUT_UPDATEDATALIST,
} from './actions';

function* getDatabases() {
  const res = yield fetch('/api/v1/databases', {
    method: 'GET'
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
  }).then(data => {
    if (data.status === 200) {
      // setDatabases(data.data);
      /*put({
        type: LAYOUT_SETDATABASES,
        payload: {
          databases: data.data,
        }
      });*/
      return data;
    }
  }).catch(err => {
    console.error(err);
  });
  console.log(res);
}

function* setDatabases({ type, payload }) {
  yield put({
    type: LAYOUT_UPDATEDATABASES,
    payload,
  });
  const collections = {};
  payload.databases.forEach(database => {
    collections[database] = [];
  });
  yield put({
    type: LAYOUT_UPDATECOLLECTIONS,
    payload: {
      collections
    },
  });
}

function* setDataList({ type, payload: { collections, dataList } }) {
  const newDataList = Object.assign({}, dataList);
  collections.forEach(collection => {
    newDataList[collection] = [];
  });
  yield put({
    type: LAYOUT_UPDATEDATALIST,
    payload: {
      dataList: newDataList,
    },
  });
}

function* watch() {
  yield takeEvery(LAYOUT_GETDATABASES, getDatabases);
  yield takeEvery(LAYOUT_SETDATABASES, setDatabases);
  yield takeEvery(LAYOUT_SETDATALIST, setDataList);
}

export default { watch };
