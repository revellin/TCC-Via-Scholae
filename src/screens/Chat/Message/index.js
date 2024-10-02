import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Return, ProfilePic } from '../../../components';
import { styles, Container, Header, MessageContainer, InputContainer, Name, MessageText, SendButtonText } from './styles';

export const Message = () => {
  const navigation = useNavigation()
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  const sendMessage = () => {
    if (messageText.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: messageText }]);
      setMessageText(''); // Limpa o campo após enviar a mensagem
    }
  };

  return (
    <Container>
      <Header>
        <Return style={styles.back} onPress={() => navigation.navigate('Mensagens')}></Return>
        <ProfilePic style={styles.pic}></ProfilePic>
        <Name>Caio</Name>
      </Header>
      {/* FlatList para exibir as mensagens */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageContainer>
            <MessageText>{item.text}</MessageText>
          </MessageContainer>
        )}
        inverted // Inverte a ordem das mensagens (mensagem mais recente no fim)
      />

      {/* Campo de input para enviar nova mensagem */}
      <InputContainer>
        <TextInput
          style={styles.input}
          value={messageText}
          onChangeText={setMessageText}
          placeholder="Type a message"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <SendButtonText>Enviar</SendButtonText>
        </TouchableOpacity>
      </InputContainer>
    </Container>
  );
};
