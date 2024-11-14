import React, { useState, useEffect, useCallback } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { GiftedChat } from 'react-native-gifted-chat'
import { Text } from 'react-native'
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
} from './styles'

export const Message = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { profile } = route.params || {}

  if (!profile) {
    return <Text>Carregando perfil...</Text>
  }

  const [messages, setMessages] = useState([])

  useEffect(() => {
    async function getMessages() {
      const values = query(
        collection(database, 'chats'),
        orderBy('createdAt', 'desc')
      )
      onSnapshot(values, (snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          }))
        )
      )
    }
    getMessages()
  }, [])

  const mensagemEnviada = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    )
    const { _id, createdAt, text, user } = messages[0]

    addDoc(collection(database, 'chats'), {
      _id,
      createdAt,
      text,
      user,
    })
  }, [])
  return (
    <Container>
      <Header>
        <Return
          style={styles.back}
          onPress={() => navigation.navigate('Chats')}
        />
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
          _id: profile.id,
          name: profile.name,
          avatar: ''
        }}
        messagesContainerStyle={{
          backgroundColor: '#595959',
        }}
      />
    </Container>
  )
}
