import React, { useState, useEffect } from 'react'
import { TouchableOpacity, FlatList, Alert, Text } from 'react-native'
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

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  // Estado para armazenar resultados da pesquisa
  const [results, setResults] = useState([])
  // Acesse a instância do banco de dados
  const db = useDatabase()

  useEffect(() => {
    const fetchResults = async () => {
      if (searchQuery.length > 0) {
        try {
          // Consulta para buscar tanto responsáveis quanto motoristas
          const allUsers = await db.getAllAsync(
            `SELECT id, name, 'Responsavel' AS type FROM Responsavel WHERE name LIKE ? 
             UNION 
             SELECT id, name, 'Motorista' AS type FROM Motorista WHERE name LIKE ?`,
            [`%${searchQuery}%`, `%${searchQuery}%`]
          )
          setResults(allUsers)
        } catch (error) {
          console.error('Erro ao buscar usuários: ', error)
          Alert.alert('Erro', 'Houve um erro ao buscar usuários.')
        }
      } else {
        // Limpa os resultados se a barra de pesquisa estiver vazia
        setResults([])
      }
    }

    fetchResults()
    // Chama a função sempre que o searchQuery muda
  }, [searchQuery])

  const handleCleanAll = () => {
    // Limpa os resultados da pesquisa
    setResults([])
    // Limpa a barra de pesquisa
    setSearchQuery('')
  }

  return (
    <Container>
      <TitleText>Pesquisa</TitleText>

      {/* Barra de pesquisa */}
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

      {/* Seção Resultados */}
      <RecentHeader>
        <RecentText>Resultados</RecentText>
        <TouchableOpacity onPress={handleCleanAll}>
          <CleanText>Limpar Tudo</CleanText>
        </TouchableOpacity>
      </RecentHeader>

      {/* Lista de resultados da pesquisa */}
      <FlatList
        data={results}
        // Chave única combinando id e type
        keyExtractor={(item) => `${item.id}-${item.type}`}
        renderItem={({ item }) => (
          <RecentItem
            onPress={() => {
              /* Navegar ou realizar ação ao selecionar um usuário */
            }}
          >
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
        )}
      />
    </Container>
  )
}
