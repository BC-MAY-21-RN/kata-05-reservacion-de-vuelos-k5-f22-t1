import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {formStyles} from '../auth/formStyles';
import {InputEmail} from '../auth/InputEmail';
import {InputPassword} from '../auth/InputPassword';
import {ErrorInput} from '../auth/ErrorInput';

export const FormLogin = ({form, onChange}) => {
  const {email, password} = form;
  const {msgErrorLogin} = useSelector(state => state.ui);
  return (
    <View>
      <ErrorInput
        input="Email"
        msgError={msgErrorLogin}
        txtMsg="*Incorrect email. Use a different email"
      />
      <InputEmail email={email} onChange={onChange} />
      <ErrorInput
        input="Password"
        msgError={msgErrorLogin}
        txtMsg="*Incorrect password"
      />
      <InputPassword password={password} onChange={onChange} />
      <Text style={formStyles.txtPassword}>
        Use 8 or more characters with a mix of letters, numbers, and symbols.
      </Text>
    </View>
  );
};
