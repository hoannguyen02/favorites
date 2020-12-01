import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('Render App', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('span.favorites-count-main')).toHaveLength(1);
});
