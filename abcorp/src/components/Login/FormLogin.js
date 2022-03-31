import React from 'react';

import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';
import {formStyles} from '../auth/formStyles';
import {InputEmail} from '../auth/InputEmail';
import {InputPassword} from '../auth/InputPassword';

export const FormLogin = ({form, onChange}) => {
  const {email, password} = form;
  const {msgErrorLogin} = useSelector(state => state.ui)
  return (
    <View>
      <View style={formStyles.containerErrors}>
      <Text style={formStyles.txtInput}>Email</Text>    
      {msgErrorLogin && (
        <Text style={formStyles.txtError}>*Incorrect email. Use a different email.</Text>
      )}  
      </View>
      <InputEmail email={email} onChange={onChange} />
      <View style={formStyles.containerErrors}>
      <Text style={formStyles.txtInput}>Password</Text>
      {msgErrorLogin && (
      <Text style={formStyles.txtError}>*Incorrect password</Text>
      )}
      </View>
      <InputPassword password={password} onChange={onChange} />
      <Text style={formStyles.txtPassword}>
        Use 8 or more characters with a mix of letters, numbers, and symbols.
      </Text>
    </View>
  );
};
