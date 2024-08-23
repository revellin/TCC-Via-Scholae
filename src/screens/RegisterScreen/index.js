import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, CheckBox } from 'react-native';
import Logo_ViaScholae from '../ViaScholae/assets/Logo_ViaScholae.png'
//Importando o icon de return
import AntDesign from '@expo/vector-icons/AntDesign';
//Aruumar CHECKBOX
//import CheckBox from '@react-native-community/checkbox';

export const RegisterScreen  = () => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  //const [isSelected, setSelection] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.return}>
          <TouchableOpacity>
            <AntDesign name="left" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <Image source={Logo_ViaScholae} style={styles.img}></Image>
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.line} />

        <Text style={styles.label}>Enter your full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full Name"
          value={form.fullName}
          onChangeText={(text) => setForm({ ...form, fullName: text })}
        />

        <Text style={styles.label}>Insert your phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Insert your phone"
            value={form.phone}
            onChangeText={(text) => setForm({ ...form, phone: text })}
            keyboardType="phone-pad"
          />

        <Text style={styles.label}>Enter your Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Enter a password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a password"
          value={form.password}
          onChangeText={(text) => setForm({ ...form, password: text })}
          secureTextEntry
        />

        <Text style={styles.label}>Confirm your password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          value={form.confirmPassword}
          onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
          secureTextEntry
        />

        {/*CHECKBOX <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}/>
          <Text style={styles.checkboxLabel}>
            Concordo com os Termos bla bla bla...
            Read More.
          </Text>
        </View>*/}

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
