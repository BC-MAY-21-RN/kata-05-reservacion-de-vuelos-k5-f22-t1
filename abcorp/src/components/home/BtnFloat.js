import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const BtnFloat = () => {
  return (
    <TouchableOpacity
        style={styles.btnFloat}
      >
        <Icon name="add-outline" size={50} color="white" />
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnFloat: {
    borderRadius: 100,
    backgroundColor: '#5D60F0',
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  }
})
