import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { CustomLogo, CustomTitleText } from '../../components';
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
        <CustomLogo></CustomLogo>
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.line} />

        <Text style={styles.label}>Enter your full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full Name"
        />

        <Text style={styles.label}>Insert your phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Insert your phone"
            keyboardType="phone-pad"
          />

        <Text style={styles.label}>Enter your Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Enter a password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a password"
          secureTextEntry
        />

        <Text style={styles.label}>Confirm your password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.buttonNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
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

  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#262626',
  },

  line: {
    height: 1,
    backgroundColor: '#D2A236',
    marginVertical: 3,
    marginBottom: 10,
  },

  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#262626',
  },

  input: {
    height: 40,
    borderColor: '#262626',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
  },

  /* CHECKBOX checkboxContainer: {
    marginVertical: 20,
  },

  checkbox: {
    
  },*/

  buttonNext: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});
