import React, { useState } from 'react'
import { View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import {
  CustomLogo,
  CustomTitleText,
  CustomLabelText,
  ButtonCadastro,
  CustomInput,
  Line,
  Return,
} from '../../components'
import { styles, Container, LogoContainer, Form } from './styles'
// Importando o ícone de retorno
import { useNavigation } from '@react-navigation/native'
import { insertResponsavel } from '../../database';

export const Register = () => {
  const navigation = useNavigation()

  const [username, setUsername] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confSenha, setConfirmeSenha] = useState('')

  const handleSingIn = async () => {
    if (
      username === '' ||
      telefone === '' ||
      email === '' ||
      senha === '' ||
      confSenha === ''
    ) {
      Alert.alert('', 'Prencha todos os campos.')
      return
    }

    if (senha !== confSenha) {
      Alert.alert('', 'As senhas não coincidem.')
    }

    try {
      // Insira o responsável no banco de dados
      await insertResponsavel(username, telefone, email, senha) // Ajuste os parâmetros conforme sua tabela
      alert('Cadastro realizado com sucesso!')
      navigation.navigate('Home')
    } catch (error) {
      console.error('Erro ao cadastrar:', error)
      alert('Erro ao cadastrar. Tente novamente.')
    }
  }

  return (

      <Container>
        <LogoContainer>
          <TouchableOpacity
            style={styles.return}
            onPress={() => navigation.navigate('Splash')}
          >
            <Return
              style={styles.return}
              onPress={() => navigation.navigate('Splash')}
            />
          </TouchableOpacity>
          <CustomLogo style={styles.img} />
        </LogoContainer>

        <Form>
          <CustomTitleText style={styles.title}>Registro</CustomTitleText>
          <Line style={styles.line}></Line>

          <CustomLabelText>Digite seu nome completo</CustomLabelText>
          <CustomInput
            placeholder="Insira seu nome"
            onChangeText={setUsername}
            value={username}
          />

          <CustomLabelText>Digite seu telefone</CustomLabelText>
          <CustomInput
            placeholder="Insira seu número de telefone"
            keyboardType="phone-pad"
            onChangeText={setTelefone}
            value={telefone}
          />

          <CustomLabelText>Digite seu Email</CustomLabelText>
          <CustomInput
            placeholder="Insira seu Emsil"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />

          <CustomLabelText>Digite uma senha</CustomLabelText>
          <CustomInput
            placeholder="Digite uma senha"
            secureTextEntry
            onChangeText={setSenha}
            value={senha}
          />
          <CustomLabelText>Confirme sua senha</CustomLabelText>
          <CustomInput
            placeholder="Confirme sua senha"
            secureTextEntry
            onChangeText={setConfirmeSenha}
            value={confSenha}
          />
          <ButtonCadastro onPress={handleSingIn}>Cadastre-se</ButtonCadastro>
        </Form>
      </Container>

  )
}
