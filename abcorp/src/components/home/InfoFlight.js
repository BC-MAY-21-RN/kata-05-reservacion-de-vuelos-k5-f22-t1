import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const InfoFlight = ({city, country}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleCity}>{city}</Text>
      <Text style={styles.country}>{country}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  titleCity: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  country: {
    fontSize: 18,
  },
});
