import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  ButtonProfile,
  ButtonYourAccount,
  ButtonChildrenSettings,
  ButtonAccessibility,
  Return,
} from '../../components'
import { styles, Container, Header, TitleText, TextApp } from './styles'

export const Settings = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <Header>
        <Return style={styles.return} onPress={() => navigation.navigate('Home')} />
          <TitleText>Configurações</TitleText>
      </Header>
      {/* Profile Section */}
      <ButtonProfile></ButtonProfile>

      {/* App Settings Section */}
      <TextApp>Configurações do App</TextApp>

      {/* Your Account */}
      <ButtonYourAccount></ButtonYourAccount>

      {/* Children */}
      <ButtonChildrenSettings></ButtonChildrenSettings>

      {/* Accessibility */}
      <ButtonAccessibility />
    </Container>
  )
}
