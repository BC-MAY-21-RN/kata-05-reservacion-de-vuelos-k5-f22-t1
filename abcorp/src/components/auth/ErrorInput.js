import React from 'react';
import {View, Text} from 'react-native';
import {formStyles} from './formStyles';

export const ErrorInput = ({msgError, txtMsg, input}) => {
  return (
    <View style={formStyles.containerErrors}>
      <Text style={formStyles.txtInput}>{input}</Text>
      {msgError && <Text style={formStyles.txtError}>{txtMsg}</Text>}
    </View>
  );
};
