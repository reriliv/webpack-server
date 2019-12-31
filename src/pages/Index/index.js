import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import Test from 'components/Test';
import { COUNTER_INCREMENT, COUNTER_DECREMENT } from 'models/counter/actions';

const IndexPage = ({ count, increment, decrement }) => {
  return (
    <Test>
      Hello World!
      <Button onClick={() => decrement(count)}>Decrement</Button>
      {count}
      <Button onClick={() => increment(count)}>Increment</Button>
    </Test>
  );
};

const mapStateToProps = ({ counter: { count } }) => ({
  count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: (count) => dispatch({
    type: COUNTER_INCREMENT,
    payload: {
      count: count + 1,
    },
  }),
  decrement: (count) => dispatch({
    type: COUNTER_DECREMENT,
    payload: {
      count: count - 1,
    },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
