// Importa o React
import React from 'react';
// Importa componentes do React Native
import { Image, StyleSheet } from 'react-native';
// Importa a imagem do usuário 9apenas para teste)
import User from '../../../../assets/Foto-User-teste.jpg';

// Define o componente funcional ProfilePic
export const ProfilePic = ({ style }) => {
  // Retorna um elemento Image que exibe a foto do usuário
  return (
    <Image style={[styles.profilePic, style]} source={User} />
  );
}

// Define os estilos para o componente
const styles = StyleSheet.create({
  profilePic: {
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem
    borderRadius: 50, // Arredonda os cantos para criar um efeito circular
    backgroundColor: '#C4C4C4', // Cor de fundo como espaço reservado para a imagem
    marginBottom: 10, // Espaçamento abaixo da imagem
    resizeMode: 'cover', // Garante que a imagem preencha o círculo mantendo a proporção
  },
});
