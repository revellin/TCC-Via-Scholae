//Importa o react
import React from 'react';
//Importa os componentes do react6 native
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
//Importa a biblioteca de icones
import AntDesign from '@expo/vector-icons/AntDesign';
//Importa a foto
import User from './assets/Foto-User-teste.jpg'

export const App = () => {
  return (
    //Container principal
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>

        {/* Botão de retorno */}
        <View style={styles.return}>
          <TouchableOpacity>
            {/* Ícone para voltar */}
            <AntDesign name="left" size={30} color="black" />
          </TouchableOpacity>
        </View>

        {/* Título */}
        <Text style={styles.title}>Edit Profile</Text>
      </View>

      {/* Profile Picture */}
      <View style={styles.profilePicContainer}>
        {/* Adiciona a imagem */}
        <Image source={User} style={styles.profilePic} />
        <TouchableOpacity>
          <Text style={styles.editPictureText}>Edit Picture</Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value="Caio" />

        <Text style={styles.label}>Phone</Text>
        <TextInput style={styles.input} value="+55 11 12345-6789" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value="matheusemailfake@gmail.com" />
      </View>
    </View>
  );
}

//Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row', // Organiza os itens horizontalmente
    alignItems: 'center', // Alinha os itens verticalmente no centro
    justifyContent: 'space-between', // Distribui os itens com espaço entre eles
    width: '100%', // Garante que o cabeçalho ocupe toda a largura disponível
    marginTop: 20, // Espaço acima do cabeçalho
    marginBottom: 25, // Espaço abaixo do cabeçalho
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    paddingLeft: 50,
  },
  profilePicContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#666666',
    marginBottom: 10,
  },
  editPictureText: {
    color: '#FFA500',
  },
  formContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    color: '#A9A9A9',
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 20,
    fontSize: 16,
  },
});
