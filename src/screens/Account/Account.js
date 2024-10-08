import React from 'react'
import {
  ProfilePic,
  ButtonChildren,
  ButtonEdit,
  ButtonSettings,
  Line,
} from '../../components'
import {
  Container,
  ProfileContainer,
  ConProfilePic,
  ButtonsContainer,
  ProfileName,
  SubTitles,
} from './styles'
import { useUser } from '../../database'

export const Account = () => {
  const { user } = useUser() // Acesse os dados do usuário logado

  return (
    <Container>
      <ProfileContainer>
        <ConProfilePic>
          <ProfilePic />
        </ConProfilePic>
        {/* Substitua os valores fixos pelos dados do usuário */}
        <ProfileName>{user ? user.name : 'Usuário não logado'}</ProfileName>
        <SubTitles>{user ? user.email : 'Email não disponível'}</SubTitles>
        <SubTitles>{user ? user.phone : 'Número não disponível'}</SubTitles>
      </ProfileContainer>

      <ButtonsContainer>
        <ButtonChildren />
        <ButtonEdit />
      </ButtonsContainer>

      <Line />

      <ButtonSettings />
    </Container>
  )
}
