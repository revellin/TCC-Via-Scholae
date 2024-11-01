import React, { useState, useEffect } from 'react'
import { TouchableOpacity, FlatList, Alert, Text, View } from 'react-native'
import { ProfilePic, Line } from '../../components'
import {
  styles,
  Container,
  SearchContainer,
  InputContainer,
  RecentHeader,
  RecentItenContent,
  RecentItenContainer,
  RecentText,
  CleanText,
  RecentItemInfo,
  RecentItemName,
  TitleText,
  Input,
  RecentItem,
} from './styles'
import { useDatabase } from '../../database'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState([])
  const [selectedProfile, setSelectedProfile] = useState(null)
  const db = useDatabase()
  const navigation = useNavigation()

  useEffect(() => {
    const fetchResults = async () => {
      if (searchQuery.length > 0) {
        try {
          const allUsers = await db.getAllAsync(
            `SELECT id, name, phone, email, 'Responsavel' AS type FROM Responsavel WHERE name LIKE ? 
             UNION 
             SELECT id, name, phone, email, 'Motorista' AS type FROM Motorista WHERE name LIKE ?`,
            [`%${searchQuery}%`, `%${searchQuery}%`]
          )
          setResults(allUsers)
        } catch (error) {
          console.error('Erro ao buscar usuários: ', error)
          Alert.alert('Erro', 'Houve um erro ao buscar usuários.')
        }
      } else {
        setResults([])
      }
    }

    fetchResults()
  }, [searchQuery])

  const handleCleanAll = () => {
    setResults([])
    setSearchQuery('')
    setSelectedProfile(null)
  }

  const handleSelectProfile = (profile) => {
    setSelectedProfile(profile)
    setSearchQuery('')
    navigation.navigate('PerfilSearch', { profile })
  }

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setResults([])
      }
    }, [])
  )

  const renderProfileItem = (item) => (
    <RecentItem onPress={() => handleSelectProfile(item)}>
      <RecentItenContent>
        <ProfilePic style={styles.Accountspic} />
        <RecentItenContainer>
          <RecentItemName>{item.name}</RecentItemName>
          <RecentItemInfo>
            <Text>{item.type}</Text>
          </RecentItemInfo>
        </RecentItenContainer>
      </RecentItenContent>
    </RecentItem>
  )

  return (
    <Container>
      <TitleText>Pesquisa</TitleText>

      <SearchContainer>
        <ProfilePic style={styles.pic}></ProfilePic>
        <InputContainer>
          <Input
            placeholder="Pesquisa pelo nome"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </InputContainer>
      </SearchContainer>

      <Line style={styles.line}></Line>

      <RecentHeader>
        <RecentText>Resultados</RecentText>
        <TouchableOpacity onPress={handleCleanAll}>
          <CleanText>Limpar Tudo</CleanText>
        </TouchableOpacity>
      </RecentHeader>
      {selectedProfile && <View>{renderProfileItem(selectedProfile)}</View>}
      <FlatList
        data={results}
        keyExtractor={(item) => `${item.id}-${item.type}`}
        renderItem={({ item }) => renderProfileItem(item)}
      />
    </Container>
  )
}
