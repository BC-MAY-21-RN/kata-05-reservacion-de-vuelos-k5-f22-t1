import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {CardFlight} from '../components/home/CardFlight';
import {ItemSeparator} from '../components/home/ItemSeparator';
import {BtnFloat} from '../components/home/BtnFloat';
import data from '../components/home/API';
import {useDispatch} from 'react-redux';
import {logout} from '../actions/auth';

export const HomePageScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <View style={styles.home}>
      <View style={styles.container}>
        <Text style={styles.title}>My Flights</Text>
        <Text style={styles.LogOut} onPress={logoutUser}>
          Log out
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={CardFlight}
        key={item => item.id}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
      <BtnFloat navigation={navigation} />
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

  LogOut: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
