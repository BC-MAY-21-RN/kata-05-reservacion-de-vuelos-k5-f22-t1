import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import {buttonsStyles} from '../auth/buttonsStyles';

export const ButtonsLogin = ({form, onChange}) => {
  const [formComplete, setFormComplete] = useState(false);
  const {email, password} = form;

  const isFormComplete = () => {
    if (email.length > 0 && password.length > 0) {
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
      <TouchableOpacity
        style={[
          buttonsStyles.btnSignUp,
          formComplete && buttonsStyles.btnSignUpOpen,
        ]}>
        <Text style={buttonsStyles.txtBtn}>Log in</Text>
      </TouchableOpacity>
      <View style={buttonsStyles.containerOr}>
        <Text style={buttonsStyles.txtOr}>or</Text>
      </View>
      <TouchableOpacity
        style={[
          buttonsStyles.btnSignUpGoogle,
          formComplete && buttonsStyles.btnSignUpGoogleOpen,
        ]}>
        <Image
          style={buttonsStyles.imgGoogle}
          source={require('../../img/google.png')}
        />
        <Text style={buttonsStyles.txtBtn}>Log In with Google</Text>
      </TouchableOpacity>
    </>
  );
};
