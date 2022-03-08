import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';

export const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Sign Up</Text>
      <View>
        <Text style={styles.InptTxt}>First Name</Text>
        <TextInput style={styles.inputs} />
        <Text>Email</Text>
        <TextInput style={styles.inputs} />
        <Text>Password</Text>
        <TextInput secureTextEntry={true} style={styles.inputs} />
        <Text style={styles.txtPassword}>
          Use 8 or more characters with a mix of letters, numbers, and symbols.
        </Text>
      </View>
      <View>
        {/* <CheckBox /> */}
        <TouchableOpacity>
          <View style={styles.containerCheck}>
            <Icon name="checkmark-outline" color={'white'} size={20} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
    // marginLeft: 10,
    color: '#5D60F0',
    fontFamily: 'Impact',
  },
  container: {
    marginHorizontal: 20,
  },
  inputs: {
    borderColor: 'gray',
    borderRadius: 10,
    color: 'black',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
  InptTxt: {
    marginTop: 15,
  },
  txtPassword: {
    fontSize: 13,
  },
  containerCheck: {
    // borderWidth: 1,
    width: 25,
    height: 25,
    backgroundColor: '#5D60F0',
    justifyContent: 'center',
    alignItems: 'center',
    // alignItems: 'center',
  },
});
