import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {CardFlight} from '../components/home/CardFlight';
import {ItemSeparator} from '../components/home/ItemSeparator';
import {BtnFloat} from '../components/home/BtnFloat';
import data from '../components/home/API';

export const HomePageScreen = () => {
  //const onPress = () =>
  return (
    <View style={styles.home}>
      <Text style={styles.title}>My Flights</Text>
      <FlatList
        data={data}
        renderItem={CardFlight}
        key={item => item.id}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
      <BtnFloat />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    margin: 20,
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: '#5D60F0',
    fontFamily: 'Impact',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
});
