import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const HaveAccount = ({navigation, message, toNavigate, nameScreen}) => {
  return (
    <View style={styles.containerAccount}>
      <Text style={styles.txtOr}>{message}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(toNavigate)}>
        <Text style={styles.txtLogin}> {nameScreen}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  txtOr: {
    color: 'rgba(0,0,0,0.3)',
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
});
