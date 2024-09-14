import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentList, setRecentList] = useState([
    { id: '1', name: 'Caio', info: 'Information' },
    { id: '2', name: 'Lucas', info: 'Information' },
    { id: '3', name: 'Catia', info: 'Information' },
    { id: '4', name: 'Luana', info: 'Information' },
  ]);

  const filteredList = recentList.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCleanAll = () => {
    setRecentList([]);
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.header}>Search</Text>

      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>

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
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.recentItem}>
            <View style={styles.recentItemContent}>
              <Ionicons name="person-circle" size={40} color="gray" />
              <View style={styles.recentItemText}>
                <Text style={styles.recentItemName}>{item.name}</Text>
                <Text style={styles.recentItemInfo}>{item.info}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};