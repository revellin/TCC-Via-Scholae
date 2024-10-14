import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { ProfilePic } from '../../components'
import { useNavigation } from '@react-navigation/native'
import {
  styles,
  Container,
  SearchContainer,
  ChatContent,
  ChatTextContainer,
  ChatName,
  ChatMessage,
  Input,
  TitleText,
  ChatItem,
} from './styles'

export const Chat = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [chatList, setChatList] = useState([
    { id: '1', name: 'Caio', message: 'Message', profilePic: 'CaioProfilePic' },
    {
      id: '2',
      name: 'Lucas',
      message: 'Message',
      profilePic: 'LucasProfilePic',
    },
  ])

  const filteredChats = chatList.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const navigation = useNavigation()

  const openChat = (Message) => {
    // Redireciona para a tela de conversa com os dados do chat selecionado
    navigation.navigate('ChatScreen', { Message })
  }

  return (
    <Container>
      <TitleText>Chats</TitleText>

      {/* Barra de Pesquisa */}
      <SearchContainer>
        {/*<Ionicons name="search" size={24} color="#ACACAC" style={styles.searchIcon} />*/}
        <Input
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </SearchContainer>

      {/* Lista de Conversas */}
      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatItem onPress={() => navigation.navigate('Message')}>
            <ChatContent>
              <ProfilePic style={styles.pic}></ProfilePic>
              <ChatTextContainer>
                <ChatName>{item.name}</ChatName>
                <ChatMessage>{item.message}</ChatMessage>
              </ChatTextContainer>
            </ChatContent>
          </ChatItem>
        )}
      />
    </Container>
  )
}
