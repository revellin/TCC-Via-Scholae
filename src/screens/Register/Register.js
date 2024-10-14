import React, { useState } from 'react'
import { TouchableOpacity, Alert } from 'react-native'
import {
  CustomLogo,
  CustomLabelText,
  ButtonCadastro,
  CustomInput,
  Line,
  Return,
} from '../../components'
import { styles, Container, LogoContainer, Form, TitleText, Motorista } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDatabase } from '../../database' 

export const Register = () => {
  const navigation = useNavigation()
  const db = useDatabase()

  const [username, setUsername] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confSenha, setConfirmeSenha] = useState('')

  const handleRegister = async () => {
    if (
      username === '' ||
      telefone === '' ||
      email === '' ||
      senha === '' ||
      confSenha === ''
    ) {
      Alert.alert('Atenção!', 'Preencha todos os campos.')
      return
    }

    if (senha !== confSenha) {
      Alert.alert('Erro', 'As senhas não coincidem')
      return
    }

    try {
      const existingResponsavel = await db.getFirstAsync(
        'SELECT * FROM Responsavel WHERE phone = ? OR email = ?',
        [telefone, email]
      )

      if (existingResponsavel) {
        Alert.alert('Erro', 'Este número de telefone ou email já existe')
        return
      }

      await db.runAsync(
        'INSERT INTO Responsavel (name, phone, email, password) VALUES (?, ?, ?, ?)',
        [username, telefone, email, senha],
        
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
      <LogoContainer>
        <TouchableOpacity
          style={styles.return}>
          <Return style={styles.return} onPress={() => navigation.navigate('Splash')} />
        </TouchableOpacity>
        <CustomLogo style={styles.img} />
      </LogoContainer>

      <Form>
        <TitleText>Registro Responsável</TitleText>
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

        <ButtonCadastro onPress={handleRegister}>Cadastre-se</ButtonCadastro>
        <Motorista onPress={() => navigation.navigate('RegisterMotorista')}>Sou Motorista</Motorista>
      </Form>
    </Container>
  )
}
