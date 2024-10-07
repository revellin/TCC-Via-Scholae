import React, { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Return,
  ButtonAtualizar,
} from '../../../components'
import { styles, Container, Header, Form, Input, TitleText, Label } from './styles'

export const UpdatePassword = () => {
  const navigation = useNavigation()
  const [senhaAtual, setSenhaAtual] = useState('')
  const [novaSenha, setNovaSenha] = useState('')
  const [confSenha, setConfSenha] = useState('')

  const handleUpdatePassword = () => {
    if (senhaAtual === '' || novaSenha === '' || confSenha === '') {
      Alert.alert('', 'Prencha todos os campos')
      return
    }
    // Aqui você pode implementar a lógica de atualização de senha, como verificar as senhas e enviar uma solicitação para o servidor.
    if (novaSenha !== confSenha) {
      Alert.alert('Erro', 'As novas senhas não coincidem')
      return
    }
    // Simulação de atualização de senha bem-sucedida
    Alert.alert('Sucesso', 'Senha atualizada com sucesso!')
  }

  return (
    <Container>
      <Header>
        <Return
          style={styles.back}
          onPress={() => navigation.navigate('YourAccount')}
        />
        <TitleText>Atualize sua senha</TitleText>
      </Header>

      <Form>
        <Label>Digite sua senha atual </Label>
        <Input
          placeholder="Insira sua senha atual"
          secureTextEntry
          value={senhaAtual}
          onChangeText={setSenhaAtual}
        />

        <Label>Digite uma nova senha</Label>
        <Input
          placeholder="Digite uma nova senha"
          secureTextEntry
          value={novaSenha}
          onChangeText={setNovaSenha}
        />

        <Label>Confirme sua senha     </Label>
        <Input
          placeholder="Confirme sua senha"
          secureTextEntry
          value={confSenha}
          onChangeText={setConfSenha}
        />

        <ButtonAtualizar onPress={handleUpdatePassword} />
      </Form>
    </Container>
  )
}
