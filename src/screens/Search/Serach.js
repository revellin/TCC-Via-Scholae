import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import {
  CustomTitleText,
  CustomInput,
  ProfilePic,
  Line,
} from '../../components'
import { styles, Container, SearchContainer, InputContainer, RecentHeader, RecentItenContent, RecentItenContainer, RecentText, CleanText, RecentItemInfo, RecentItemName } from './styles'

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
      <CustomTitleText style={styles.title}>Pesquisa</CustomTitleText>

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
          <CustomInput
            style={styles.input}
            placeholder="Search"
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
          <TouchableOpacity
            style={styles.recentItem}
            onPress={() => { }}>
            <RecentItenContent>
              <ProfilePic style={styles.Accountspic} />
              <RecentItenContainer>
                <RecentItemName>{item.name}</RecentItemName>
                <RecentItemInfo>{item.info}</RecentItemInfo>
              </RecentItenContainer>
            </RecentItenContent>
          </TouchableOpacity>
        )}
      />
    </Container>
  )
}
