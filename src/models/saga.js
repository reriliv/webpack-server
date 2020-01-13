import { call, all } from 'redux-saga/effects';
import { watchIncrementAsync } from './counter';
import { layoutSagas } from './layout';

export default function* saga() {
  yield all([
    call(watchIncrementAsync),
    call(layoutSagas.watch),
  ]);
}
