import React, {useEffect, useState} from 'react';
import {TextInput, Text, StyleSheet} from 'react-native';
import {Autocomplete} from './Autocomplete';
import {ButtonReserve} from './ButtonReserve';
import {citiesApi} from './CitiesApi';

export const FlightForm = ({
  navigation,
  flightDestinyScreen,
  flightOrigin,
  setflightOrigin,
  txt,
  flightDataComplete,
}) => {
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const dataFilter = citiesApi
    .filter(country => country.name.includes(flightOrigin))
    .slice(0, 5);

  useEffect(() => {
    if (flightOrigin.length > 0 && !flightOrigin.includes(',')) {
      setShowAutoComplete(true);
    } else {
      setShowAutoComplete(false);
    }
  }, [flightOrigin]);

  return (
    <>
      <Text style={styles.title}>{txt}</Text>
      <Autocomplete
        showAutoComplete={showAutoComplete}
        setShowAutoComplete={setShowAutoComplete}
        dataFilter={dataFilter}
        setflightOrigin={setflightOrigin}
      />
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
        txtButton="Next"
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
