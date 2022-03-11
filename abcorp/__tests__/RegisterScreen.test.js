import 'react-native';
import React from 'react';
import {RegisterScreen} from '../src/screens/RegisterScreen';
import renderer from 'react-test-renderer';


describe('Tests on the component RegisterScreen', () => { 

  test('should display correctly', () => { 
    const tree = renderer.create(<RegisterScreen />);
    expect(tree).toMatchSnapshot();
   });
 });