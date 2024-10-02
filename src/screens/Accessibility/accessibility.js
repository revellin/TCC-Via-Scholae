import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { CustomTitleText, ButtonTheme, ButtonLanguage, Return } from '../../components';
import { styles, Container, Header } from './style';


export const Accessibility = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <Header>
        <Return onPress={() => navigation.navigate('Settings')}></Return>
        <CustomTitleText style={styles.title}>Acessibilidade</CustomTitleText>
      </Header>

      {/* Botão Dark Mode */}
      <ButtonTheme></ButtonTheme>

      {/* Botão Language */}
      <ButtonLanguage></ButtonLanguage>
    </Container>
  );
};