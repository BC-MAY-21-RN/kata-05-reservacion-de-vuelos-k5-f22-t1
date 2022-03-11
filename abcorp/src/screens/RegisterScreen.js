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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <FormRegister form={form} onChange={onChange} />
      <CheckBookRegister onChange={onChange} form={form} />
      <ButtonsRegister form={form} onChange={onChange} />
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
