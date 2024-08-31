import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { CustomLogo, CustomTitleText, CustomLabelText, ButtonNext, CustomInput } from '../../components';
//Importando o icon de return
import AntDesign from '@expo/vector-icons/AntDesign';


export const RegisterScreen  = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.return}>
          <TouchableOpacity>
            <AntDesign name="left" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <CustomLogo style={styles.img}></CustomLogo>
      </View>

      <View style={styles.form}>
        <CustomTitleText></CustomTitleText>
        <View style={styles.line} />

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
    marginTop: -215,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Isso garante que o ícone fique à esquerda e a imagem à direita
    paddingHorizontal: 16, // Adiciona um pouco de espaço nas laterais
    width: '100%',
  },

  img: {
    width: 300,
    height: 300,
  },

  form: {
    flex: 1,
  },

  line: {
    height: 1,
    backgroundColor: '#D2A236',
    marginVertical: 3,
    marginBottom: 10,
  },
});
