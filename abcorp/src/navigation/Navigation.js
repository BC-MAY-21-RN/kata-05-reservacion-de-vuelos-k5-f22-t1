import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterScreen} from '../screens/RegisterScreen';
import {LoginScreen} from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>

  );
};
