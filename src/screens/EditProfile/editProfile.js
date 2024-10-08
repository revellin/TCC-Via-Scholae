// Importa o react
import React from 'react'
// Importa os componentes do react-native
import { TouchableOpacity } from 'react-native'
import { ProfilePic, Return } from '../../components'
import {
  styles,
  Container,
  Header,
  TitleText,
  ProfileContainer,
  FormContainer,
  EditPictureText,
  Content,
  ContentText,
  Label,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { useUser } from '../../database'

export const EditProfile = () => {
  const navigation = useNavigation()
   // Acesse os dados do usuário logado
  const { user } = useUser()

  return (
    //Container principal
    <Container>
      {/* Header */}
      <Header>
        {/* Botão de retorno */}
        <Return
          style={styles.back}
          onPress={() => navigation.navigate('Home')}
        ></Return>

        {/* Título */}
        <TitleText>Edite suas Informações</TitleText>
      </Header>

      {/* Profile Picture */}
      <ProfileContainer>
        {/* Adiciona a imagem */}
        <ProfilePic />
        <TouchableOpacity>
          <EditPictureText>Edit Picture</EditPictureText>
        </TouchableOpacity>
      </ProfileContainer>

      {/* Form */}
      <FormContainer>
        <Content onPress={() => navigation.navigate('EditName')}>
          <Label>Nome</Label>
          <ContentText>{user ? user.name : 'Nome não disponível'}</ContentText>
        </Content>

        <Content onPress={() => navigation.navigate('EditPhone')}>
          <Label>Número</Label>
          <ContentText>{user ? user.phone : 'Número não disponível'}</ContentText>
        </Content>

        <Content onPress={() => navigation.navigate('EditEmail')}>
          <Label>Email</Label>
          <ContentText>{user ? user.email : 'Email não disponível'}</ContentText>
        </Content>
      </FormContainer>
    </Container>
  )
}
