// Importa o React
import React from "react";
// Importa os componentes do React-Native
import { View, Text } from "react-native";
import {
  CustomTitleText,
  CustomLogo,
  CustomLabelText,
  CustomInput,
  ButtonContinue,
  ButtonRegister,
  Line
} from "../../components";
import { styles } from './styles';

//Cria o componente principal do APP
export const Initial = () => {
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
          <Line style={styles.line}></Line>
          {/* Texto entre as duas linhas */}
          <Text style={styles.orText}>or</Text>
          <Line style={styles.line}></Line>
        </View>

        {/* Define a rota do botão "Register" */}
        <ButtonRegister></ButtonRegister>
      </View>
    </View>
  );
};