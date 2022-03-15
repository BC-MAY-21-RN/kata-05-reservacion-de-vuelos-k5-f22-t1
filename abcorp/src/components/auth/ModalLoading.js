import React, {useState} from 'react';
import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const ModalLoading = ({message}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View>
      <Modal transparent={true} visible={true}>
        <View style={styles.container}>
          <View style={styles.background}>
            {loading ? (
              <ActivityIndicator color="#5D60F0" size={50} />
            ) : (
              <Icon name="checkmark-circle-outline" color="#5D60F0" size={50} />
            )}
            <Text style={styles.message}>{message}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: 120,
    height: 120,
    backgroundColor: '#20232A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  message: {
    marginTop: 5,
    color: '#5D60F0',
  },
});
