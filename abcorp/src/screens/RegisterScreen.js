import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {CheckBox} from '../components/CheckBox';
import {FormRegister} from '../components/FormRegister';
import {ButtonsRegister} from '../components/ButtonsRegister';
import {CheckBookRegister} from '../components/CheckBookRegister';
import {HaveAccountRegister} from '../components/HaveAccountRegister';
import {useForm} from '../hooks/useForm';

export const RegisterScreen = () => {
  const {onChange, form} = useForm({ firstName: '', email: '', password: '', checkedTerm: false, checkedSubscribed: false});
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
      <CheckBookRegister checkedTerm={checkedTerm} handleCheckTerm={handleCheckTerm} checkedSubscribed={checkedSubscribed}/>
      <ButtonsRegister firstName={firstName} email={email} password={password} onChange={onChange} checkedTerm={checkedTerm} />
      <HaveAccountRegister />
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
});
