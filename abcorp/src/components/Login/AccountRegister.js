import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

export const AccountRegister = ({navigation}) => {
  return (
    <View style={styles.containerAccount}>
      <Text style={styles.txtOr}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
        <Text style={styles.txtLogin}> Sign Up</Text>
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