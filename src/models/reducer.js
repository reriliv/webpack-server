import { combineReducers } from 'redux';
import { counter } from './counter';
import { layout } from './layout';

const reducer = combineReducers({
  counter,
  layout,
});

export default reducer;
