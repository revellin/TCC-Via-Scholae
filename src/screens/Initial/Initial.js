// Importa o React
import React, { useState } from 'react'
// Importa os componentes do React-Native
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {
  CustomTitleText,
  CustomLogo,
  CustomLabelText,
  CustomInput,
  ButtonContinue,
  ButtonRegister,
  Line,
} from '../../components'
import { styles } from './styles'

//Cria o componente principal do APP
export const Initial = () => {
  const navigation = useNavigation();
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')

  function handleSingIn() {
    if (telefone === '' || senha === '') {
      alert('Prencha todos os campos')
      return
    }

    const data = {
      telefone,
      senha,
    }
    console.log(data)

    navigation.navigate('Home');
  }

  return (
    // Container principal que engloba a tela toda
    <View style={styles.container}>
      {/* Container da logo */}
      <View style={styles.containerLogo}>
        {/* Inserindo a imagem */}
        <CustomLogo />
      </View>

      {/* Container do Formulário */}
      <View style={styles.formContainer}>
        {/* Título */}
        <CustomTitleText>Começe sua jornada</CustomTitleText>
        {/* Label */}
        <CustomLabelText>Digite seu telefone</CustomLabelText>
        {/* Cria um TextInput do tipo numerico (keyboardType="numeric") */}
        <CustomInput
          onChangeText={setTelefone}
          value={telefone}
          placeholder="Insira seu Telefone"
          keyboardType="numeric"
        />
        <CustomLabelText>Digite sua senha</CustomLabelText>
        {/* Cria um TextInput que oculta o texto enquanto digita para senha (secureTextEntry)*/}
        <CustomInput
          onChangeText={setSenha}
          value={senha}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
        {/* Define a rota do botão "Continue" */}

        <ButtonContinue onPress={handleSingIn}>Continue</ButtonContinue>

        {/* Container da linha entre os botões */}
        <View style={styles.lineContainer}>
          <Line style={styles.line}></Line>
          {/* Texto entre as duas linhas */}
          <Text style={styles.orText}>or</Text>
          <Line style={styles.line}></Line>
        </View>

        {/* Define a rota do botão "Register" */}
        <ButtonRegister></ButtonRegister>
      </View>
    </View>
  )
}
