import React from 'react';
import {View, Text} from 'react-native';
import {FormRegister} from '../components/register/FormRegister';
import {ButtonsRegister} from '../components/register/ButtonsRegister';
import {CheckBookRegister} from '../components/register/CheckBookRegister';
import {useForm} from '../hooks/useForm';
import {HaveAccount} from '../components/auth/HaveAccount';
import {screenStyles} from '../components/auth/screenStyles';

const initialForm = {
  firstName: '',
  email: '',
  password: '',
  checkedTerm: false,
};

export const RegisterScreen = ({navigation}) => {
  const {onChange, form} = useForm(initialForm);

  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.title}>Sign Up</Text>
      <FormRegister form={form} onChange={onChange} />
      <CheckBookRegister onChange={onChange} form={form} />
      <ButtonsRegister form={form} onChange={onChange} />
      <HaveAccount
        navigation={navigation}
        message="Already have an account?"
        toNavigate="LoginScreen"
        nameScreen="Log in"
      />
    </View>
  );
};
