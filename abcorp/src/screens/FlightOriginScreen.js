import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {BtnBack} from '../components/booking/BtnBack';
// import {ButtonReserve} from '../components/booking/ButtonReserve';
import {FlightForm} from '../components/booking/FlightForm';

export const FlightOriginScreen = ({navigation}) => {
  const [flightOrigin, setflightOrigin] = useState('');
  return (
    <View style={styles.container}>
      <BtnBack navigation={navigation} />
      <FlightForm
        txt="Where are you now?"
        navigation={navigation}
        flightDestinyScreen="FlightDestinyScreen"
        flightOrigin={flightOrigin}
        setflightOrigin={setflightOrigin}
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
  },
});
