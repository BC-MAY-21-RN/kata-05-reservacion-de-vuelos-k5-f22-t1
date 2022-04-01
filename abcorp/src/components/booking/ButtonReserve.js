import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const ButtonReserve = ({
  navigation,
  flightDestinyScreen,
  flightData,
  flightDataComplete,
  txtButton,
  addFlights,
}) => {
  const currentScene = navigation.getState().index;
  const handleButton = async () => {
    if (currentScene === 5) {
      addFlights();
      navigation.push('HomeScreen');
    } else {
      console.log('normal');
      navigation.navigate(flightDestinyScreen, {
        flightData,
        flightDataComplete,
      });
    }
  };
  return (
    <TouchableOpacity
      onPress={handleButton}
      disabled={flightData.length > 0 ? false : true}
      style={[styles.buttonReserve, flightData.length > 0 && styles.btnColor]}>
      <Text style={styles.txt}>{txtButton}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonReserve: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnColor: {
    backgroundColor: '#5D60F0',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
