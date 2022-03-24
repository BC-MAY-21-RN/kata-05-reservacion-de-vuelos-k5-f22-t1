import React from 'react';
import {View, Text} from 'react-native';

export const InfoFlight = ({
  city,
  country,
  styleContainer,
  styleCity,
  styleCountry,
}) => {
  return (
    <View style={styleContainer}>
      <Text style={styleCity}>{city}</Text>
      <Text style={styleCountry}>{country}</Text>
    </View>
  );
};
