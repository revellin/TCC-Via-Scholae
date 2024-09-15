import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  //Estilização do contêiner principal
  container: {
    flex: 1, //Faz o container ocupar a tela toda
    backgroundColor: "#ffffff", //Define a cor de fundo
  },

  //Estilização do contêiner da logo
  containerLogo: {
    backgroundColor: "#D2A236", //Define a cor de fundo como amarelo
    justifyContent: "center", //Centraliza verticalmente o conteúdo
    alignItems: "center", //Centraliza horizontalmente o conteúdo
    width: 430,
    height: 420,
  },

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
