import { useState } from 'react'
import {
  TouchableOpacity,
  Alert,
} from 'react-native'
import { ProfilePic, Return } from '../../components'
import {
  styles,
  Container,
  Header,
  TitleText,
  ProfileContainer,
  FormContainer,
  Content,
  ContentText,
  Label,
  EditPictureText,
} from './styles'
import * as ImagePicker from 'expo-image-picker'
import { useNavigation } from '@react-navigation/native'
import { useUser, saveProfilePic } from '../../database'

export const EditProfile = () => {
  const navigation = useNavigation()
  const { user } = useUser()
  const [image, setImage] = useState(null)

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      Alert.alert('Erro', 'É necessário permitir o acesso à galeria!')
      return
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.canceled) {
      const imageUri = result.assets[0].uri
      setImage(imageUri)

      if (user && db) {
        saveProfilePic(db, user, imageUri) // Passa o banco, usuário e URI da imagem
        useUser({ ...user, profilePic: imageUri }) // Atualiza o estado do usuário
      }
    }
  }

  return (
    <Container>
      <Header>
        <Return
          style={styles.back}
          onPress={() => navigation.navigate('Perfil')}
        />
        <TitleText>Edite suas Informações</TitleText>
      </Header>

      <ProfileContainer>
        {/* Passa a URI da imagem para o ProfilePic*/}
        <ProfilePic uri={image || user?.profilePic} />
        <TouchableOpacity onPress={pickImage}>
          {/* Corrigido para chamar pickImage */}
          <EditPictureText>Edit Picture</EditPictureText>
        </TouchableOpacity>
      </ProfileContainer>

      <FormContainer>
        <Content onPress={() => navigation.navigate('EditName')}>
          <Label>Nome</Label>
          <ContentText>{user ? user.name : 'Nome não disponível'}</ContentText>
        </Content>

        <Content onPress={() => navigation.navigate('EditPhone')}>
          <Label>Número</Label>
          <ContentText>
            {user ? user.phone : 'Número não disponível'}
          </ContentText>
        </Content>

        <Content onPress={() => navigation.navigate('EditEmail')}>
          <Label>Email</Label>
          <ContentText>
            {user ? user.email : 'Email não disponível'}
          </ContentText>
        </Content>
      </FormContainer>
    </Container>
  )
}
