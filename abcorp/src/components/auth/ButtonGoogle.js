import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {buttonsStyles} from './buttonsStyles';

export const ButtonGoogle = ({formComplete, message}) => {
  return (
    <TouchableOpacity
      style={[
        buttonsStyles.btnSignUpGoogle,
        formComplete && buttonsStyles.btnSignUpGoogleOpen,
      ]}>
      <Image
        style={buttonsStyles.imgGoogle}
        source={require('../../img/google.png')}
      />
      <Text style={buttonsStyles.txtBtn}>{message}</Text>
    </TouchableOpacity>
  );
};
