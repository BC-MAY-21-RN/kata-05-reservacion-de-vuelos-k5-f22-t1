import React from 'react';
import { View, StyleSheet } from 'react-native';

export const ItemSeparator = () => {
  return (
    <View style={styles.container} />
  )
}

const styles = StyleSheet.create({
    container: {
      borderWidth: 0.6,
      marginVertical: 15,
    }
});
