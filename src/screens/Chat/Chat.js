import React, { useState, useEffect } from 'react'
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
import { useUser } from '../../database'

export const Chat = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [chatList, setChatList] = useState([])
  const { user } = useUser() // Usuário logado

  useEffect(() => {
    const getChats = async () => {
      const queryChats = query(
        collection(database, `chats/${user.id}`),
        orderBy('lastMessage', 'desc')
      )
      const unsubscribe = onSnapshot(queryChats, (snapshot) => {
        const chats = snapshot.docs.map((doc) => doc.data())
        setChatList(chats)
      })

      return () => unsubscribe()
    }

    getChats()
  }, [user.id])

  const filteredChats = chatList.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const navigation = useNavigation()

  const openChat = (chatId, name) => {
    // Adiciona o chat na lista de chats
    setChatList((prevChatList) => [
      ...prevChatList,
      {
        id: chatId,
        name: name,
        message: 'New message',
        profilePic: 'ProfilePic',
      },
    ])

    navigation.navigate('Message', { chatId })
  }

  return (
    <Container>
      <TitleText>Chats</TitleText>

      <SearchContainer>
        <Input
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </SearchContainer>

      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.chatId}
        renderItem={({ item }) => (
          <ChatItem onPress={() => openChat(item.chatId, item.name)}>
            <ChatContent>
              <ProfilePic style={styles.pic} />
              <ChatTextContainer>
                <ChatName>{item.name}</ChatName>
                <ChatMessage>{item.lastMessage}</ChatMessage>
              </ChatTextContainer>
            </ChatContent>
          </ChatItem>
        )}
      />
    </Container>
  )
}
