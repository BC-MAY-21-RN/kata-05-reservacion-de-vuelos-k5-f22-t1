import React, {useEffect} from 'react';
import {Calendar} from 'react-native-calendars';

const [dateNow] = new Date().toISOString().split('T');
const [yearNow, monthNow, dayNow] = dateNow.split('-');

export const FlightCalendar = ({date, setDate}) => {
  const {dateComplete} = date;

  useEffect(() => {
    setDate({
      day: dayNow,
      month: monthNow,
      year: yearNow,
      dateComplete: dateNow,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
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
      theme={{
        arrowColor: '#5D60F0',
        textMonthFontWeight: 'bold',
        textMonthFontSize: 30,
      }}
    />
  );
};
