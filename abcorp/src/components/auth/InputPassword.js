import React from 'react';
import {TextInput} from 'react-native';
import {formStyles} from './formStyles';

export const InputPassword = ({password, onChange}) => {
  return (
    <TextInput
      secureTextEntry={true}
      style={[formStyles.inputs, password.length > 0 && formStyles.inputFill]}
      onChangeText={value => onChange(value, 'password')}
    />
  );
};
