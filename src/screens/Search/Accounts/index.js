import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import {
  ButtonChildren,
  ProfilePic,
  BtnRotas,
  ButtonMessage,
} from '../../../components'
import {
  Container,
  Header,
  ProfileContainer,
  ConProfilePic,
  ProfileName,
  SubTitles,
  CloseButton,
  ButtonContainer,
  styles,
} from './styles'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { useDatabase } from '../../../database'

export const PerfilSearch = ({ route }) => {
  const { profile } = route.params
  const theme = useTheme()
  const navigation = useNavigation()
  const db = useDatabase()
  const [vagas, setVagas] = useState(null)

  useEffect(() => {
    const fetchVagas = async () => {
      try {
        if (profile.type === 'Motorista') {
          const result = await db.getAllAsync(
            'SELECT vagas FROM Motorista WHERE id = ?',
            [profile.id]
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
  }, [profile])

  return (
    <Container>
      <Header>
        <CloseButton onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={35} color={theme.text} />
        </CloseButton>
      </Header>

      <ProfileContainer>
        <ConProfilePic>
          <ProfilePic style={styles.img} />
        </ConProfilePic>

        <ProfileName>{profile.name}</ProfileName>

        <SubTitles>
          <Text>{profile.type}</Text>
        </SubTitles>

        <SubTitles>
          <Text>{profile.email}</Text>
        </SubTitles>

        <SubTitles>
          <Text>{profile.phone}</Text>
        </SubTitles>

        {/* Exibir as vagas se o perfil for de um motorista */}
        {profile.type === 'Motorista' && (
          <SubTitles>Vagas na van: {vagas ?? 'Carregando...'}</SubTitles>
        )}
      </ProfileContainer>

      <ButtonContainer>
        {profile.type === 'Responsavel' && <ButtonChildren />}
        {profile.type === 'Motorista' && <BtnRotas />}
      </ButtonContainer>

      <ButtonMessage
        onPress={() => navigation.navigate('Message', { profile })}
      >
        Mensagem
      </ButtonMessage>
    </Container>
  )
}
