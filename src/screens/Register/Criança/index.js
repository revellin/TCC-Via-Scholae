import React, { useState } from 'react'
import { TouchableOpacity, Alert, ScrollView, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import {
  CustomLabelText,
  ButtonCadastro,
  CustomInput,
  Line,
  Return,
} from '../../../components'
import { styles, Container, Form, TitleText, TextImage } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDatabase } from '../../../database'

export const RegisterCrianca = () => {
  const navigation = useNavigation()
  const db = useDatabase()

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [parentesco, setParentesco] = useState('')
  const [image, setImage] = useState(null) // Estado para armazenar a imagem

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
      setImage(result.assets[0].uri) // Armazena a URI da imagem no estado
    }
  }

  const handleRegister = async () => {
    if (nome === '' || idade === '' || parentesco === '') {
      Alert.alert('Atenção!', 'Preencha todos os campos.')
      return
    }

    try {
      await db.runAsync(
        'INSERT INTO Crianca (name, idade, parentesco, imagem) VALUES (?, ?, ?, ?)',
        [nome, idade, parentesco, image] // Insere os dados corretamente
      )

      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!')
      // Você pode adicionar aqui a navegação para outra tela, se necessário
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
            onPress={() => navigation.navigate('Splash')}
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
            maxLength={30}
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
            maxLength={20}
          />

          <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
            <TextImage>Selecione uma imagem</TextImage>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={styles.image} />}

          <ButtonCadastro onPress={handleRegister}>Cadastre-se</ButtonCadastro>
        </Form>
      </ScrollView>
    </Container>
  )
}
