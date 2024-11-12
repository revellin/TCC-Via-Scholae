import React from 'react'
import { useRoute } from '@react-navigation/native'

import { GiftedChat } from 'react-native-gifted-chat'
import { useCallback, useEffect, useState } from 'react'

//importação do firebase e database
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore'
import { database } from '../../../config/firebase'

export const Message = () => {

  return (
    <GiftedChat

    />
  )
}

/*import React, { useEffect, useState, useCallback } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
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
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const getMessages = () => {
      const values = query(
        collection(database, 'chats'),
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
          onPress={() => navigation.navigate('Mensagens')}
        />
        <ProfilePic style={styles.pic} />
        <HeaderInfo>
          {profile ? (
            <>
              <Name>
                <Text>{profile.name}</Text>
              </Name>
              <SubTitles>
                <Text>{profile.phone}</Text>
              </SubTitles>
            </>
          ) : (
            <Text>Carregando perfil...</Text>
          )}
        </HeaderInfo>
      </Header>

      <GiftedChat
        messages={messages}
        onSend={(msg) => mensagemEnviada(msg)}
        user={{
          _id: profile?.id,
          name: profile?.name,
        }}
      />
    </Container>
  )
}*/
