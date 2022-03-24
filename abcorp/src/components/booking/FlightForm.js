import React from 'react';
import {TextInput, Text, StyleSheet} from 'react-native';
import {ButtonReserve} from './ButtonReserve';

export const FlightForm = ({
  navigation,
  flightDestinyScreen,
  flightOrigin,
  setflightOrigin,
  txt,
  flightDataComplete,
}) => {
  return (
    <>
      <Text style={styles.title}>{txt}</Text>
      <TextInput
        value={flightOrigin}
        onChangeText={setflightOrigin}
        placeholder="Select location"
        placeholderTextColor="gray"
        style={[styles.input, flightOrigin.length > 0 && styles.inputColor]}
      />
      <ButtonReserve
        navigation={navigation}
        flightDestinyScreen={flightDestinyScreen}
        flightData={flightOrigin}
        flightDataComplete={flightDataComplete}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
  },
  input: {
    borderBottomWidth: 0.8,
    color: 'black',
    padding: 2,
  },
  inputColor: {
    borderBottomColor: '#5D60F0',
  },
});
