import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import User from './assets/Foto-User-teste.jpg'

export const AccountScreen = () => {
  return (
    <View style={styles.container}>

      {/* Profile Background with Picture */}
      <View style={styles.profileBackground}>
        <View style={styles.profilePic}>
          <Image style={styles.profilePic} source={User} />
        </View>
        <Text style={styles.profileName}>Matheus Romano</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="users" size={25} color="black" />
          <Text style={styles.buttonText}>Children</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Settings */}
      <TouchableOpacity style={styles.settingsContainer}>
        <FontAwesome name="cog" size={25} color="black" />
        <Text style={styles.settingsText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  profileBackground: {
    alignItems: 'center',
    backgroundColor: '#E0E0E0', // Cor de fundo atrás da foto
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },

  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#C4C4C4', // Placeholder color for the profile picture
    marginBottom: 10,
    resizeMode: 'cover', // Para garantir que a imagem preencha o círculo
  },

  profileName: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    padding: 11,
    borderRadius: 10,
    minWidth: '40%',
    justifyContent: 'center',
  },

  buttonText: {
    marginLeft: 10,
    fontSize: 20,
    justifyContent: 'center',
  },

  divider: {
    height: 2,
    backgroundColor: '#D2A236',
    marginVertical: 20,
  },

  settingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  settingsText: {
    marginLeft: 15,
    fontSize: 20,
  },
});
