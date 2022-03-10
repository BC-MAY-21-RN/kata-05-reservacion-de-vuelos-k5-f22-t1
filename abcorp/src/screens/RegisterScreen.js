import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import {CheckBox} from '../components/CheckBox';
import {FormRegister} from '../components/FormRegister';
import {ButtonsRegister} from '../components/ButtonsRegister';
import {useForm} from '../hooks/useForm';

export const RegisterScreen = () => {
  const {onChange, form} = useForm({
    firstName: '',
    email: '',
    password: '',
    checkedTerm: false,
    checkedSubscribed: false,
  });
  const {firstName, email, password, checkedTerm, checkedSubscribed} = form;

  const handleCheckTerm = (value, field) => {
    onChange(value === false ? true : false, field);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <FormRegister
        firstName={firstName}
        email={email}
        password={password}
        onChange={onChange}
      />
      <CheckBox
        text="I agree to the Terms and Privacy Policy."
        checked={checkedTerm}
        change={() => handleCheckTerm(checkedTerm, 'checkedTerm')}
      />
      <CheckBox
        text="Subscribe for select product updated."
        checked={checkedSubscribed}
        change={() => handleCheckTerm(checkedSubscribed, 'checkedSubscribed')}
      />
      <ButtonsRegister 
        firstName={firstName}
        email={email}
        password={password}
        onChange={onChange}
        checkedTerm={checkedTerm} />
      <View style={styles.containerAccount}>
        <Text style={styles.txtOr}>Already have an account?</Text>
        <Text style={styles.txtLogin}> Log in</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 20,
    color: '#5D60F0',
    fontFamily: 'Impact',
    fontWeight: 'bold',
  },
  container: {
    marginHorizontal: 20,
  },
  txtOr: {
    color: 'rgba(0,0,0,0.3)',
  },
  containerAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  txtLogin: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
