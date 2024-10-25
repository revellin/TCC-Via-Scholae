import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  ButtonProfile,
  ButtonYourAccount,
  ButtonChildrenSettings,
  ButtonRotasSettings,
  ButtonAccessibility,
  Return,
} from '../../components'
import {
  styles,
  Container,
  Header,
  TitleText,
  TextApp,
  LogoutButton,
  LogoutButtonText,
} from './styles'
import { useUser } from '../../database'

export const Settings = () => {
  const navigation = useNavigation()
  // Acesse o estado do usuário
  const { setUser, user } = useUser()

  const handleLogout = () => {
    // Limpa os dados do usuário no contexto (faz logout)
    setUser(null)
    // Redireciona para a tela de login
    navigation.reset({
      index: 0,
      routes: [{ name: 'Splash' }],
    })
  }

  return (
    <Container>
      <Header>
        <Return
          style={styles.return}
          onPress={() => navigation.navigate('Home')}
        />
        <TitleText>Configurações</TitleText>
      </Header>

      {/* Profile Section */}
      <ButtonProfile />

      {/* App Settings Section */}
      <TextApp>Configurações do App</TextApp>

      {/* Your Account */}
      <ButtonYourAccount />

      {/* Renderizar o botão correto com base no tipo de usuário */}
      {user?.type === 'motorista' && <ButtonRotasSettings />}
      {user && user.type === 'responsavel' && <ButtonChildrenSettings />}

      {/* Accessibility */}
      <ButtonAccessibility />

      {/* Logout Button */}
      <LogoutButton onPress={handleLogout}>
        <LogoutButtonText>Sair da conta</LogoutButtonText>
      </LogoutButton>
    </Container>
  )
}
