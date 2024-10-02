//import o react
import React from 'react'
//importa os componentes do react native
import { TextInput } from 'react-native'
import { styles } from './styles'

export const CustomInput = ({
  placeholder, // Placeholder que aparece como dica no campo de entrada
  keyboardType, // Tipo de teclado a ser exibido (ex: numérico, padrão, e-mail, etc.)
  secureTextEntry, // Define se o campo de entrada é seguro (como para senhas)
  onChangeText, // Função chamada quando o texto muda
  value, // Valor do campo de entrada (controlado externamente)
  style, // Estilo personalizado que pode ser adicionado externamente
}) => {
  return (
    <TextInput
      // Combina o estilo predefinido com o estilo passado via props
      style={[styles.input, style]}
      placeholder={placeholder} // Define o placeholder do input
      keyboardType={keyboardType} // Define o tipo de teclado
      secureTextEntry={secureTextEntry} // Se true, o texto será ocultado (útil para senhas)
      onChangeText={onChangeText} // Função executada quando o texto é alterado
      value={value} // Valor atual do campo de entrada (input controlado)
    />
  )
}