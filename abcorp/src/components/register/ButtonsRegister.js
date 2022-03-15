import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import { ButtonGoogle } from '../auth/ButtonGoogle';
import {ButtonNormal} from '../auth/ButtonNormal';
import {buttonsStyles} from '../auth/buttonsStyles';

export const ButtonsRegister = ({form, onChange}) => {
  const [formComplete, setFormComplete] = useState(false);
  const {firstName, email, password, checkedTerm} = form;

  const isFormComplete = () => {
    if (
      firstName.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      checkedTerm
    ) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  };

  useEffect(() => {
    isFormComplete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onChange]);

  return (
    <>
      {/* <TouchableOpacity
        style={[
          buttonsStyles.btnSignUp,
          formComplete && buttonsStyles.btnSignUpOpen,
        ]}>
        <Text style={buttonsStyles.txtBtn}>Sign Up</Text>
      </TouchableOpacity> */}
      <ButtonNormal formComplete={formComplete} message="Sign up" />
      <View style={buttonsStyles.containerOr}>
        <Text style={buttonsStyles.txtOr}>or</Text>
      </View>
      {/* <TouchableOpacity
        style={[
          buttonsStyles.btnSignUpGoogle,
          formComplete && buttonsStyles.btnSignUpGoogleOpen,
        ]}>
        <Image
          style={buttonsStyles.imgGoogle}
          source={require('../../img/google.png')}
        />
        <Text style={buttonsStyles.txtBtn}>Sign Up with Google</Text>
      </TouchableOpacity> */}
      <ButtonGoogle formComplete={formComplete} message="Sign Up with Google" />
    </>
  );
};
