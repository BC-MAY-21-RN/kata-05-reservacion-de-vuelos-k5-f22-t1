import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {InformationOrigin} from '../components/booking/flightOrigin/InformationOrigin';
import {BtnBack} from '../components/booking/BtnBack';
import {ButtonReserve} from '../components/booking/ButtonReserve';
import {FlightCalendar} from '../components/booking/flightOrigin/FlightCalendar';

export const FlightCalendarScreen = ({route, navigation}) => {
  const {flightData: flightDestiny, flightDataComplete: flightOrigin} =
    route.params;
  const flightInfo = route.params;
  // {"flightData": "Madrid,España ", "flightDataComplete": "Colima, México "}

  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
    dateComplete: '',
  });

  const {dateComplete} = date;

  return (
    <View style={styles.container}>
      <BtnBack navigation={navigation} />
      <InformationOrigin
        flightOrigin={flightOrigin}
        flightDestiny={flightDestiny}
      />
      <Text style={styles.title}>Select date</Text>
      <FlightCalendar date={date} setDate={setDate} />
      <ButtonReserve
        navigation={navigation}
        flightDestinyScreen={'FlightPassengersScreen'}
        flightData={dateComplete}
        flightDataComplete={flightInfo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    flex: 1,
    marginVertical: 20,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
  },
});
