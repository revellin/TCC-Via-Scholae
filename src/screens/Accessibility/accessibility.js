import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ButtonTheme, ButtonLanguage, Return } from '../../components';
import { Container, Header, TitleText } from './style';

export const Accessibility = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Pega o status do tema a partir dos parâmetros passados ou usa o valor padrão 'off'
  const { themeStatus } = route.params || { themeStatus: 'off' };

  return (
    <Container>
      <Header>
        <Return onPress={() => navigation.navigate('Settings')} />
        <TitleText>Acessibilidade</TitleText>
      </Header>

      {/* Botão Dark Mode */}
      <ButtonTheme
        themeStatus={themeStatus} // Passa o valor atual do status do tema
        onPress={() => navigation.navigate('Theme', { themeStatus })}
      />

      {/* Botão Language */}
      <ButtonLanguage />
    </Container>
  );
};
