import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { CustomTitleText, ButtonPassword, Return } from '../../components'
import { styles, Container, Header } from './styles';

export const YourAccount = () => {
  const navigation = useNavigation()
  return (
    <Container>
      {/* Cabeçalho da tela */}
      <Header>
        <Return onPress={() => navigation.navigate('Settings')}></Return>
        <CustomTitleText style={styles.title}>Conta</CustomTitleText>
      </Header>

      {/* Botão Change Password */}
      <ButtonPassword></ButtonPassword>
    </Container>
  )
};