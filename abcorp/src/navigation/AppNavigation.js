import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePageScreen} from '../screens/HomePageScreen';
import {FlightOriginScreen} from '../screens/FlightOriginScreen';
import {FlightDestinyScreen} from '../screens/FlightDestinyScreen';
import {FlightCalendarScreen} from '../screens/FlightCalendarScreen';
import {FlightPassengersScreen} from '../screens/FlightPassengersScreen';
import {FlightReceiveScreen} from '../screens/FlightReceiveScreen';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="HomeScreen" component={HomePageScreen} />
      <Stack.Screen name="FlightOriginScreen" component={FlightOriginScreen} />
      <Stack.Screen
        name="FlightDestinyScreen"
        component={FlightDestinyScreen}
      />
      <Stack.Screen
        name="FlightCalendarScreen"
        component={FlightCalendarScreen}
      />
      <Stack.Screen
        name="FlightPassengersScreen"
        component={FlightPassengersScreen}
      />
      <Stack.Screen
        name="FlightReceiveScreen"
        component={FlightReceiveScreen}
      />
    </Stack.Navigator>
  );
};
