import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const BtnBack = ({navigation}) => {
  return (
    <Icon
      name="chevron-back-outline"
      size={40}
      color="#5D60F0"
      onPress={() => navigation.goBack()}
    />
  );
};
