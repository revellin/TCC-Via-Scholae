import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  backgorund-color: ${props => props.theme.backgorund};
`

export const ContainerLogo = styled.View`
  background-color: "#D2A236";
  justify-content: "center";
  align-items: "center";
  width: 430;
  height: 420;
`
export const styles = StyleSheet.create({
  //Estilização para o contêiner do formulário
  formContainer: {
    paddingHorizontal: 20, //Espaçamento interno horinzontal
    paddingVertical: 30, //Espaçamento interno vertical
  },

  //Estilização para o contêiner das linhas e o texto or
  lineContainer: {
    flexDirection: "row", //Organiza os elementos em linha
    alignItems: "center", //Alinha os elementos ao centro verticalmente
    paddingBottom: 15, //Espaçamento inferior
  },

  line: {
    flex: 1,
  },

  //Estilização do texto entre as linhas
  orText: {
    marginHorizontal: 10, //Espaçamento horizontal
    fontSize: 15, //Tamnho da fonte
    color: "#E9B224", //Cor do texto
  },
});
