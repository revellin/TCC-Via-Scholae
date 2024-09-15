import React, { useState } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import {
  CustomLogo,
  CustomTitleText,
  CustomLabelText,
  ButtonNext,
  CustomInput,
  Line,
  Return
} from '../../components'
import { styles } from './styles'
// Importando o ícone de retorno
import { useNavigation } from '@react-navigation/native'

export const Register = () => {
  const navigation = useNavigation()

  const [username, setUsername] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [ConfSenha, setConfirmeSenha] = useState('')

  function handleSingIn(){
    if( username === ('') || telefone === ('') || email === ('') || senha === ('') || ConfSenha === ('')){
      alert("Prencha todos os campos")
      return;
    }

    if (senha !== ConfSenha){
      alert("As senhas não coincidem ")
    }

    const data = {
      username,
      telefone,
      email,
      senha,
      ConfSenha
    }
    console.log(data);

    navigation.navigate('Home');
  }


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity
          style={styles.return}
          onPress={() => navigation.navigate('Splash')}
        >
          <Return style={styles.return} onPress={() => navigation.navigate('Splash')}></Return>
        </TouchableOpacity>
        <CustomLogo style={styles.img} />
      </View>

      <View style={styles.form}>
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
        <CustomLabelText>Confirme sue senha</CustomLabelText>
        <CustomInput
          placeholder="Confirme sua senha"
          secureTextEntry
          onChangeText={setConfirmeSenha}
          value={ConfSenha}
        />
        <ButtonNext onPress={handleSingIn}>Next</ButtonNext>
      </View>
    </ScrollView>
  )
}

//onPress={() => navigation.navigate('Home')}
//import { useNavigation } from '@react-navigation/native'
