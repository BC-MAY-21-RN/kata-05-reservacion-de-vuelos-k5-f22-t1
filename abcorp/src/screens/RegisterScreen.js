import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FormRegister} from '../components/register/FormRegister';
import {ButtonsRegister} from '../components/register/ButtonsRegister';
import {CheckBookRegister} from '../components/register/CheckBookRegister';
import {HaveAccountRegister} from '../components/register/HaveAccountRegister';
import {useForm} from '../hooks/useForm';

const initialForm = {
  firstName: '',
  email: '',
  password: '',
  checkedTerm: false,
};

export const RegisterScreen = ({navigation}) => {
  const {onChange, form} = useForm(initialForm);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <FormRegister form={form} onChange={onChange} />
      <CheckBookRegister onChange={onChange} form={form} />
      <ButtonsRegister form={form} onChange={onChange} />
      <HaveAccountRegister navigation={navigation}/>
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
    flex: 1,
    justifyContent: 'space-between',
  },
});
