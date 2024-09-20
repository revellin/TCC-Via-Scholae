// Importa o React
import React from 'react'
// Importa componentes do React Native
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
// Importa o hook useNavigation para permitir navegação entre telas
import { useNavigation } from '@react-navigation/native'
// Importa a biblioteca de ícones Ionicons do Expo
import { Ionicons } from '@expo/vector-icons'
// Importa um ícone personalizado de acessibilidade
import { IconAccessibility } from '../../../../assets/icons'

// Define o componente funcional ButtonAccessibility
export const ButtonAccessibility = () => {
  // Obtém o objeto de navegação
  const navigation = useNavigation()

  // Retorna um botão que, ao ser pressionado, navega para a tela de Acessibilidade
  return (
    <TouchableOpacity
      style={styles.settingsOption}
      onPress={() => navigation.navigate('Accessibility')}
    >
      <View style={styles.iconTextContainer}>
        {/* Renderiza o ícone de acessibilidade */}
        <IconAccessibility />
        {/* Renderiza o texto do botão */}
        <Text style={styles.optionText}>Acessibilidade</Text>
      </View>
      {/* Renderiza um ícone de seta para indicar navegação */}
      <Ionicons name="chevron-forward-outline" size={24} color="black" />
    </TouchableOpacity>
  )
}

// Define os estilos para o componente
const styles = StyleSheet.create({
  // Estilização do botão de acessibilidade
  settingsOption: {
    flexDirection: 'row', // Alinha os elementos horizontalmente
    justifyContent: 'space-between', // Distribui o espaço entre os elementos
    alignItems: 'center', // Centraliza verticalmente os itens
    paddingVertical: 15, // Adiciona espaçamento vertical
    borderBottomWidth: 1, // Adiciona uma borda inferior
    borderBottomColor: '#000000', // Define a cor da borda inferior
  },
  iconTextContainer: {
    flexDirection: 'row', // Alinha o ícone e o texto horizontalmente
    alignItems: 'center', // Centraliza verticalmente o ícone e o texto
  },
  textContainer: {
    marginLeft: 10, // Espaçamento à esquerda do texto
  },
  optionText: {
    fontSize: 16, // Define o tamanho da fonte do texto
    marginLeft: 12, // Espaçamento à esquerda do texto
  },
})
