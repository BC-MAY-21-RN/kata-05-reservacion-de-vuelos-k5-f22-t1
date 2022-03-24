import React from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const InformationOrigin = ({flightOrigin, flightDestiny = ''}) => {
  const [cityOrigin, countryOrigin] = flightOrigin.split(',');
  const [cityDestiny, countryDestiny] = flightDestiny.split(',');
  return (
    <View
      style={[
        styles.containerInfo,
        cityDestiny && styles.containerInfoComplete,
      ]}>
      <View
        style={[
          styles.containerFlight,
          cityDestiny && styles.containerFlightComplete,
        ]}>
        <Text style={styles.city}>{cityOrigin}</Text>
        <Text style={styles.country}>{countryOrigin}</Text>
      </View>
      <Icon style={styles.iconFly} name="airplane" color="#5D60F0" size={30} />
      <View
        style={[
          styles.containerFlight,
          cityDestiny && styles.containerFlightComplete,
        ]}>
        <Text style={styles.city}>{cityDestiny}</Text>
        <Text style={styles.country}>{countryDestiny}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconFly: {
    alignSelf: 'center',
  },
  containerInfo: {
    marginTop: 34,
    flexDirection: 'row',
    position: 'absolute',
  },
  containerInfoComplete: {
    justifyContent: 'space-between',
  },
  city: {
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  country: {
    color: 'gray',
    marginVertical: 10,
  },
  containerFlightComplete: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  containerFlight: {
    width: '45%',
  },
});
