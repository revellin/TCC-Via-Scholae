import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex-grow: 1;
  padding: 20px;
  background-color: #ffffff;
`

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding-horizontal: 26px;
  width: 100%;
  height: 250px;
  position: relative;
`
export const Form = styled.View`
  padding-horizontal: 10px;
`


export const styles = StyleSheet.create({

  return: {
    position: 'absolute', // Faz com que o ícone seja posicionado relativamente ao contêiner pai
    top: 20, // Distância do topo
    left: 2, // Distância da borda esquerda
    zIndex: 1, // Garante que o ícone fique sobre a imagem
  },

  img: {
    width: 300,
    height: 300,
  },

  title: {
    fontSize: 40,
    paddingRight: 240,
  },

  line: {
    height: 1,
    backgroundColor: '#D2A236',
    marginVertical: 3,
    marginBottom: 10,
  },
});
