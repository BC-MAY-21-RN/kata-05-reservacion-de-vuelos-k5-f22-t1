import React from 'react';

import {View, Text, TextInput} from 'react-native';
import {formStyles} from '../auth/formStyles';

export const FormRegister = ({form, onChange}) => {
  const {firstName, email, password} = form;
  return (
    <View>
      <Text style={formStyles.txtInput}>First Name</Text>
      <TextInput
        style={[
          formStyles.inputs,
          firstName.length > 0 && formStyles.inputFill,
        ]}
        onChangeText={value => onChange(value, 'firstName')}
      />
      <Text style={formStyles.txtInput}>Email</Text>
      <TextInput
        autoCapitalize="none"
        style={[formStyles.inputs, email.length > 0 && formStyles.inputFill]}
        onChangeText={value => onChange(value, 'email')}
      />
      <Text style={formStyles.txtInput}>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={[formStyles.inputs, password.length > 0 && formStyles.inputFill]}
        onChangeText={value => onChange(value, 'password')}
      />
      <Text style={formStyles.txtPassword}>
        Use 8 or more characters with a mix of letters, numbers, and symbols.
      </Text>
    </View>
  );
};
