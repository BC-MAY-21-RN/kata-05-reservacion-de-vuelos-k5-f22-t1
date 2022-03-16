import React from 'react';

import {View, Text} from 'react-native';
import {formStyles} from '../auth/formStyles';
import {InputEmail} from '../auth/InputEmail';
import {InputPassword} from '../auth/InputPassword';

export const FormLogin = ({form, onChange}) => {
  const {email, password} = form;
  return (
    <View>
      <Text style={formStyles.txtInput}>Email</Text>
      <InputEmail email={email} onChange={onChange} />
      <Text style={formStyles.txtInput}>Password</Text>
      <InputPassword password={password} onChange={onChange} />
      <Text style={formStyles.txtPassword}>
        Use 8 or more characters with a mix of letters, numbers, and symbols.
      </Text>
    </View>
  );
};
