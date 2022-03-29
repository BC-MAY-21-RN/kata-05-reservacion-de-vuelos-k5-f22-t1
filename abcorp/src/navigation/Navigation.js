import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterScreen} from '../screens/RegisterScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {AppNavigation} from './AppNavigation';

import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../reducers/authSlice';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const dispatch = useDispatch();
  const {uid} = useSelector(state => state.auth);
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user?.uid) {
        dispatch(login(user));
      }
    });
  }, [dispatch]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {uid ? (
        <Stack.Screen name="HomePageScreen" component={AppNavigation} />
      ) : (
        <>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
