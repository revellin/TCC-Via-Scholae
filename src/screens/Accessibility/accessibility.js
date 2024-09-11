import React from 'react';
import { View } from 'react-native';
import { CustomTitleText, ButtonTheme, ButtonLanguage } from '../../components';
import { styles } from './style';
import AntDesign from '@expo/vector-icons/AntDesign';

export const Accessibility = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={30} color="black" />
        <CustomTitleText style={styles.title}>Accessibility</CustomTitleText>
      </View>

      {/* Botão Dark Mode */}
      <ButtonTheme></ButtonTheme>

      {/* Botão Language */}
      <ButtonLanguage></ButtonLanguage>
    </View>
  );
};