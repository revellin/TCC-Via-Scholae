import React, { useEffect, useState } from 'react'
import { FlatList, Text, View, Alert, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDatabase, useUser } from '../../../database'
import {
  Container,
  TitleText,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  Header,
  Button,
  ButtonText,
  styles,
} from './styles'
import { Return } from '../../../components'

export const ExibirRotas = () => {
  const db = useDatabase()
  const { user } = useUser()
  const [rotas, setRotas] = useState([])
  const navigation = useNavigation()
  const route = useRoute()
  const { motoristaId } = route.params || {}

  const fetchRotas = async () => {
    try {
      const result = await db.getAllAsync(
        'SELECT * FROM Rota WHERE motoristaId = ?',
        [motoristaId]
      )
      setRotas(result.length > 0 ? result : [])
    } catch (error) {
      console.error('Erro ao buscar rotas: ', error)
      Alert.alert('Erro', 'Erro ao buscar rotas.')
    }
  }

  useEffect(() => {
    fetchRotas()
  }, [motoristaId])

  const handleRoutePress = (item) => {
    navigation.navigate('RotaMap', {
      routeId: item.id,
      cepStart: item.cep_start,
      cepEnd: item.cep_end,
      nomeEscola: item.nome_escola,
      numeroEscola: item.numero_escola,
      responsavelId: user?.id, 
    })
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleRoutePress(item)}>
      <TableRow>
        <TableCell style={{ fontWeight: 400 }}>{item.startpoint}</TableCell>
        <TableCell style={{ fontWeight: 400 }}>{item.endpoint}</TableCell>
        <TableCell style={{ fontWeight: 400 }}>{item.nome_escola}</TableCell>
        <TableCell style={{ fontWeight: 400 }}>{item.numero_escola}</TableCell>
        <TableCell style={{ fontWeight: 400 }}>{item.regiao}</TableCell>
      </TableRow>
    </TouchableOpacity>
  )

  return (
    <Container>
      <Header>
        <TouchableOpacity style={styles.return}>
          <Return onPress={() => navigation.navigate('Perfil')} />
        </TouchableOpacity>
        <TitleText>Rotas</TitleText>
      </Header>
      <Table>
        <TableHeader>
          <TableCell>Início</TableCell>
          <TableCell>Destino</TableCell>
          <TableCell>Escola</TableCell>
          <TableCell>Número</TableCell>
          <TableCell>Região</TableCell>
        </TableHeader>
        {rotas.length > 0 ? (
          <FlatList
            data={rotas}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        ) : (
          <View style={styles.row}>
            <Text style={styles.cell} colSpan={4}>
              Nenhuma rota encontrada.
            </Text>
          </View>
        )}
      </Table>
      {user && user.type === 'motorista' && <Button onPress={() => navigation.navigate('RegistroRota')}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>}
    </Container>
  )
}
