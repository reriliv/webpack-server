import { delay, put, takeEvery } from 'redux-saga/effects';

export function* incrementAsync({ type, payload }) {
  console.log(type);
  yield put({ type: 'COUNTER/INCREMENT', payload });
}

export function* decrementAsync({ type, payload }) {
  console.log(type);
  yield put({ type: 'COUNTER/DECREMENT', payload });
}

export function* watchIncrementAsync() {
  delay(1000);
  yield takeEvery('COUNTER/INCREMENT_ASYNC', incrementAsync);
  yield takeEvery('COUNTER/DECREMENT_ASYNC', decrementAsync);
}
