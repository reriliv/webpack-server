import { delay, put, takeEvery } from 'redux-saga/effects';

export function* incrementAsync({ type, payload }) {
  yield put({ type: 'COUNTER/INCREMENT', payload });
}

export function* watchIncrementAsync() {
  yield takeEvery('COUNTER/INCREMENT_ASYNC', incrementAsync);
}