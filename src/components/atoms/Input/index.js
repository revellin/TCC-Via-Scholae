import React from "react";
import { TextInput, StyleSheet } from "react-native";

export const CustomInput = ({ placeholder, keyboardType, secureTextEntry, onChangeText, value, style }) => {
  return( 
    <TextInput 
      style={[styles.input, style]} 
      placeholder={placeholder} 
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry} 
      onChangeText={onChangeText}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  // Estilização das inputs
  input: {
    height: 40, // Altura
    borderColor: "#262626", // Cor da borda
    borderWidth: 1, // Espessura da borda
    marginBottom: 20, // Margem inferior
    paddingHorizontal: 10, // Espaçamento interno horizontal
    borderRadius: 10,
  },
});
