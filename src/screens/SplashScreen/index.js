// Importa o React
import React from 'react';
// Importa os componentes (View, Text, TextInput, TouchableOpacity, StyleSheet, Image) do React-Native
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
//import {router, useRouter} from 'expo-router'; //Importa o "useRouter" e "router", que permite a navegação entre as telas
import Logo_ViaScholae from '../../../ViaScholae/assets/Logo_ViaScholae.png'

//Cria o componente principal do APP
export default function SplashScreen() {
  //const router = useRouter();
  return (
    // Container principal que engloba a tela toda
    <View style={styles.container}>
      {/* Container da logo */}
      <View style={styles.containerLogo}>
        {/* Inserindo a imagem */}
        <Image style={styles.img} source={Logo_ViaScholae}></Image>
      </View>

      {/* Container do Formulário */}
      <View style={styles.formContainer}>
        {/* Título */}
        <Text style={styles.title}>Get Started</Text>
        {/* Label */}
        <Text style={styles.label}>Digite seu Telefone</Text>
        {/* Cria um TextInput do tipo numerico (keyboardType="numeric") */}
        <TextInput 
        style={styles.input} 
        placeholder="Enter your password" 
        keyboardType="numeric"/>
        <Text style={styles.label}>Digite sua senha</Text>
        {/* Cria um TextInput que oculta o texto enquanto digita para senha (secureTextEntry)*/}
        <TextInput 
        style={styles.input} 
        placeholder="Enter your password" 
        secureTextEntry/>
        {/* Define a rota do botão "Continue" */}
        <TouchableOpacity style={styles.buttonContinue} onPress={() => router.push('...')}>
        {/* Texto do botão */}
        <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        {/* Container da linha entre os botões */}  
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
            {/* Texto entre as duas linhas */}
            <Text style={styles.orText}>or</Text>
          <View style={styles.line}></View>
        </View>

        {/* Define a rota do botão "Register" */}  
        <TouchableOpacity style={styles.registerButton} onPress={() => router.push('...')}>
        {/* Texto do botão */}
        <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   //Estilização do contêiner principal
   container: {
    flex: 1, //Faz o container ocupar a tela toda
    backgroundColor: '#ffffff', //Define a cor de fundo
  },

  //Estilização do contêiner da logo
  containerLogo: {
    flex: 3, //Faz com que o container ocupe 3/7 da tela
    backgroundColor: '#D2A236', //Define a cor de fundo como amarelo
    justifyContent: 'center', //Centraliza verticalmente o conteúdo
    alignItems: 'center', //Centraliza horizontalmente o conteúdo
  },

  //Estilização para a imagem (Logo)
  img: {
    width: 350, //Define a largura da imagem
    height: 350, //Define a altura da imagem
  },

  //Estilização para o contêiner do formulário
  formContainer: {
    flex: 4, //Faz com que o container ocupe 4/7 da tela
    paddingHorizontal: 20, //Espaçamento interno horinzontal
    paddingVertical: 30, //Espaçamento interno vertical
  },

  //Estilização para o título
  title: {
    fontSize: 40, //Tamnho da fonte
    textAlign: 'center', //Centraliza o texto
    marginBottom: 20, //Margem inferior
    fontWeight: 'bold', //Deixa o texto em negrito
    color: '262626', //Cor do texto
  },

  //Estilização dos textos das inputs
  label: {
    fontSize: 18, //Tamnho da fonte
    color: '#262626' //Cor do texto
  },

  //Estilização das inputs
  input: {
    height: 40, //Altura 
    borderColor: '#262626', //Cor da borda
    borderWidth: 1, //Espressura da borda
    marginBottom: 20, //Margem inferior
    paddingHorizontal: 10, //Espaçamento interno horizontal
    borderRadius: 10,
  },

  //Estilização do botão Continue
  buttonContinue: {
    backgroundColor: '#262626', //Cor do fundo
    paddingVertical: 10, //Espaçamento interno vertical
    paddingHorizontal: 20, //Espaçaento interno horizontal
    width: 250, //Largura do botão
    alignItems: 'center', //Centraliza o texto do botão
    marginBottom: 20, //Margem inferior
    borderRadius: 20, //Borda arredondando
    alignSelf: 'center', //Centraliza o botão
  },

  //Estilização do texto do botão Continue
  buttonText: {
    color: '#eeeeee', //Cor do texto
    fontSize: 16, //Tamanho da fonte
  },

  //Estilização para o contêiner das linhas e o texto or
  lineContainer: {
    flexDirection: 'row', //Organiza os elementos em linha
    alignItems: 'center', //Alinha os elementos ao centro verticalmente
    paddingBottom: 15, //Espaçamento inferior
  },

  //Estilo para a linha
  line: {
    flex: 1, //Ocupa o espaço disponível na horizontal
    height: 2, //Espressura da linha
    backgroundColor: '#E9B224', //Cor da linha
  },

  //Estilização do texto entre as linhas
  orText: {
    marginHorizontal: 10, //Espaçamento horizontal
    fontSize: 15, //Tamnho da fonte
    color: '#E9B224', //Cor do texto
  },

  //Estilização do botão Register
  registerButton: {
    borderColor: '#262626', //Cor da borda
    borderRadius: 20, //Borda arredondada
    borderWidth: 1, //Espressura da borda
    paddingVertical: 10, //Espaçamento interno vertical
    paddingHorizontal: 20, //Espacamento interno horizontal
    width: 250, //Largura do botão
    alignItems: 'center', //Centraliza o texto do botão
    alignSelf: 'center' //Centraliza o botão na tela
  },

  //Estilização para o texto dentro do botão Register
  registerButtonText: {
    color: '#262626', //Cor do textp
    fontSize: 16, //Tamnho da fonte
  },
});