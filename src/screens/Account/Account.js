import React from 'react'
import {
  ProfilePic,
  ButtonChildren,
  ButtonEdit,
  ButtonSettings,
  Line,
  BtnRotas,
} from '../../components'
import {
  Container,
  ProfileContainer,
  ConProfilePic,
  ButtonsContainer,
  ProfileName,
  SubTitles,
  styles,
} from './styles'
import { useUser } from '../../database'

export const Account = () => {
  const { user } = useUser() // Acesse os dados do usuário logado

  return (
    <Container>
      <ProfileContainer>
        <ConProfilePic>
          <ProfilePic style={styles.img} />
        </ConProfilePic>
        <ProfileName>{user ? user.name : 'Usuário não logado'}</ProfileName>
        <SubTitles>{user ? user.email : 'Email não disponível'}</SubTitles>
        <SubTitles>{user ? user.phone : 'Número não disponível'}</SubTitles>
      </ProfileContainer>

      <ButtonsContainer>
        {/* Exibir o botão "ButtonChildren" apenas se o usuário for um responsável */}
        {user && user.type === 'responsavel' && <ButtonChildren />}
        {/* Exibir o botão "BtnRotas" apenas se o usuário for um motorista */}
        {user && user.type === 'motorista' && <BtnRotas />}
        <ButtonEdit />
      </ButtonsContainer>

      <Line />

      <ButtonSettings />
    </Container>
  )
}
