import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {buttonsStyles} from './buttonsStyles';

export const ButtonNormal = ({formComplete, message}) => {
  return (
    <TouchableOpacity
      style={[
        buttonsStyles.btnSignUp,
        formComplete && buttonsStyles.btnSignUpOpen,
      ]}>
      <Text style={buttonsStyles.txtBtn}>{message}</Text>
    </TouchableOpacity>
  );
};
