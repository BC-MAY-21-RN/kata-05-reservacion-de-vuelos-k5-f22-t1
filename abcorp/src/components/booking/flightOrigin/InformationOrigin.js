import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {InfoFlight} from '../../home/InfoFlight';

export const InformationOrigin = ({flightOrigin, flightDestiny = ''}) => {
  const [cityOrigin, countryOrigin] = flightOrigin.split(',');
  const [cityDestiny, countryDestiny] = flightDestiny.split(',');
  return (
    <View style={styles.containerInfo}>
      <InfoFlight city={cityOrigin} country={countryOrigin} home={false} />
      <Icon style={styles.iconFly} name="airplane" color="#5D60F0" size={30} />
      <View
        style={[
          styles.containerFlightDestiny,
          cityDestiny && styles.containerFlight,
        ]}>
        <Text style={[styles.city, styles.txtDestiny]}>{cityDestiny}</Text>
        <Text style={[styles.country, styles.txtDestiny]}>
          {countryDestiny}
        </Text>
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
  city: {
    color: 'black',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 25,
  },
  country: {
    color: 'gray',
    marginVertical: 5,
  },
  containerFlight: {
    width: '45%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  containerFlightDestiny: {
    width: '45%',
  },
  txtDestiny: {
    textAlign: 'center',
  },
});
