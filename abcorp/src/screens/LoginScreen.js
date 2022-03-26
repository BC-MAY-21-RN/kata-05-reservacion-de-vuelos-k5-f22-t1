import React from 'react';
import auth from '@react-native-firebase/auth';
import {View, Text} from 'react-native';
import {FormLogin} from '../components/Login/FormLogin';
import {ButtonsLogin} from '../components/Login/ButtonsLogin';
import {useForm} from '../hooks/useForm';
import {HaveAccount} from '../components/auth/HaveAccount';
import {screenStyles} from '../components/auth/screenStyles';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '256967765907-9s5tmvtoodhiqop6p50p91i6pooqusap.apps.googleusercontent.com',
});
// import {ModalLoading} from '../components/auth/ModalLoading';

const initialForm = {
  email: '',
  password: '',
};

export const LoginScreen = ({navigation}) => {
  const {onChange, form} = useForm(initialForm);
  const logginGoogle = async () => {
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
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
