import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {InformationOrigin} from '../components/booking/flightOrigin/InformationOrigin';
import {ButtonReserve} from '../components/booking/ButtonReserve';
import {getMonth} from '../helpers/getMonth';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {HomePageScreen} from './HomePageScreen';

export const FlightReceiveScreen = ({route, navigation}) => {
  const {flightDataComplete} = route.params;
  const {uid} = useSelector(state => state.auth);
  const monthString = getMonth(flightDataComplete.month);

  const addFlights = async () => {
    try {
      await firestore()
        .collection('Flights')
        .add({
          user: uid,
          flightOrigin: flightDataComplete.flightOrigin,
          flightDestiny: flightDataComplete.flightDestiny,
          passengers: flightDataComplete.numberViewed,
          date: `${flightDataComplete.year}-${flightDataComplete.month}-${flightDataComplete.day}`,
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <InformationOrigin
        style={styles.information}
        flightOrigin={flightDataComplete.flightOrigin}
        flightDestiny={flightDataComplete.flightDestiny}
      />
      <View />
      <View style={styles.containerInfo}>
        <Text style={styles.date}>
          {monthString} {flightDataComplete.day}, {flightDataComplete.year}
        </Text>
        <Text style={styles.date}>
          {flightDataComplete.numberViewed} passengers
        </Text>
      </View>
      <Text style={styles.title}>Your request was received.</Text>
      <ButtonReserve
        navigation={navigation}
        txtButton="Finish"
        flightDestinyScreen={''}
        flightData={'complete'}
        flightDataComplete={''}
        addFlights={addFlights}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    flex: 1,
    marginVertical: 50,
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
  },
  date: {
    color: 'black',
    fontWeight: 'bold',
  },
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
