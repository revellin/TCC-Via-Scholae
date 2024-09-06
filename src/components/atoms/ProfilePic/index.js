import React from 'react'
import { Image, StyleSheet } from 'react-native'
import User from '../../../../assets/Foto-User-teste.jpg'

export const ProfilePic = ({ style }) => {
  return (
    <Image style={[styles.profilePic, style]} source={User} />
  );
}

const styles = StyleSheet.create({
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#C4C4C4', // Placeholder color for the profile picture
    marginBottom: 10,
    resizeMode: 'cover', // Para garantir que a imagem preencha o círculo
  },
})
