import React from 'react';
import {View, Text} from 'react-native';
import {FormLogin} from '../components/Login/FormLogin';
import {ButtonsLogin} from '../components/Login/ButtonsLogin';
import {useForm} from '../hooks/useForm';
import {HaveAccount} from '../components/auth/HaveAccount';
import {screenStyles} from '../components/auth/screenStyles';
// import {ModalLoading} from '../components/auth/ModalLoading';

const initialForm = {
  email: '',
  password: '',
};

export const LoginScreen = ({navigation}) => {
  const {onChange, form} = useForm(initialForm);
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.title}>Log in</Text>
      <FormLogin onChange={onChange} form={form} />
      <ButtonsLogin form={form} onChange={onChange} />
      <HaveAccount
        navigation={navigation}
        message="I don't have an account?"
        toNavigate="RegisterScreen"
        nameScreen="Sign up"
      />
      {/* use this component when we use firebase */}
      {/* <ModalLoading message="Login..."/> */}
    </View>
  );
};
