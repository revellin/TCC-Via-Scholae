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

export const EditPhone = () => {
  const navigation = useNavigation()
  const { user, setUser } = useUser() // Acesse os dados e a função para atualizar o usuário no contexto
  const db = useDatabase() // Acesse a instância do banco de dados
  const [newPhone, setNewPhone] = useState(user ? user.phone : '') // Estado para o novo número de telefone
  const theme = useTheme();

  // Função para atualizar o número de telefone no banco de dados
  const handleUpdatePhone = async () => {
    if (!newPhone) {
      Alert.alert('Erro', 'O número de telefone não pode estar vazio.')
      return
    }

    try {
      // Verifica se o usuário é um responsável ou motorista
      const table = user.type === 'motorista' ? 'Motorista' : 'Responsavel'

      // Atualize o número de telefone na tabela correta (Responsavel ou Motorista)
      await db.runAsync(`UPDATE ${table} SET phone = ? WHERE phone = ?`, [
        newPhone,
        user.phone,
      ])

      // Atualize os dados do usuário no contexto
      setUser({ ...user, phone: newPhone })

      Alert.alert('Sucesso', 'Número de telefone atualizado com sucesso!')

      // Navegue de volta para a tela de perfil
      navigation.navigate('EditProfile')
    } catch (error) {
      console.error('Erro ao atualizar o número de telefone: ', error)
      Alert.alert('Erro', 'Houve um erro ao atualizar o número de telefone.')
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
        <TitleText>Telefone</TitleText>

        {/* Botão de confirmação */}
        <Check>
          <TouchableOpacity onPress={handleUpdatePhone}>
            <AntDesign name="check" size={30} color="#D2A236" />
          </TouchableOpacity>
        </Check>
      </Header>

      {/* Formulário de edição de telefone */}
      <Form>
        <Label>Telefone</Label>
        <Input
          value={newPhone}
          onChangeText={setNewPhone} // Atualize o estado ao digitar
          placeholder="Digite seu novo número de telefone"
          keyboardType="phone-pad"
        />
      </Form>
    </Container>
  )
}
