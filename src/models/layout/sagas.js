import { delay, put, takeEvery } from 'redux-saga/effects';
import {
  LAYOUT_SETDATABASES,
  LAYOUT_SETDATALIST,
  LAYOUT_UPDATEDATABASES,
  LAYOUT_UPDATECOLLECTIONS,
  LAYOUT_UPDATEDATALIST,
} from './actions';

export function* setDatabases({ type, payload }) {
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

export function* setDataList({ type, payload: { collections, dataList } }) {
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

export function* watch() {
  yield takeEvery(LAYOUT_SETDATABASES, setDatabases);
  yield takeEvery(LAYOUT_SETDATALIST, setDataList);
}

export default {
  setDatabases,
  setDataList,
  watch,
};
