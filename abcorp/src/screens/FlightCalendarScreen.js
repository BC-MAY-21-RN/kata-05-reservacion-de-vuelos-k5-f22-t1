import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {InformationOrigin} from '../components/booking/flightOrigin/InformationOrigin';
import {BtnBack} from '../components/booking/BtnBack';
import {ButtonReserve} from '../components/booking/ButtonReserve';
import {FlightCalendar} from '../components/booking/flightOrigin/FlightCalendar';

export const FlightCalendarScreen = ({route, navigation}) => {
  const {flightOrigin, flightDataComplete} = route.params;
  const flightData = route.params;

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
        flightDestiny={flightDataComplete}
      />
      <Text style={styles.title}>Select date</Text>
      <FlightCalendar date={date} setDate={setDate} />
      <ButtonReserve
        navigation={navigation}
        flightDestinyScreen={'Some'}
        flightOrigin={dateComplete}
        flightDataComplete={flightData}
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
