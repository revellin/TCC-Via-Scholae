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
  const { user } = useUser()
  const [criancas, setCriancas] = useState([])

  const fetchCriancas = async () => {
    try {
      const responsavelId = user?.id

      if (!responsavelId) {
        Alert.alert('Erro', 'Responsável não encontrado.')
        return
      }

      const result = await db.getAllAsync(
        'SELECT * FROM Crianca WHERE responsavelId = ?',
        [responsavelId]
      )

      console.log('Resultado da busca:', result)

      if (result.length > 0) {
        setCriancas(result)
      } else {
        setCriancas([])
      }
    } catch (error) {
      console.error('Erro ao buscar crianças: ', error)
      Alert.alert('Erro', 'Erro ao buscar crianças.')
    }
  }

  useEffect(() => {
    fetchCriancas()
  }, [user])

  const handleCadastrarNovaCrianca = () => {
    navigation.navigate('RegisterCrianca')
  }

  // Renderiza cada linha da tabela
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleRoutePress(item)}>
      <TableRow>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.parentesco}</TableCell>
        <TableCell>{item.idade}</TableCell>
      </TableRow>
    </TouchableOpacity>
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

      <Button onPress={handleCadastrarNovaCrianca}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
    </Container>
  )
}
