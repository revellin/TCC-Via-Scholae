import React, { useState } from 'react'
import { View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import {
  CustomLogo,
  CustomTitleText,
  CustomLabelText,
  ButtonNext,
  CustomInput,
  Line,
  Return
} from '../../components'
import { styles, Container, LogoContainer, Form } from './styles'
// Importando o ícone de retorno
import { useNavigation } from '@react-navigation/native'

export const Register = () => {
  const navigation = useNavigation()

  const [username, setUsername] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confSenha, setConfirmeSenha] = useState('')

  function handleSingIn() {
    if (username === ('') || telefone === ('') || email === ('') || senha === ('') || confSenha === ('')) {
      Alert.alert('', 'Prencha todos os campos.')
      return;
    }

    if (senha !== confSenha) {
      Alert.alert('', 'As senhas não coincidem.')
    }

    const data = {
      username,
      telefone,
      email,
      senha,
      confSenha
    }
    console.log(data);

    navigation.navigate('Home');
  }


  return (
    <ScrollView>
      <Container>
        <LogoContainer>
          <TouchableOpacity
            style={styles.return}
            onPress={() => navigation.navigate('Splash')}>
            <Return style={styles.return} onPress={() => navigation.navigate('Splash')} />
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
          <ButtonNext onPress={handleSingIn}>Cadastre</ButtonNext>
        </Form>
      </Container>
    </ScrollView >
  )
}

//onPress={() => navigation.navigate('Home')}
//import { useNavigation } from '@react-navigation/native'
