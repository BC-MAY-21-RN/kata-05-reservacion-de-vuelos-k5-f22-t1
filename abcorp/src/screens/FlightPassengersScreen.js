import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {BtnBack} from '../components/booking/BtnBack';
import {ButtonReserve} from '../components/booking/ButtonReserve';
import {InformationOrigin} from '../components/booking/flightOrigin/InformationOrigin';
import {SelectPassengers} from '../components/booking/flightPassengers/SelectPassengers';
import {getMonth} from '../helpers/getMonth';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const FlightPassengersScreen = ({route, navigation}) => {
  const [numberViewed, setNumberViewed] = useState(1);

  const {flightData, flightDataComplete} = route.params;
  const [year, month, day] = flightData.split('-');
  const {flightData: flightDestiny, flightDataComplete: flightOrigin} =
    flightDataComplete;
  const monthString = getMonth(month);

  const ItemSeparator = () => <View style={styles.separator} />;

  console.log(numberViewed.length);

  return (
    <View style={styles.container}>
      <BtnBack navigation={navigation} />
      <InformationOrigin
        flightOrigin={flightOrigin}
        flightDestiny={flightDestiny}
      />
      <Text style={styles.date}>
        {monthString} {day}, {year}
      </Text>
      <Text style={styles.title}>How many passengers?</Text>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <SelectPassengers
              numberViewed={numberViewed}
              setNumberViewed={setNumberViewed}
              item={item}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
      <ButtonReserve
        navigation={navigation}
        flightDestinyScreen={'HomeScreen'}
        flightData={numberViewed ? 'complete' : ''}
        flightDataComplete={''}
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
  date: {
    color: 'black',
    fontWeight: 'bold',
  },
  separator: {
    borderWidth: 1,
    opacity: 0.1,
  },
  list: {
    height: 250,
  },
});
