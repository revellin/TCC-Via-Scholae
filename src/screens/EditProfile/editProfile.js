//Importa o react
import React from 'react';
//Importa os componentes do react6 native
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { ProfilePic, CustomLabelText, CustomTitleText } from '../../components';
import { useNavigation } from '@react-navigation/native'
//Importa a biblioteca de icones
import AntDesign from '@expo/vector-icons/AntDesign';


export const EditProfile = () => {
  const navigation = useNavigation()
  return (
    //Container principal
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>

        {/* Botão de retorno */}
        <View style={styles.return}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            {/* Ícone para voltar */}
            <AntDesign name="left" size={30} color="black" />
          </TouchableOpacity>
        </View>

        {/* Título */}
        <CustomTitleText style={styles.title}>Edit Profile</CustomTitleText>
      </View>

      {/* Profile Picture */}
      <View style={styles.profilePicContainer}>
        {/* Adiciona a imagem */}
        <ProfilePic></ProfilePic>
        <TouchableOpacity>
          <Text style={styles.editPictureText}>Edit Picture</Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <CustomLabelText>Name</CustomLabelText>
        <TextInput style={styles.input} placeholder="Caio" />

        <CustomLabelText>Phone</CustomLabelText>
        <TextInput style={styles.input} placeholder="+55 11 12345-6789" />

        <CustomLabelText>Email</CustomLabelText>
        <TextInput style={styles.input} placeholder="matheusemailfake@gmail.com" />
      </View>
    </View>
  );
}

//Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    marginTop: 20,
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
    position: 'absolute',
    fontWeight: 'SourceSansPro_700Bold',
    marginLeft: 50,
  },
  profilePicContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  editPictureText: {
    color: '#FFA500',
  },
  formContainer: {
    marginTop: 20,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
    marginBottom: 20,
    fontSize: 16,
  },
});
