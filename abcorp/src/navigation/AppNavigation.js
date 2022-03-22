import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePageScreen} from '../screens/HomePageScreen';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomePageScreen} />
    </Stack.Navigator>

  );
};