import React, { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Return, ButtonAtualizar } from '../../../components'
import {
  styles,
  Container,
  Header,
  Form,
  Input,
  TitleText,
  Label,
} from './styles'
import { useDatabase, useUser } from '../../../database' // Importando useDatabase e useUser

export const UpdatePassword = () => {
  const navigation = useNavigation()
  const { user } = useUser() // Acesse os dados do usuário
  const db = useDatabase() // Acesse a instância do banco de dados
  const [senhaAtual, setSenhaAtual] = useState('')
  const [novaSenha, setNovaSenha] = useState('')
  const [confSenha, setConfSenha] = useState('')

  const handleUpdatePassword = async () => {
    if (senhaAtual === '' || novaSenha === '' || confSenha === '') {
      Alert.alert('', 'Preencha todos os campos')
      return
    }

    if (novaSenha !== confSenha) {
      Alert.alert('Erro', 'As novas senhas não coincidem')
      return
    }

    try {
      // Tente atualizar a senha no banco de dados
      const result = await db.runAsync(
        `UPDATE Responsavel SET password = ? WHERE phone = ? AND password = ?`,
        [novaSenha, user.phone, senhaAtual]
      )

      if (result.changes === 0) {
        Alert.alert('Erro', 'A senha atual está incorreta')
        return
      }

      // Se a atualização foi bem-sucedida
      Alert.alert('Sucesso', 'Senha atualizada com sucesso!')
      navigation.navigate('YourAccount')

      // Aqui você pode adicionar lógica adicional, como navegação ou logout, se necessário
    } catch (error) {
      console.error('Erro ao atualizar a senha: ', error)
      Alert.alert('Erro', 'Houve um erro ao atualizar a senha.')
    }
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
        <Label>Digite sua senha atual</Label>
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

        <Label>Confirme sua senha</Label>
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
