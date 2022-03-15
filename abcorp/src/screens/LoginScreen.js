import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FormLogin} from '../components/Login/FormLogin';
import { ButtonsLogin } from '../components/Login/ButtonsLogin'
import { AccountRegister } from '../components/Login/AccountRegister'
import {useForm} from '../hooks/useForm';

const initialForm = {
  email: '',
  password: '',
};

export const LoginScreen = ({navigation}) => {
  const {onChange, form} = useForm(initialForm);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <FormLogin onChange={onChange} form={form} />
        <ButtonsLogin form={form} onChange={onChange} />
        <AccountRegister navigation={navigation}/>
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
