import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const CheckBox = ({text, checked, change}) => {
  // const [check, setCheck] = useState(false);

  // const handleCheck = () => {
  //   setCheck(check === false ? true : false);
  // };

  const ChekboxChecked = () => (
    <TouchableOpacity onPress={change} style={styles.containerMain}>
      <View style={styles.containerCheck}>
        <Icon name="checkmark-outline" color={'white'} size={20} />
      </View>
      <Text style={styles.txtCheckbox}>{text}</Text>
    </TouchableOpacity>
  );
  const ChekboxNOTChecked = () => (
    <TouchableOpacity onPress={change} style={styles.containerMain}>
      <View style={styles.containerNOTCheck} />
      <Text style={styles.txtCheckbox}>{text}</Text>
    </TouchableOpacity>
  );

  return checked === true ? <ChekboxChecked /> : <ChekboxNOTChecked />;
};

const styles = StyleSheet.create({
  containerMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  containerCheck: {
    width: 25,
    height: 25,
    backgroundColor: '#5D60F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerNOTCheck: {
    borderWidth: 1,
    width: 25,
    height: 25,
  },
  txtCheckbox: {
    marginLeft: 10,
    color: 'gray',
  },
});
