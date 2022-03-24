import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {BtnBack} from '../components/booking/BtnBack';
import {FlightForm} from '../components/booking/FlightForm';
import {InformationOrigin} from '../components/booking/flightOrigin/InformationOrigin';

export const FlightDestinyScreen = ({navigation, route}) => {
  const [flightDestiny, setflightDestiny] = useState('');
  const {flightData} = route.params;
  return (
    <View style={styles.mainContainer}>
      <BtnBack navigation={navigation} />
      <InformationOrigin flightOrigin={flightData} />
      <FlightForm
        txt="Where will you be flying to?"
        navigation={navigation}
        flightDestinyScreen="FlightCalendarScreen"
        flightOrigin={flightDestiny}
        setflightOrigin={setflightDestiny}
        flightDataComplete={flightData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  titleDestiny: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
  },

  selectDestiny: {
    color: 'gray',
  },

  input: {
    borderBottomWidth: 0.8,
    color: 'black',
    padding: 2,
  },

  inputColor: {
    borderBottomColor: '#5D60F0',
  },
});
