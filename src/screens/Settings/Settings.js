import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  CustomTitleText,
  ButtonProfile,
  ButtonYourAccount,
  ButtonChildrenSettings,
  ButtonAccessibility,
  Return,
} from '../../components'
import { styles, Container, Header, TextApp } from './styles'

export const Settings = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <Header>
        <Return style={styles.return} onPress={() => navigation.navigate('Home')} />
        <CustomTitleText style={styles.title}>Configurações</CustomTitleText>
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
