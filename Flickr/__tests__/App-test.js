/**
 * @format
 */

import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainScreen from '../src/screen/MainScreen/MainScreen.js';

// Note: test renderer must be required after react-native.
Enzyme.configure({adapter: new Adapter()});

describe('MainScreen', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Mainscreen />);
      expect(component).toMatchSnapshot();
    });
  });
});

module.exports = {
  preset: 'react-native',
  testEnvironment: 'enzyme',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
};
