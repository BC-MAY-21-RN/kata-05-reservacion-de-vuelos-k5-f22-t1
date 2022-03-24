import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export const FlightCalendarScreen = ({route}) => {
  const {flightOrigin, flightDataComplete} = route.params;
  return (
    <View>
      <Text style={styles.prueba}>Calendar</Text>
      <Text style={styles.prueba}>Calendar</Text>
      <Text style={styles.prueba}>{flightDataComplete}</Text>
      <Text style={styles.prueba}>{flightOrigin}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  prueba: {
    color: 'black',
  },
});
