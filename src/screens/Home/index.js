import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomTitleText, CustomLabelText } from '../../components';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomTitleText style={styles.title}>ROTA</CustomTitleText>
      </View>

      <View style={styles.apiContainer}>
          <CustomLabelText style={styles.text}>Chegada</CustomLabelText>
          <Text style={styles.timeText}>00:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: 430,
    height: 570,
    backgroundColor: '#272727',
    justifyContent: 'center',
    paddingRight: 25,
  },
  title: {
    color: '#ffffff',
  }, 
  apiContainer: {
    paddingLeft: 25,
    marginTop: 15,
  },
  text: {
    fontSize: 45,
    color: '#272727',
  },
  timeText: {
    fontSize: 30,
    color: 'rgb(172,172,172)',
  },
});

