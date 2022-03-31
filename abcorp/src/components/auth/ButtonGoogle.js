import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {buttonsStyles} from './buttonsStyles';
import {useDispatch} from 'react-redux';
import { loginWithGoogle } from '../../actions/auth';

export const ButtonGoogle = ({message}) => {
  const dispatch = useDispatch();
  const logginGoogle = async () => {
    dispatch(loginWithGoogle());
  };
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
