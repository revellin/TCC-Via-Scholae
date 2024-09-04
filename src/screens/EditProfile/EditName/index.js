//importa o react
import React from 'react';
//importa os componentes do react-native
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
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
        <Text style={styles.title}>Name</Text>

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
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Permite que o container cresça conforme o conteúdo
    padding: 20, // Adiciona espaçamento interno
    backgroundColor: '#ffffff', // Cor de fundo do container
  },

  header: {
    flexDirection: 'row', // Organiza os itens horizontalmente
    alignItems: 'center', // Alinha os itens verticalmente no centro
    justifyContent: 'space-between', // Distribui os itens com espaço entre eles
    width: '100%', // Garante que o cabeçalho ocupe toda a largura disponível
    marginTop: 20, // Espaço acima do cabeçalho
    marginBottom: 25, // Espaço abaixo do cabeçalho
  },

  return: {
    // Estilo para o botão de retorno (nenhum estilo definido ainda)
  },

  title: {
    fontSize: 30, // Tamanho da fonte do título
    fontWeight: 'bold', // Torna o texto em negrito
  },

  check: {
    marginTop: 7, // Espaço acima do botão de confirmação
  },

  label: {
    fontSize: 20, // Tamanho da fonte do rótulo
    marginLeft: 20, // Espaço à esquerda do rótulo
  },

  input: {
    height: 40, // Altura do campo de entrada
    width: 350, // Largura do campo de entrada
    borderColor: '#262626', // Cor da borda do campo de entrada
    borderWidth: 1, // Largura da borda do campo de entrada
    marginBottom: 10, // Espaço abaixo do campo de entrada
    paddingHorizontal: 8, // Espaçamento interno horizontal do campo de entrada
    borderRadius: 10, // Bordas arredondadas do campo de entrada
    marginLeft: 20, // Espaço à esquerda do campo de entrada
  },
});