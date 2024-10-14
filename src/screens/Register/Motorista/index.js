import React, { useState } from 'react'
import { TouchableOpacity, Alert, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import {
  CustomLogo,
  CustomLabelText,
  ButtonCadastro,
  CustomInput,
  Line,
  Return,
} from '../../../components'
import {
  styles,
  Container,
  LogoContainer,
  Form,
  TitleText,
  ImgContainer,
  ImagePreview,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDatabase } from '../../../database'

export const RegisterMotorista = () => {
  const navigation = useNavigation()
  const db = useDatabase()

  const [username, setUsername] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confSenha, setConfirmeSenha] = useState('')
  const [cnhFrente, setCnhFrente] = useState(null)
  const [cnhVerso, setCnhVerso] = useState(null)

  if (!db) {
    Alert.alert('Erro', 'Banco de dados não está disponível.');
    return;
  }

  const pickImage = async (setImage) => {
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
    if (
      username === '' ||
      telefone === '' ||
      email === '' ||
      senha === '' ||
      confSenha === '' ||
      !cnhFrente ||
      !cnhVerso
    ) {
      Alert.alert(
        'Atenção!',
        'Preencha todos os campos e insira as imagens da CNH.'
      )
      return
    }

    if (senha !== confSenha) {
      Alert.alert('Erro', 'As senhas não coincidem')
      return
    }

    try {
      const existingMotorista = await db.getFirstAsync(
        'SELECT * FROM Motorista WHERE phone = ? OR email = ?',
        [telefone, email]
      )

      if (existingMotorista) {
        Alert.alert('Erro', 'Este número de telefone ou email já existe')
        return
      }

      await db.runAsync(
        'INSERT INTO Motorista (name, phone, email, password) VALUES (?, ?, ?, ?)',
        [username, telefone, email, senha]
      )

      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!')
      navigation.navigate('Splash', { user: username })
    } catch (error) {
      console.error('Erro ao cadastrar: ', error)
      Alert.alert('Erro', 'Erro ao cadastrar. Tente novamente.')
    }
  }

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LogoContainer>
          <TouchableOpacity style={styles.return}>
            <Return
              style={styles.return}
              onPress={() => navigation.navigate('Splash')}
            />
          </TouchableOpacity>
          <CustomLogo style={styles.img} />
        </LogoContainer>

        <Form>
          <TitleText>Registro Motorista</TitleText>
          <Line style={styles.line}></Line>

          <CustomLabelText>Digite seu nome completo</CustomLabelText>
          <CustomInput
            placeholder="Insira seu nome"
            onChangeText={setUsername}
            value={username}
            maxLength={30}
          />

          <CustomLabelText>Digite seu telefone</CustomLabelText>
          <CustomInput
            placeholder="Insira seu número de telefone"
            keyboardType="phone-pad"
            onChangeText={setTelefone}
            value={telefone}
            maxLength={11}
          />

          <CustomLabelText>Digite seu Email</CustomLabelText>
          <CustomInput
            placeholder="Insira seu Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
            maxLength={100}
          />

          <CustomLabelText>Digite uma senha</CustomLabelText>
          <CustomInput
            placeholder="Digite uma senha"
            secureTextEntry
            onChangeText={setSenha}
            value={senha}
            maxLength={16}
          />

          <CustomLabelText>Confirme sua senha</CustomLabelText>
          <CustomInput
            placeholder="Confirme sua senha"
            secureTextEntry
            onChangeText={setConfirmeSenha}
            value={confSenha}
            maxLength={16}
          />

          {/* Campo para imagem da CNH (frente) */}
          <CustomLabelText>Imagem da CNH (Frente)</CustomLabelText>
          <TouchableOpacity onPress={() => pickImage(setCnhFrente)}>
            <ImgContainer>
              <CustomLabelText>Selecionar Imagem</CustomLabelText>
              { cnhFrente && (
                <ImagePreview 
                source={{ uri: cnhFrente }}/>)}
            </ImgContainer>
          </TouchableOpacity>

          {/* Campo para imagem da CNH (verso) */}
          <CustomLabelText>Imagem da CNH (Verso)</CustomLabelText>
          <TouchableOpacity onPress={() => pickImage(setCnhVerso)}>
            <ImgContainer>
              <CustomLabelText>Selecionar Imagem</CustomLabelText>
              { cnhVerso && (
                <ImagePreview 
                source={{ uri: cnhVerso }}/>)}
            </ImgContainer>
          </TouchableOpacity>

          <ButtonCadastro onPress={handleRegister}>Cadastre-se</ButtonCadastro>
        </Form>
      </ScrollView>
    </Container>
  )
}
