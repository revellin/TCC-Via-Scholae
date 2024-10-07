//Importa o react
import React from 'react'
//Importa os componentes do react6 native
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { ProfilePic, CustomLabelText, Return } from '../../components'
import {
  styles,
  Container,
  Header,
  TitleText,
  ProfileContainer,
  FormContainer,
  EditPictureText,
  Input,
} from './styles'
import { useNavigation } from '@react-navigation/native'

export const EditProfile = () => {
  const navigation = useNavigation()
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
        <ProfilePic></ProfilePic>
        <TouchableOpacity>
          <EditPictureText>Edit Picture</EditPictureText>
        </TouchableOpacity>
      </ProfileContainer>

      {/* Form */}
      <FormContainer>
          <CustomLabelText>Name</CustomLabelText>
          <Input placeholder="Caio" />

          <CustomLabelText>Phone</CustomLabelText>
          <Input placeholder="+55 11 12345-6789" />

          <CustomLabelText>Email</CustomLabelText>
          <Input placeholder="matheusemailfake@gmail.com" />
      </FormContainer>
    </Container>
  )
}
