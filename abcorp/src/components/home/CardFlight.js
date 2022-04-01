import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {InfoFlight} from './InfoFlight';

export const CardFlight = ({item}) => {
  // console.log(item);
  const [cityOrigin, countryOrigin] = item.flightOrigin.split(',');
  const [cityDestiny, countryDestiny] = item.flightDestiny.split(',');
  return (
    <View>
      <View style={styles.container}>
        <InfoFlight city={cityOrigin} country={countryOrigin} home={true} />
        <Icon name="airplane" color="#5D60F0" size={30} />
        <InfoFlight city={cityDestiny} country={countryDestiny} home={true} />
      </View>
      <View style={styles.separator} />
      <View style={styles.containerDate}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.date}>{item.passengers} passengers</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  date: {
    fontWeight: 'bold',
    color: 'black',
  },
  separator: {
    borderWidth: 0.5,
    marginVertical: 10,
  },
  containerInfo: {
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
});
