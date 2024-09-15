import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import {
  CustomTitleText,
  CustomInput,
  ProfilePic,
  Line,
} from '../../components'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'

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
    <View style={styles.container}>
      <CustomTitleText style={styles.title}>Search</CustomTitleText>

      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <ProfilePic style={styles.pic}></ProfilePic>
        <View style={styles.InputContainer}>
          <Ionicons
            style={styles.icon}
            name="search"
            size={24}
            color="#ACACAC"
          />
          <CustomInput
            style={styles.input}
            placeholder="Search"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
      </View>

      <Line style={styles.line}></Line>

      {/* Seção Recentes */}
      <View style={styles.recentHeader}>
        <Text style={styles.recentText}>Recent</Text>
        <TouchableOpacity onPress={handleCleanAll}>
          <Text style={styles.cleanText}>Clean all</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de resultados recentes */}
      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.recentItem}
            onPress={() => {}}>
            <View style={styles.recentItemContent}>
              <ProfilePic style={styles.Accountspic} />
              <View style={styles.recentItemText}>
                <Text style={styles.recentItemName}>{item.name}</Text>
                <Text style={styles.recentItemInfo}>{item.info}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
