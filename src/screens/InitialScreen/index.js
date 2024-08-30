// Importa o React
import React from "react";
// Importa os componentes do React-Native
import { View, Text, StyleSheet } from "react-native";
import {
  CustomTitleText,
  CustomLogo,
  CustomLabelText,
  CustomInput,
  ButtonContinue,
  ButtonRegister,
} from "../../components";

//Cria o componente principal do APP
export const InitialScreen = () => {
  //const router = useRouter();
  return (
    // Container principal que engloba a tela toda
    <View style={styles.container}>
      {/* Container da logo */}
      <View style={styles.containerLogo}>
        {/* Inserindo a imagem */}
        <CustomLogo />
      </View>

      {/* Container do Formulário */}
      <View style={styles.formContainer}>
        {/* Título */}
        <CustomTitleText>Get Started</CustomTitleText>
        {/* Label */}
        <CustomLabelText>Digite seu telefone</CustomLabelText>
        {/* Cria um TextInput do tipo numerico (keyboardType="numeric") */}
        <CustomInput placeholder="Insira seu Telefone" keyboardType="numeric" />
        <CustomLabelText>Digite sua senha</CustomLabelText>
        {/* Cria um TextInput que oculta o texto enquanto digita para senha (secureTextEntry)*/}
        <CustomInput placeholder="Digite sua senha" secureTextEntry={true} />
        {/* Define a rota do botão "Continue" */}

        <ButtonContinue></ButtonContinue>

        {/* Container da linha entre os botões */}
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
          {/* Texto entre as duas linhas */}
          <Text style={styles.orText}>or</Text>
          <View style={styles.line}></View>
        </View>

        {/* Define a rota do botão "Register" */}
        <ButtonRegister></ButtonRegister>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //Estilização do contêiner principal
  container: {
    flex: 1, //Faz o container ocupar a tela toda
    backgroundColor: "#ffffff", //Define a cor de fundo
  },

  //Estilização do contêiner da logo
  containerLogo: {
    flex: 3, //Faz com que o container ocupe 3/7 da tela
    backgroundColor: "#D2A236", //Define a cor de fundo como amarelo
    justifyContent: "center", //Centraliza verticalmente o conteúdo
    alignItems: "center", //Centraliza horizontalmente o conteúdo
  },

  //Estilização para o contêiner do formulário
  formContainer: {
    flex: 4, //Faz com que o container ocupe 4/7 da tela
    paddingHorizontal: 20, //Espaçamento interno horinzontal
    paddingVertical: 30, //Espaçamento interno vertical
  },

  //Estilização para o contêiner das linhas e o texto or
  lineContainer: {
    flexDirection: "row", //Organiza os elementos em linha
    alignItems: "center", //Alinha os elementos ao centro verticalmente
    paddingBottom: 15, //Espaçamento inferior
  },

  //Estilo para a linha
  line: {
    flex: 1, //Ocupa o espaço disponível na horizontal
    height: 2, //Espressura da linha
    backgroundColor: "#E9B224", //Cor da linha
  },

  //Estilização do texto entre as linhas
  orText: {
    marginHorizontal: 10, //Espaçamento horizontal
    fontSize: 15, //Tamnho da fonte
    color: "#E9B224", //Cor do texto
  },
});
