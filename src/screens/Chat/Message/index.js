import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { Return, ProfilePic } from '../../../components';
import { styles } from './styles';

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Return style={styles.back} onPress={() => navigation.navigate('Mensagens')}></Return>
        <ProfilePic style={styles.pic}></ProfilePic>
        <Text style={styles.name}>Caio</Text>
        </View>
      {/* FlatList para exibir as mensagens */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        inverted // Inverte a ordem das mensagens (mensagem mais recente no fim)
      />
      
      {/* Campo de input para enviar nova mensagem */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={messageText}
          onChangeText={setMessageText}
          placeholder="Type a message"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
