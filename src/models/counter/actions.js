export const COUNTER_INCREMENT = 'COUNTER/INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER/DECREMENT';

export const incrementCounter = (count) => ({
  type: COUNTER_INCREMENT,
  payload: {
    count: count + 1,
  },
});

export const decrementCounter = (count) => ({
  type: COUNTER_DECREMENT,
  payload: {
    count: count - 1,
  },
});
