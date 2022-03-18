import React from 'react';
import {TextInput} from 'react-native';
import {formStyles} from './formStyles';

export const InputEmail = ({email, onChange}) => {
  return (
    <TextInput
      autoCapitalize="none"
      style={[formStyles.inputs, email.length > 0 && formStyles.inputFill]}
      onChangeText={value => onChange(value, 'email')}
    />
  );
};
