import { combineReducers } from 'redux';
import counter from './counter/reducers';

const reducers = combineReducers({
  counter,
});

export default reducers;
