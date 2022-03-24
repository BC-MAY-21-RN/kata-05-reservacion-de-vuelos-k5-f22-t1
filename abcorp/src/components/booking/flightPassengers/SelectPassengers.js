import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export const SelectPassengers = ({item, numberViewed, setNumberViewed}) => {
  return (
    <TouchableOpacity onPress={() => setNumberViewed(item)}>
      <View style={styles.containerRender}>
        {numberViewed === item && (
          <Icon name="caret-forward-outline" size={30} color="#5D60F0" />
        )}
        <Text
          style={numberViewed === item ? styles.numberViewed : styles.number}>
          {item}
        </Text>
        {numberViewed === item && (
          <Icon name="caret-back-outline" size={30} color="#5D60F0" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  number: {
    color: 'black',
    fontSize: 35,
    opacity: 0.5,
  },
  numberViewed: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
  },
  containerRender: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
