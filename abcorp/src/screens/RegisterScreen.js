import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import {CheckBox} from '../components/CheckBox';
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
  const [formComplete, setFormComplete] = useState(false);

  const isFormComplete = () => {
    if (
      firstName.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      checkedTerm
    ) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  };

  useEffect(() => {
    isFormComplete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onChange]);

  const handleCheckTerm = (value, field) => {
    onChange(value === false ? true : false, field);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View>
        <Text style={styles.txtInput}>First Name</Text>
        <TextInput
          style={[styles.inputs, firstName.length > 0 && styles.inputFill]}
          onChangeText={value => onChange(value, 'firstName')}
        />
        <Text style={styles.txtInput}>Email</Text>
        <TextInput
          style={[styles.inputs, email.length > 0 && styles.inputFill]}
          onChangeText={value => onChange(value, 'email')}
        />
        <Text style={styles.txtInput}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={[styles.inputs, password.length > 0 && styles.inputFill]}
          onChangeText={value => onChange(value, 'password')}
        />
        <Text style={styles.txtPassword}>
          Use 8 or more characters with a mix of letters, numbers, and symbols.
        </Text>
      </View>
      <View>
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
      </View>
      <TouchableOpacity
        style={[styles.btnSignUp, formComplete && styles.btnSignUpOpen]}>
        <Text style={styles.txtBtn}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.containerOr}>
        <Text style={styles.txtOr}>or</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.btnSignUpGoogle,
          formComplete && styles.btnSignUpGoogleOpen,
        ]}>
        <Image style={styles.imgGoogle} source={require('../img/google.png')} />
        <Text style={styles.txtBtn}>Sign Up with Google</Text>
      </TouchableOpacity>
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
    marginTop: 40,
    marginBottom: 20,
    color: '#5D60F0',
    fontFamily: 'Impact',
    fontWeight: 'bold',
  },
  container: {
    marginHorizontal: 20,
  },
  inputs: {
    borderColor: 'gray',
    color: 'black',
    borderWidth: 1,
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  txtInput: {
    color: 'black',
  },
  txtPassword: {
    fontSize: 13,
    color: 'black',
    marginBottom: 40,
  },
  btnSignUp: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnSignUpOpen: {
    backgroundColor: '#5D60F0',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnSignUpGoogle: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 50,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  btnSignUpGoogleOpen: {
    backgroundColor: '#5D60F0',
    height: 50,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  txtBtn: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  txtOr: {
    color: 'rgba(0,0,0,0.3)',
  },
  containerOr: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  imgGoogle: {
    height: 30,
    width: 30,
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
  inputFill: {
    borderColor: '#5D60F0',
  },
});
