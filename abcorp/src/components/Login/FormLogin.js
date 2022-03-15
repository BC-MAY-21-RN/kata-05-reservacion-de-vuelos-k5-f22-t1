import React from 'react';

import {View, Text, StyleSheet, TextInput} from 'react-native';

export const FormLogin = ({form, onChange}) => { 
  const {email, password} = form;
  return (
    <View>
      <Text style={styles.txtInput}>Email</Text>
      <TextInput
        autoCapitalize="none"
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
  );
};

const styles = StyleSheet.create({
  txtInput: {
    color: 'black',
  },
  inputs: {
    borderColor: 'gray',
    color: 'black',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  txtPassword: {
    fontSize: 13,
    color: 'black',
    marginBottom: 10,
  },
  inputFill: {
    borderColor: '#5D60F0',
  },
});
