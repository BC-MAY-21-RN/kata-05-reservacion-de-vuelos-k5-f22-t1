import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native';

export const ButtonsLogin = ({form, onChange}) => {
  const [formComplete, setFormComplete] = useState(false);
  const { email, password } = form;

  const isFormComplete = () => {
    if (
      email.length > 0 &&
      password.length > 0
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
      <TouchableOpacity
        style={[styles.btnSignUp, formComplete && styles.btnSignUpOpen]}>
        <Text style={styles.txtBtn}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.containerOr}>
        <Text style={styles.txtOr}>or</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.btnSignUpGoogle,
          formComplete && styles.btnSignUpGoogleOpen,
        ]}>
        <Image
          style={styles.imgGoogle}
          source={require('../../img/google.png')}
        />
        <Text style={styles.txtBtn}>Log In with Google</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btnSignUp: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnSignUpOpen: {
    backgroundColor: '#5D60F0',
  },
  btnSignUpGoogle: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 50,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  btnSignUpGoogleOpen: {
    backgroundColor: '#5D60F0',
  },
  txtBtn: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
  },
  imgGoogle: {
    height: 30,
    width: 30,
  },
  txtOr: {
    color: 'rgba(0,0,0,0.3)',
  },
  containerOr: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
