import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ProfilePic, CustomInput, CustomTitleText } from '../../components';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles'; 

export const Chat = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [chatList, setChatList] = useState([
    { id: '1', name: 'Caio', message: 'Message', profilePic: 'CaioProfilePic' },
    { id: '2', name: 'Lucas', message: 'Message', profilePic: 'LucasProfilePic' },
  ]);

  const filteredChats = chatList.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigation = useNavigation();

  const openChat = (chat) => {
    // Redireciona para a tela de conversa com os dados do chat selecionado
    navigation.navigate('ChatScreen', { chat });
  };

  return (
    <View style={styles.container}>
      <CustomTitleText style={styles.title}>Chats</CustomTitleText>

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#ACACAC" style={styles.searchIcon} />
        <CustomInput style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}/>
      </View>

      {/* Lista de Conversas */}
      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('Message')}>
            <View style={styles.chatContent}>
                <ProfilePic style={styles.pic}></ProfilePic>
              <View style={styles.chatTextContainer}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatMessage}>{item.message}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
