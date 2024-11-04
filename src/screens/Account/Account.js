import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  ProfilePic,
  ButtonChildren,
  ButtonEdit,
  ButtonSettings,
  Line,
  BtnRotas,
  ButtonVagas,
} from '../../components'
import {
  Container,
  ProfileContainer,
  ConProfilePic,
  ButtonsContainer,
  ProfileName,
  SubTitles,
  styles,
} from './styles'
import { useDatabase, useUser } from '../../database'

export const Account = () => {
  const { user } = useUser()
  const db = useDatabase()
  const navigation = useNavigation()
  const [vagas, setVagas] = useState(null)

  useEffect(() => {
    const fetchVagas = async () => {
      try {
        if (user && user.type === 'motorista') {
          const result = await db.getAllAsync(
            'SELECT vagas FROM Motorista WHERE id = ?',
            [user.id]
          )
          if (result.length > 0) {
            setVagas(result[0].vagas)
          }
        }
      } catch (error) {
        console.error('Erro ao buscar vagas: ', error)
      }
    }

    fetchVagas()
  }, [user])

  const handleNavigateToRotas = () => {
    if (user) {
      navigation.navigate('ExibirRota', { motoristaId: user.id });
    } else {
      console.error('Usuário não encontrado no contexto.13059081');
    }
  };

  const handleNavigateToVagas = () => {
    if (user) {
      navigation.navigate('Vagas', { motoristaId: user.id });
    } else {
      console.error('Usuário não encontrado no contexto.');
    }
  };

  return (
    <Container>
      <ProfileContainer>
        <ConProfilePic>
          <ProfilePic style={styles.img} />
        </ConProfilePic>
        <ProfileName>{user ? user.name : 'Usuário não logado'}</ProfileName>
        <SubTitles>
          Email: {user ? user.email : 'Email não disponível'}
        </SubTitles>
        <SubTitles>
          Número: {user ? user.phone : 'Número não disponível'}
        </SubTitles>
        <SubTitles>
          Endereço: {user ? user.end : 'Número não disponível'}
        </SubTitles>
        <SubTitles>CEP: {user ? user.cep : 'Número não disponível'}</SubTitles>

        {user && user.type === 'motorista' && (
          <SubTitles>Vagas: {vagas ?? 'Carregando...'}</SubTitles>
        )}
      </ProfileContainer>

      <ButtonsContainer>
        {user && user.type === 'responsavel' && <ButtonChildren />}
        {user && user.type === 'motorista' && (
          <BtnRotas onPress={handleNavigateToRotas} /> // Adicione o onPress
        )}
        {user && user.type === 'motorista' && <ButtonVagas onPress={handleNavigateToVagas}/>}
        <ButtonEdit />
      </ButtonsContainer>

      <Line />

      <ButtonSettings />
    </Container>
  )
}
