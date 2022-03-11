import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export const HaveAccountRegister = () => {
  return (
    <View style={styles.containerAccount}>
        <Text style={styles.txtOr}>Already have an account?</Text>
        <Text style={styles.txtLogin}> Log in</Text>
      </View>
  )
}

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