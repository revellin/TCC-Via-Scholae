import React, { useEffect, useState } from 'react'
import { FlatList, Alert, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDatabase, useUser } from '../../../../database'
import { Return } from '../../../../components'
import {
  Container,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  Button,
  ButtonText,
  TitleText,
  Header,
  styles,
} from './styles'

export const ExibirCriancas = () => {
  const navigation = useNavigation()
  const db = useDatabase()
  const { user } = useUser() // Use o hook para obter os dados do usuário
  const [criancas, setCriancas] = useState([])

  // Função para buscar as crianças no banco de dados
  const fetchCriancas = async () => {
    try {
      const responsavelId = user?.id // Use o ID correto do usuário

      if (!responsavelId) {
        Alert.alert('Erro', 'Responsável não encontrado.')
        return
      }

      // Use o método getAllAsync para buscar as crianças
      const result = await db.getAllAsync(
        'SELECT * FROM Crianca WHERE responsavelId = ?',
        [responsavelId]
      )

      console.log('Resultado da busca:', result) // Adicione isso para depuração

      if (result.length > 0) {
        setCriancas(result) // Atualiza o estado com as crianças relacionadas ao responsável logado
      } else {
        setCriancas([])
      }
    } catch (error) {
      console.error('Erro ao buscar crianças: ', error)
      Alert.alert('Erro', 'Erro ao buscar crianças.')
    }
  }

  // Carregar dados das crianças ao entrar na tela
  useEffect(() => {
    fetchCriancas() // Função que busca as crianças cadastradas no banco de dados
  }, [user]) // Dependência user para buscar as crianças quando o usuário muda

  // Navegar para a tela de registro de crianças
  const handleCadastrarNovaCrianca = () => {
    navigation.navigate('RegisterCrianca')
  }

  // Renderiza cada linha da tabela
  const renderItem = ({ item }) => (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.parentesco}</TableCell>
      <TableCell>{item.idade}</TableCell>
    </TableRow>
  )

  return (
    <Container>
      <Header>
      <TouchableOpacity style={styles.return}>
        <Return
          style={styles.return}
          onPress={() => navigation.navigate('Perfil')}
        />
      </TouchableOpacity>
      <TitleText>Crianças</TitleText>
      </Header>
      <Table>
        <TableHeader>
          <TableCell>Nome</TableCell>
          <TableCell>Parentesco</TableCell>
          <TableCell>Idade</TableCell>
        </TableHeader>

        {criancas.length > 0 ? (
          <FlatList
            data={criancas}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        ) : (
          <TableRow>
            <TableCell colSpan={3}>Nenhuma criança cadastrada.</TableCell>
          </TableRow>
        )}
      </Table>

      {/* Botão para cadastrar nova criança */}
      <Button onPress={handleCadastrarNovaCrianca}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
    </Container>
  )
}
