import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const CardFlight = ({item}) => {
  const [cityOrigin, countryOrigin] = item.originCity.split(',');
  const [cityDestiny, countryDestiny] = item.destinyCity.split(',');
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerOrigin}>
          <Text style={styles.titleCity}>{cityOrigin}</Text>
          <Text style={styles.country}>{countryOrigin}</Text>
        </View>
        <Icon name="airplane" color="#5D60F0" size={30} />
        <View style={styles.containerDestiny}>
          <Text style={styles.titleCity}>{cityDestiny}</Text>
          <Text style={styles.country}>{countryDestiny}</Text>
        </View>
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
  containerOrigin: {
    flexDirection: 'column',
    // marginVertical: 5,
  },
  containerDestiny: {
    flexDirection: 'column',
    // marginRight: 5,
  },
  titleCity: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
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

  country: {
    fontSize: 18,
  },
  separator: {
    borderWidth: 0.5,
    marginVertical: 10,
  },
});
