import React, { useState } from 'react'
import { View, TouchableOpacity, Alert } from 'react-native'
import {
  Container,
  Header,
  Check,
  Form,
  TitleText,
  Label,
  Input,
} from './styles'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useDatabase, useUser } from '../../../database'
import { useTheme } from 'styled-components/native';

export const EditName = () => {
  const navigation = useNavigation()
  const { user, setUser } = useUser() // Acesse os dados e a função para atualizar o usuário no contexto
  const db = useDatabase() // Acesse a instância do banco de dados
  const [newName, setNewName] = useState(user ? user.name : '') // Estado para o novo nome
  const theme = useTheme();

  // Função para atualizar o nome no banco de dados
  const handleUpdateName = async () => {
    if (!newName) {
      Alert.alert('Erro', 'O nome não pode estar vazio.')
      return
    }

    try {
      // Verifica se o usuário é um responsável ou motorista
      const table = user.type === 'motorista' ? 'Motorista' : 'Responsavel'

      // Atualize o nome na tabela correta (Responsavel ou Motorista)
      await db.runAsync(`UPDATE ${table} SET name = ? WHERE phone = ?`, [
        newName,
        user.phone,
      ])

      // Atualize os dados do usuário no contexto
      setUser({ ...user, name: newName })

      Alert.alert('Sucesso', 'Nome atualizado com sucesso!')

      // Navegue de volta para a tela de perfil
      navigation.navigate('EditProfile')
    } catch (error) {
      console.error('Erro ao atualizar nome: ', error)
      Alert.alert('Erro', 'Houve um erro ao atualizar o nome.')
    }
  }

  return (
    <Container>
      {/* Header da tela */}
      <Header>
        {/* Botão de retorno */}
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <AntDesign name="left" size={30} color={theme.text} />
          </TouchableOpacity>
        </View>

        {/* Título da tela */}
        <TitleText>Nome</TitleText>

        {/* Botão de confirmação */}
        <Check>
          <TouchableOpacity onPress={handleUpdateName}>
            <AntDesign name="check" size={30} color="#D2A236" />
          </TouchableOpacity>
        </Check>
      </Header>

      {/* Formulário de edição de nome */}
      <Form>
        <Label>Nome</Label>
        <Input
          value={newName}
          onChangeText={setNewName} // Atualize o estado ao digitar
          placeholder="Digite seu novo nome"
        />
      </Form>
    </Container>
  )
}
