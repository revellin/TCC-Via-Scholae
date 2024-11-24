import React, { useState, useEffect } from 'react'
import { FlatList, Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDatabase } from '../../database'
import { Ionicons } from '@expo/vector-icons'
import { Return } from '../../components'
import * as Notifications from 'expo-notifications'
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
        `SELECT * FROM Vagas`,
        [motoristaId]
      )
      console.log('Resultado da consulta:', result) // Verifique os dados retornados
      setVagasPendentes(result)
    } catch (error) {
      console.error('Erro ao buscar vagas pendentes:', error)
      Alert.alert('Erro', 'Não foi possível buscar as vagas pendentes.')
    }
  }

  const enviarNotificacao = async (responsavelId, statusVaga) => {
    // Criando a notificação
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Atualização sobre a Vaga na Van',
        body: `Sua solicitação de vaga foi ${statusVaga}`,
        data: { responsibleId: responsavelId },
      },
      trigger: null,
    })
  }

  const aceitarVaga = async (vagaId, responsavelId) => {
    if (!db) return
    try {
      await db.execAsync(`UPDATE Vagas SET status = 'aceita' WHERE id = ?`, [
        vagaId,
      ])
      Alert.alert('Vaga Aceita', 'Você aceitou a vaga com sucesso!')
      enviarNotificacao(responsavelId, 'aceita')
      fetchVagasPendentes()
    } catch (error) {
      console.error('Erro ao aceitar a vaga:', error)
      Alert.alert('Erro', 'Não foi possível aceitar a vaga.')
    }
  }

  const recusarVaga = async (vagaId, responsavelId) => {
    if (!db) return
    try {
      await db.execAsync(`UPDATE Vagas SET status = 'recusada' WHERE id = ?`, [
        vagaId,
      ])
      Alert.alert('Vaga Recusada', 'Você recusou a vaga!')
      enviarNotificacao(responsavelId, 'recusada')
      fetchVagasPendentes()
    } catch (error) {
      console.error('Erro ao recusar a vaga:', error)
      Alert.alert('Erro', 'Não foi possível recusar a vaga.')
    }
  }

  useEffect(() => {
    fetchVagasPendentes()
  }, [db])

  const renderItem = ({ item }) => {
    const { id, responsavelId, nome, numero, rota } = item

    return (
      <ItemContainer>
        <SubTitlesContainer>
          <SubTitle>
            Nome: {nome} - Número: {numero}
          </SubTitle>
          <SubTitle>Rota: {rota}</SubTitle>
        </SubTitlesContainer>
        <ButtonContainer>
          <AcceptBtn
            onPress={() => aceitarVaga(id, responsavelId)}
            style={styles.acceptButton}
          >
            <Ionicons name="checkmark-circle" size={35} color="#E1B415" />
          </AcceptBtn>
          <RejectBtn
            onPress={() => recusarVaga(id, responsavelId)}
            style={styles.rejectButton}
          >
            <Ionicons name="close-circle" size={35} color="#FF2020" />
          </RejectBtn>
        </ButtonContainer>
      </ItemContainer>
    )
  }

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
        keyExtractor={(item) => item.id.toString()}
      />

      <TitleSecond>Vagas Aceitas</TitleSecond>
    </Container>
  )
}
