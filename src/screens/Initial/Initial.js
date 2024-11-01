import React, { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  CustomTitleText,
  CustomLogo,
  CustomLabelText,
  CustomInput,
  ButtonContinue,
  ButtonRegistro,
  Line,
} from '../../components'
import {
  styles,
  Container,
  ContainerLogo,
  FormContainer,
  LineContainer,
  OrText,
} from './styles'
import { useDatabase, useUser } from '../../database'

export const Initial = () => {
  const navigation = useNavigation()
  // Obtenha a instância do banco de dados
  const db = useDatabase()
  // Acesse a função de login do contexto
  const { login } = useUser()
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')

  const handleSingIn = async () => {
    if (telefone === '' || senha === '') {
      Alert.alert('Atenção!', 'Preencha todos os campos.')
      return
    }

    try {
      // Verifica se o usuário existe no banco de dados (incluindo tipo)
      const user = await db.getFirstAsync(
        'SELECT * FROM Responsavel WHERE phone = ? AND password = ?',
        [telefone, senha]
      )

      const motorista = await db.getFirstAsync(
        'SELECT * FROM Motorista WHERE phone = ? AND password = ?',
        [telefone, senha]
      )

      if (user) {
        const userData = {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          end: user.end,
          cep: user.cep,
          type: user.type,
        }
        login(userData)
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'MainHome', 
              params: { screen: 'Home', user: user.name },
            },
          ],
        })
      } else if (motorista) {
        // Se o motorista existir, armazene os dados no contexto
        const userData = {
          id: motorista.id,
          name: motorista.name,
          email: motorista.email,
          phone: motorista.phone,
          end: motorista.end,
          cep: motorista.cep,
          type: motorista.type,
        }
        login(userData)
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'MainHome',
              params: { screen: 'Home', user: motorista.name },
            },
          ],
        })
      } else {
        Alert.alert('Erro', 'Número de telefone ou senha incorretos.')
      }
    } catch (error) {
      console.error('Erro ao logar: ', error)
      Alert.alert('Erro', 'Erro ao logar. Tente novamente.')
    }
  }

  return (
    <Container>
      <ContainerLogo>
        <CustomLogo />
      </ContainerLogo>

      <FormContainer>
        <CustomTitleText>Comece sua jornada</CustomTitleText>
        <CustomLabelText>Digite seu telefone</CustomLabelText>
        <CustomInput
          onChangeText={setTelefone}
          value={telefone}
          placeholder="Insira seu Telefone"
          keyboardType="numeric"
          maxLength={11}
        />
        <CustomLabelText>Digite sua senha</CustomLabelText>
        <CustomInput
          onChangeText={setSenha}
          value={senha}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          maxLength={16}
        />
        <ButtonContinue onPress={handleSingIn}>Continue</ButtonContinue>

        <LineContainer>
          <Line style={styles.line}></Line>
          <OrText>or</OrText>
          <Line style={styles.line}></Line>
        </LineContainer>

        <ButtonRegistro onPress={() => navigation.navigate('Register')}>
          Registro
        </ButtonRegistro>
      </FormContainer>
    </Container>
  )
}
