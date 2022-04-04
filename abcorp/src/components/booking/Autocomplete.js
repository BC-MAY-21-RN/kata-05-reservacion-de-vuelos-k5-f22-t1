import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
export const Autocomplete = ({
  showAutoComplete,
  setShowAutoComplete,
  dataFilter,
  setflightOrigin,
}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setflightOrigin(item.name);
        setShowAutoComplete(false);
      }}>
      <>
        <Text style={styles.complete}>{item.name}</Text>
        <View style={styles.separatorComplete} />
      </>
    </TouchableOpacity>
  );
  return (
    <>
      {showAutoComplete && (
        <View style={styles.containerHelp}>
          {dataFilter.length === 0 && (
            <Text style={styles.complete}>No hay coincidencias</Text>
          )}
          <FlatList
            data={dataFilter}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  containerHelp: {
    backgroundColor: '#5D60F0',
    width: '100%',
    borderRadius: 10,
    padding: 5,
  },
  complete: {
    fontWeight: 'bold',
    color: 'white',
  },
  separatorComplete: {
    borderBottomWidth: 0.5,
    marginVertical: 1,
    borderBottomColor: 'white',
  },
});
