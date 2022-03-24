import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const InfoFlight = ({city, country, home}) => {
  return (
    <View style={home ? styles.container : styles.containerFlight}>
      <Text style={home ? styles.titleCity : styles.cityBooking}>{city}</Text>
      <Text style={home ? styles.country : styles.countryBooking}>
        {country}
      </Text>
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
    color: 'gray',
  },
  containerFlight: {
    width: '45%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  cityBooking: {
    color: 'black',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 25,
  },
  countryBooking: {
    color: 'gray',
    marginVertical: 5,
  },
});
