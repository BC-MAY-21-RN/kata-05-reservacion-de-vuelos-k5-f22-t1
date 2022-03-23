import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {buttonsStyles} from './buttonsStyles';

export const ButtonNormal = ({formComplete, message, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('HomePageScreen')}
      style={[
        buttonsStyles.btnSignUp,
        formComplete && buttonsStyles.btnSignUpOpen,
      ]}>
      <Text style={buttonsStyles.txtBtn}>{message}</Text>
    </TouchableOpacity>
  );
};
