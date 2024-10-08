import React, { useState } from 'react'
import { TouchableOpacity, FlatList } from 'react-native'
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

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [recentList, setRecentList] = useState([
    { id: '1', name: 'Caio', info: 'Information' },
    { id: '2', name: 'Lucas', info: 'Information' },
    { id: '3', name: 'Catia', info: 'Information' },
    { id: '4', name: 'Luana', info: 'Information' },
  ])

  const filteredList = recentList.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCleanAll = () => {
    setRecentList([])
  }

  return (
    <Container>
      <TitleText>Pesquisa</TitleText>

      {/* Barra de pesquisa */}
      <SearchContainer>
        <ProfilePic style={styles.pic}></ProfilePic>
        <InputContainer>
          {/*<Ionicons
            style={styles.icon}
            name="search"
            size={24}
            color="#ACACAC"
          />*/}
          <Input
            placeholder="Pesquisa"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </InputContainer>
      </SearchContainer>

      <Line style={styles.line}></Line>

      {/* Seção Recentes */}
      <RecentHeader>
        <RecentText>Recentes</RecentText>
        <TouchableOpacity onPress={handleCleanAll}>
          <CleanText>Limpar Tudo</CleanText>
        </TouchableOpacity>
      </RecentHeader>

      {/* Lista de resultados recentes */}
      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecentItem onPress={() => {}}>
            <RecentItenContent>
              <ProfilePic style={styles.Accountspic} />
              <RecentItenContainer>
                <RecentItemName>{item.name}</RecentItemName>
                <RecentItemInfo>{item.info}</RecentItemInfo>
              </RecentItenContainer>
            </RecentItenContent>
          </RecentItem>
        )}
      />
    </Container>
  )
}
