import React from 'react';
import { View, Text } from 'react-native';
import { CustomTitleText, CustomLabelText } from '../../components';
import { styles } from './styles';

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