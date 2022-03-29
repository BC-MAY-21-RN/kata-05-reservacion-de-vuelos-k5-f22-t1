import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {buttonsStyles} from './buttonsStyles';

export const ButtonGoogle = ({message, logginGoogle}) => {
  return (
    <TouchableOpacity
      onPress={logginGoogle}
      style={[
        buttonsStyles.btnSignUpGoogle,
        buttonsStyles.btnSignUpGoogleOpen,
      ]}>
      <Image
        style={buttonsStyles.imgGoogle}
        source={require('../../img/google.png')}
      />
      <Text style={buttonsStyles.txtBtn}>{message}</Text>
    </TouchableOpacity>
  );
};
