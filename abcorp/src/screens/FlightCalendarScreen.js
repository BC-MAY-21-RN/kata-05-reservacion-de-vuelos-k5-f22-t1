import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {InformationOrigin} from '../components/booking/flightOrigin/InformationOrigin';
import {Calendar} from 'react-native-calendars';
import {BtnBack} from '../components/booking/BtnBack';
import {ButtonReserve} from '../components/booking/ButtonReserve';

const [dateNow] = new Date().toISOString().split('T');
const [yearNow, monthNow, dayNow] = dateNow.split('-');

export const FlightCalendarScreen = ({route, navigation}) => {
  const {flightOrigin, flightDataComplete} = route.params;

  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
    dateComplete: '',
  });

  const {dateComplete} = date;

  useEffect(() => {
    setDate({
      day: dayNow,
      month: monthNow,
      year: yearNow,
      dateComplete: dateNow,
    });
  }, []);

  return (
    <View style={styles.container}>
      <BtnBack navigation={navigation} />
      <InformationOrigin
        flightOrigin={flightOrigin}
        flightDestiny={flightDataComplete}
      />
      <Text style={styles.title}>Select date</Text>
      <Calendar
        markedDates={{
          [dateComplete]: {
            selected: true,
            marked: true,
            selectedColor: '#5D60F0',
          },
        }}
        onDayPress={({day, month, year, dateString}) => {
          setDate({
            day,
            month,
            year,
            dateComplete: dateString,
          });
        }}
        theme={{arrowColor: '#5D60F0'}}
      />
      <ButtonReserve
        navigation={navigation}
        flightDestinyScreen={'Some'}
        flightOrigin={flightOrigin}
        flightDataComplete={flightDataComplete}
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
