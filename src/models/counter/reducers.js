import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './actions';

const initialValue = {
  count: 0,
};

const CounterReducer = (state = initialValue, { type, payload }) => {
  switch(type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count: payload.count,
      };
    case COUNTER_DECREMENT:
      return {
        ...state,
        count: payload.count,
      };
    default:
      return state;
  };
};

export default CounterReducer;
