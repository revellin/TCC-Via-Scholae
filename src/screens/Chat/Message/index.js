import React, { useState, useEffect, useCallback } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { GiftedChat } from 'react-native-gifted-chat'
import { Text, TouchableOpacity, StatusBar } from 'react-native'
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore'
import { database } from '../../../config/firebase'
import { Return, ProfilePic } from '../../../components'
import {
  styles,
  Container,
  Header,
  Name,
  SubTitles,
  HeaderInfo,
  renderCustomBubble,
  renderCustomInputToolbar,
  renderCustomSend
} from './styles'
import { useUser } from '../../../database'

export const Message = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { profile, chatId } = route.params
  const { user } = useUser()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const getMessages = async () => {
      const values = query(
        collection(database, `chats/${chatId}/messages`),
        orderBy('createdAt', 'desc')
      )
      const unsubscribe = onSnapshot(values, (snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            _id: doc.id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          }))
        )
      )
      return () => unsubscribe()
    }
    getMessages()
  }, [chatId])

  const mensagemEnviada = useCallback(
    async (messages = []) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      )
      const { _id, createdAt, text, user } = messages[0]
      await addDoc(collection(database, `chats/${chatId}/messages`), {
        _id,
        createdAt,
        text,
        user,
      })
      await addDoc(collection(database, `chats/${user.id}`), {
        chatId,
        name: profile.name,
        profilePic: profile.profilePic || 'defaultPic',
        lastMessage: text,
      })
    },
    [chatId, user.id, profile.name, profile.profilePic]
  )

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate('Mensagens')}>
          <Return style={styles.back} />
        </TouchableOpacity>
        <ProfilePic style={styles.pic} />
        <HeaderInfo>
          <Name>
            <Text>{profile.name}</Text>
          </Name>
          <SubTitles>
            <Text>{profile.phone}</Text>
          </SubTitles>
        </HeaderInfo>
      </Header>

      <GiftedChat
        messages={messages}
        onSend={(messages) => mensagemEnviada(messages)}
        user={{
          _id: user.id,
          name: user.name,
          avatar: user.avatar || '',
          type: user.type,
        }}
        renderBubble={renderCustomBubble}
        renderInputToolbar={renderCustomInputToolbar}
        renderSend={renderCustomSend}
      />
    </Container>
  )
}
