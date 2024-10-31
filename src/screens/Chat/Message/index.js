import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FlatList, Text } from 'react-native'
import { Return, ProfilePic } from '../../../components'
import io from 'socket.io-client' // Importando o Socket.IO Client
import {
  styles,
  Container,
  Header,
  MessageContainer,
  InputContainer,
  Name,
  MessageText,
  SendButtonText,
  SendButton,
  Input,
  SubTitles,
  HeaderInfo,
} from './styles'

// URL do seu servidor Socket.IO
const socket = io('http://localhost:8081') // Substitua pelo URL do seu servidor

export const Message = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { profile } = route.params || {}
  const [messages, setMessages] = useState([])
  const [messageText, setMessageText] = useState('')

  useEffect(() => {
    // Listener para receber mensagens do servidor
    socket.on('chatMessage', (msg) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), text: msg },
      ])
    })

    // Limpar o listener ao desmontar o componente
    return () => {
      socket.off('chatMessage')
    }
  }, [])

  const sendMessage = () => {
    if (messageText.trim()) {
      // Enviar a mensagem para o servidor
      socket.emit('chatMessage', messageText)
      setMessageText('') // Limpa o campo após enviar a mensagem
    }
  }

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

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageContainer>
            <MessageText>{item}</MessageText>
          </MessageContainer>
        )}
        inverted // Inverte a ordem das mensagens (mensagem mais recente no fim)
      />

      <InputContainer>
        <Input
          value={messageText}
          onChangeText={setMessageText}
          placeholder="Type a message"
        />
        <SendButton onPress={sendMessage}>
          <SendButtonText>Enviar</SendButtonText>
        </SendButton>
      </InputContainer>
    </Container>
  )
}
