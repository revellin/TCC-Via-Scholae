//Importa o react
import React from 'react';
//Importa os componentes do react6 native
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { ProfilePic, CustomLabelText, CustomTitleText } from '../../components';
import { styles } from './styles';
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
};