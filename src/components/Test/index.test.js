import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Test from './index';

describe('<Test />', () => {
  test('should render', () => {
    const wrapper = shallow(<Test>123</Test>);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
