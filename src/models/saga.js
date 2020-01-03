import { call, all } from 'redux-saga/effects';
import { watchIncrementAsync } from './counter';

export default function* saga() {
  yield all([
    call(watchIncrementAsync)
  ]);
}
