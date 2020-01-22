import { delay, put, takeEvery } from 'redux-saga/effects';
import {
  LAYOUT_GETDATABASES, LAYOUT_SETDATABASES, LAYOUT_GETDATALIST, LAYOUT_SETDATALIST,
  LAYOUT_UPDATEDATABASES, LAYOUT_GETCOLLECTIONS, LAYOUT_UPDATECOLLECTIONS, LAYOUT_UPDATEDATALIST,
} from './actions';
import request from 'utils/request';

function* getDatabases() {
  const databases = yield request.get('/api/v1/databases');
  yield put({
    type: LAYOUT_SETDATABASES,
    payload: {
      databases,
    },
  });
}

function* getCollections({ type, payload: { currentDatabase, collections, dataList } }) {
  const list = yield request.get(`/api/v1/database/${currentDatabase}/collections`);
  const newCollections = Object.assign({}, collections);
  newCollections[currentDatabase] = list;

  yield put({
    type: LAYOUT_UPDATECOLLECTIONS,
    payload: {
      collections: newCollections,
    },
  });

  yield put({
    type: LAYOUT_SETDATALIST,
    payload: {
      list,
      dataList,
    },
  });
}

function* getDataList({ payload: { currentDatabase, currentCollection, dataList } }) {
  const list = yield request.get(`/api/v1/database/${currentDatabase}/collection/${currentCollection}`);
  const newDataList = Object.assign({}, dataList);
  newDataList[currentCollection] = list;
  yield put({
    type: LAYOUT_UPDATEDATALIST,
    payload: {
      dataList: newDataList,
    }
  });
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

function* setDataList({ type, payload: { list, dataList } }) {
  const newDataList = Object.assign({}, dataList);
  list.forEach(item => {
    newDataList[item] = [];
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
  yield takeEvery(LAYOUT_GETCOLLECTIONS, getCollections);
  yield takeEvery(LAYOUT_GETDATALIST, getDataList);
  yield takeEvery(LAYOUT_SETDATALIST, setDataList);
}

export default { watch };
