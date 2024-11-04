import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDatabase } from '../../database'
import { Ionicons } from '@expo/vector-icons'
import { Return } from '../../components'
import {
  Container,
  Header,
  Title,
  TitleSecond,
  ItemContainer,
  SubTitle,
  ButtonContainer,
  SubTitlesContainer,
  AcceptBtn,
  RejectBtn,
  styles,
} from './styles'

export const Vagas = () => {
  const navigation = useNavigation()
  const db = useDatabase()
  const [vagasPendentes, setVagasPendentes] = useState([])
  const route = useRoute()
  const { motoristaId } = route.params || {}

  // Função para buscar vagas pendentes
  const fetchVagasPendentes = async () => {
    if (!db) return

    try {
      const result = await db.getAllAsync(
        `SELECT * FROM Vagas WHERE status = 'pendente';`
      )
      setVagasPendentes(result)
    } catch (error) {
      console.error('Erro ao buscar vagas pendentes:', error)
      Alert.alert('Erro', 'Não foi possível buscar as vagas pendentes.')
    }
  }

  const aceitarVaga = async (vagaId) => {
    if (!db) return

    try {
      await db.execAsync(
        `UPDATE Vagas SET status = 'aceita', motoristaId = ? WHERE id = ?`,
        [motoristaId, vagaId]
      )
      Alert.alert('Vaga Aceita', 'Você aceitou a vaga com sucesso!')
      fetchVagasPendentes()
    } catch (error) {
      console.error('Erro ao aceitar a vaga:', error)
      Alert.alert('Erro', 'Não foi possível aceitar a vaga.')
    }
  }

  useEffect(() => {
    fetchVagasPendentes()
  }, [db])

  const renderItem = ({ item }) => (
    <ItemContainer>
      <SubTitlesContainer>
        <SubTitle>
          Nome: {item.nome} - Número: {item.numero}
        </SubTitle>
        <SubTitle>Rota: {item.rota}</SubTitle>
      </SubTitlesContainer>
      <ButtonContainer>
        <AcceptBtn
          onPress={() => aceitarVaga(item.id)}
          style={styles.acceptButton}
        >
          <Ionicons name="checkmark-circle" size={35} color="#E1B415" />
        </AcceptBtn>
        <RejectBtn
          onPress={() => recusarVaga(item.id)}
          style={styles.rejectButton}
        >
          <Ionicons name="close-circle" size={35} color="#FF2020" />
        </RejectBtn>
      </ButtonContainer>
    </ItemContainer>
  )

  return (
    <Container>
      <Header>
        <Return
          style={styles.returnButton}
          onPress={() => navigation.navigate('Perfil')}
        />
        <Title>Vagas Pendentes</Title>
      </Header>

      <FlatList
        data={vagasPendentes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TitleSecond>Vagas Aceitas</TitleSecond>
    </Container>
  )
}
