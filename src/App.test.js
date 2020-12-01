import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('Render App', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h2')).toHaveLength(1);
});
