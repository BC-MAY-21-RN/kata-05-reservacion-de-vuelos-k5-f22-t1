import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {FormRegister} from '../components/FormRegister';
import {ButtonsRegister} from '../components/ButtonsRegister';
import {CheckBookRegister} from '../components/CheckBookRegister';
import {HaveAccountRegister} from '../components/HaveAccountRegister';

const initialForm = {
  firstName: '',
  email: '',
  password: '',
  checkedTerm: false,
};
import {useForm} from '../hooks/useForm';

export const RegisterScreen = () => {
  const {onChange, form} = useForm(initialForm);
  const {firstName, email, password, checkedTerm, checkedSubscribed} = form;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <FormRegister
        firstName={firstName}
        email={email}
        password={password}
        onChange={onChange}
      />
      <CheckBookRegister
        checkedTerm={checkedTerm}
        onChange={onChange}
        checkedSubscribed={checkedSubscribed}
      />
      <ButtonsRegister
        firstName={firstName}
        email={email}
        password={password}
        onChange={onChange}
        checkedTerm={checkedTerm}
      />
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
