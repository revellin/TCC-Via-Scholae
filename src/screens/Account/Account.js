//Importa o React
import React from 'react'
//Importa os componentes do React-Native
import { ProfilePic, ButtonChildren, ButtonEdit, ButtonSettings, Line } from '../../components'
import { Container, ProfileContainer, ConProfilePic, ButtonsContainer, ProfileName, SubTitles } from './styles';

export const Account = () => {
  return (
    //Container princiapl
    <Container>
      {/* Conteiner do profile*/}
      <ProfileContainer>
        {/* Foto */}
        <ConProfilePic>
          {/* Adiciona a foto*/}
          <ProfilePic />
        </ConProfilePic>
        {/* Nome */}
        <ProfileName>Matheus Romano</ProfileName>
        <SubTitles>matheusemailfake@gmail.com</SubTitles>
        <SubTitles>+55 11 12345-6789</SubTitles>
      </ProfileContainer>

      {/* Container dos botoes */}
      <ButtonsContainer>
          <ButtonChildren />
          <ButtonEdit />
      </ButtonsContainer>

      {/* linha */}
      <Line />

      {/* Container Settings */}
      <ButtonSettings />
    </Container>
  )
}