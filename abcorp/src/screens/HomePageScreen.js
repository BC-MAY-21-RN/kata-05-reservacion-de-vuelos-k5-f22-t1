/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {CardFlight} from '../components/home/CardFlight';
import {ItemSeparator} from '../components/home/ItemSeparator';
import {BtnFloat} from '../components/home/BtnFloat';
import {useDispatch} from 'react-redux';
import {logout} from '../actions/auth';
import {getFlightsApi} from '../actions/flights';
import {useSelector} from 'react-redux';
import {ModalLoading} from '../components/auth/ModalLoading';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomePageScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {flight} = useSelector(state => state.flight);
  const {uid} = useSelector(state => state.auth);
  const {loading} = useSelector(state => state.ui);
  useEffect(() => {
    dispatch(getFlightsApi(uid));
  }, []);
  console.log(flight);

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
      {flight.length === 0 ? (
        <View style={styles.containerNotFlight}>
          <Text style={styles.textNoFlight}>There's no flights yet.</Text>
          <Icon name="airplane" color="#5D60F0" size={50} />
        </View>
      ) : (
        <FlatList
          data={flight}
          renderItem={CardFlight}
          key={item => item.users}
          ItemSeparatorComponent={() => <ItemSeparator />}
          showsVerticalScrollIndicator={false}
        />
      )}

      <BtnFloat navigation={navigation} />
      {loading && <ModalLoading message="Loading" />}
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
  containerNotFlight: {
    alignItems: 'center',
    marginTop: 200,
  },
  textNoFlight: {
    fontSize: 30,
    color: 'black',
  },
});
