import React from 'react';
// import auth from '@react-native-firebase/auth';
import {View, Text} from 'react-native';
import {FormLogin} from '../components/Login/FormLogin';
import {ButtonsLogin} from '../components/Login/ButtonsLogin';
import {useForm} from '../hooks/useForm';
import {HaveAccount} from '../components/auth/HaveAccount';
import {screenStyles} from '../components/auth/screenStyles';
import {useDispatch} from 'react-redux';
import {loginWithGoogle} from '../actions/auth';

const initialForm = {
  email: '',
  password: '',
};

export const LoginScreen = ({navigation}) => {
  const {onChange, form} = useForm(initialForm);
  const dispatch = useDispatch();
  const logginGoogle = async () => {
    dispatch(loginWithGoogle());
  };
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.title}>Log in</Text>
      <FormLogin onChange={onChange} form={form} />
      <ButtonsLogin
        form={form}
        onChange={onChange}
        navigation={navigation}
        logginGoogle={logginGoogle}
      />
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
