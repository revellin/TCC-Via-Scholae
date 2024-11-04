import React, { useState } from 'react'
import { TouchableOpacity, Alert, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import {
  CustomLabelText,
  ButtonCadastro,
  CustomInput,
  Line,
  Return,
} from '../../../components'
import {
  styles,
  Container,
  Form,
  TitleText,
  ImagePreview,
  ImgContainer,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDatabase, useUser } from '../../../database'

export const RegisterCrianca = () => {
  const navigation = useNavigation()
  const db = useDatabase()
  const { user } = useUser()

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [parentesco, setParentesco] = useState('')
  const [image, setImage] = useState(null)

  if (!db) {
    Alert.alert('Erro', 'Banco de dados não está disponível.')
    return null
  }

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      Alert.alert('Erro', 'É necessário permitir o acesso à galeria!')
      return
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const handleRegister = async () => {
    if (nome === '' || idade === '' || parentesco === '') {
      Alert.alert('Atenção!', 'Preencha todos os campos.')
      return
    }

    const responsavelId = user?.id

    try {
      await db.runAsync(
        'INSERT INTO Crianca (name, idade, parentesco, imagem, responsavelId) VALUES (?, ?, ?, ?, ?)',
        [nome, idade, parentesco, image, responsavelId]
      )

      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!')
      navigation.navigate('ExibirCrianca')
    } catch (error) {
      console.error('Erro ao cadastrar: ', error)
      Alert.alert('Erro', 'Erro ao cadastrar. Tente novamente.')
    }
  }

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity style={styles.return}>
          <Return
            style={styles.return}
            onPress={() => navigation.navigate('ExibirCrianca')}
          />
        </TouchableOpacity>

        <Form>
          <TitleText>Registro Criança</TitleText>
          <Line style={styles.line}></Line>

          <CustomLabelText>Digite o nome completo da criança</CustomLabelText>
          <CustomInput
            placeholder="Insira o nome da criança"
            onChangeText={setNome}
            value={nome}
            maxLength={50}
          />

          <CustomLabelText>Digite a idade da criança</CustomLabelText>
          <CustomInput
            placeholder="Insira a idade da criança"
            keyboardType="numeric"
            onChangeText={setIdade}
            value={idade}
            maxLength={2}
          />

          <CustomLabelText>Parentesco</CustomLabelText>
          <CustomInput
            placeholder="Digite o seu parentesco"
            onChangeText={setParentesco}
            value={parentesco}
            maxLength={3}
          />

          <CustomLabelText>Selecione uma foto da Criança</CustomLabelText>
          <TouchableOpacity onPress={pickImage}>
            <ImgContainer>
              <CustomLabelText>Selecionar Imagem</CustomLabelText>
              {image && <ImagePreview source={{ uri: image }} />}
            </ImgContainer>
          </TouchableOpacity>

          <ButtonCadastro onPress={handleRegister}>Cadastrar</ButtonCadastro>
        </Form>
      </ScrollView>
    </Container>
  )
}
