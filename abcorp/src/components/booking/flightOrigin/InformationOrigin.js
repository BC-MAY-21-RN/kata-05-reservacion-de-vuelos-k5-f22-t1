import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const InformationOrigin = ({flightOrigin}) => {
  const [cityOrigin, countryOrigin] = flightOrigin.split(',');
  return (
    <View style={styles.containerInfo}>
      <View style={styles.containerFlight}>
        <Text style={styles.city}>{cityOrigin}</Text>
        <Text style={styles.country}>{countryOrigin}</Text>
      </View>
      <Icon style={styles.iconFly} name="airplane" color="#5D60F0" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconFly: {
    alignSelf: 'center',
  },
  containerInfo: {
    marginTop: -130,
    flexDirection: 'row',
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
  containerFlight: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    width: '45%',
  },
});
