import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { CustomLogo, CustomTitleText, CustomLabelText, ButtonNext, CustomInput, Line } from '../../components';
// Importando o ícone de retorno
import AntDesign from '@expo/vector-icons/AntDesign';

export const Register = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity style={styles.return} onPress={() => navigation.navigate('Splash')}>
          <AntDesign name="left" size={40} color="black" />
        </TouchableOpacity>
        <CustomLogo style={styles.img} />
      </View>

      <View style={styles.form}>
        <CustomTitleText style={styles.title}>Register</CustomTitleText>
        <Line style={styles.line}></Line>

        <CustomLabelText>Enter your full name</CustomLabelText>
        <CustomInput placeholder="Enter your full Name" />

        <CustomLabelText>Insert your phone</CustomLabelText>
        <CustomInput 
          placeholder="Insert your phone"
          keyboardType="phone-pad"
        />

        <CustomLabelText>Enter your Email</CustomLabelText>
        <CustomInput 
          placeholder="Enter your Email"
          keyboardType="email-address"
        />

        <CustomLabelText>Enter a password</CustomLabelText>
        <CustomInput 
          placeholder="Enter a password"
          secureTextEntry
        />
        <CustomLabelText>Confirm your password</CustomLabelText>
        <CustomInput 
          placeholder="Confirm your password"
          secureTextEntry
        />
        <ButtonNext></ButtonNext>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },

  return: {
    position: 'absolute', // Faz com que o ícone seja posicionado relativamente ao contêiner pai
    top: 60, // Distância do topo
    left: 5, // Distância da borda esquerda
    zIndex: 1, // Garante que o ícone fique sobre a imagem
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Alinha itens ao topo do contêiner
    justifyContent: 'center', // Centraliza a imagem no contêiner
    paddingHorizontal: 26,
    width: '100%',
    height: 250,
    position: 'relative', // Necessário para posicionar o botão de retorno sobre a imagem
  },

  img: {
    width: 300,
    height: 300,
  },

  title:{
    fontSize: 40,
    paddingRight: 242,
  },

  form: {
    paddingHorizontal: 10, // Adiciona um pouco de espaço nas laterais do formulário
  },

  line: {
    height: 1,
    backgroundColor: '#D2A236',
    marginVertical: 3,
    marginBottom: 10,
  },
});
