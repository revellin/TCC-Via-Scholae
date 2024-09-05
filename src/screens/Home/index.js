import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomTitleText } from '../../components';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomTitleText>ROTA</CustomTitleText>
      </View>

      <View style={styles.apiContainer}>
        <View style={styles.apiContent}>
          <Text style={styles.arrivalText}>Chegada</Text>
          <Text style={styles.timeText}>00:00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  apiContainer: {
    height: 100,
    backgroundColor: 'white',
    borderTopColor: '#d3d3d3',
    borderTopWidth: 2,
  },
  apiContent: {
    padding: 10,
  },
  arrivalText: {
    fontSize: 18,
    color: 'black',
  },
  timeText: {
    fontSize: 14,
    color: '#909090',
  },
});

