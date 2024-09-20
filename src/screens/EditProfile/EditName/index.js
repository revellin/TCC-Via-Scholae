//importa o react
import React from 'react';
//importa os componentes do react-native
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
//Importa os icones
import AntDesign from '@expo/vector-icons/AntDesign';


// Função principal que define a tela de edição de nome
export const EditName = () => {
  return (
    //Container principal
    <View style={styles.container}>

      {/* Container para o cabeçalho da tela */}
      <View style={styles.header}>

        {/* Botão de retorno */}
        <View style={styles.return}>
          <TouchableOpacity>
            {/* Ícone para voltar */}
            <AntDesign name="left" size={30} color="black" />
          </TouchableOpacity>
        </View>

        {/* Título da tela */}
        <Text style={styles.title}>Nome</Text>

        {/* Botão de confirmação */}
        <View style={styles.check}>
          <TouchableOpacity>
            {/* Ícone de comfirmação */}
            <AntDesign name="check" size={30} color="#D2A236" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Container para o formulário de edição de nome */}
      <View style={styles.miniform}>
        {/* Rótulo para o campo de nome */}
        <Text style={styles.label}>
          Name
        </Text>
        {/* Campo de entrada para o nome */}
        <TextInput
          style={styles.input} placeholder='Caio' />
      </View>
    </View>
  );
};