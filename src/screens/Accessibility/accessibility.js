import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { CustomTitleText, ButtonTheme, ButtonLanguage, Return } from '../../components';
import { styles } from './style';


export const Accessibility = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Return onPress={() => navigation.navigate('Settings')}></Return>
        <CustomTitleText style={styles.title}>Acessibilidade</CustomTitleText>
      </View>

      {/* Botão Dark Mode */}
      <ButtonTheme></ButtonTheme>

      {/* Botão Language */}
      <ButtonLanguage></ButtonLanguage>
    </View>
  );
};