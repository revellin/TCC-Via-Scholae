import React from 'react'
import { Image, StyleSheet } from 'react-native'
import User from '../../../../assets/Foto-User-teste.jpg'

export const ProfilePic = () => {
  return (
    <Image style={styles.profilePic} source={User} />
  );
}

const styles = StyleSheet.create({
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#C4C4C4', // Placeholder color for the profile picture
    marginBottom: 10,
    resizeMode: 'cover', // Para garantir que a imagem preencha o círculo
  },
})
