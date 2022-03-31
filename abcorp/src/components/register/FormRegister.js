import React from 'react';

import {View, Text, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import {formStyles} from '../auth/formStyles';
import {InputEmail} from '../auth/InputEmail';
import {InputPassword} from '../auth/InputPassword';
import {ErrorInput} from '../auth/ErrorInput';

export const FormRegister = ({form, onChange}) => {
  const {firstName, email, password} = form;
  const {msgErrorRegister} = useSelector(state => state.ui);
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
      <ErrorInput
        input="Email"
        msgError={msgErrorRegister}
        txtMsg="*Incorrect email. Use a different email."
      />
      <InputEmail email={email} onChange={onChange} />
      <ErrorInput
        input="Password"
        msgError={msgErrorRegister}
        txtMsg="*Incorrect password"
      />
      <InputPassword password={password} onChange={onChange} />
      <Text style={formStyles.txtPassword}>
        Use 8 or more characters with a mix of letters, numbers, and symbols.
      </Text>
    </View>
  );
};
