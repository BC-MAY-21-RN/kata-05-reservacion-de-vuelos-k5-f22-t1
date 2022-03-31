import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { useDispatch } from 'react-redux';
import { loginWithEmailAndPassword, registerWithEmailAndPassword } from '../../actions/auth';
import {buttonsStyles} from './buttonsStyles';

export const ButtonNormal = ({formComplete, message, navigation, form}) => {
  const currentScreen = navigation.getState().index;
  const {email, password, firstName} = form
  const dispatch = useDispatch()
  const registerUser = () => {
  if (currentScreen === 0){
    console.log('REGISTRO');
    dispatch(registerWithEmailAndPassword({email,password,firstName}))  
  } else {
    console.log('LOGIN');
    dispatch(loginWithEmailAndPassword({email, password}))
  }}
   return (
    <TouchableOpacity
      onPress={registerUser}
      disabled={formComplete ? false : true}
      style={[
        buttonsStyles.btnSignUp,
        formComplete && buttonsStyles.btnSignUpOpen,
      ]}>
      <Text style={buttonsStyles.txtBtn}>{message}</Text>
    </TouchableOpacity>
  );
};
