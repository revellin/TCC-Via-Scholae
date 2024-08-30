import React from "react";
import { TextInput, StyleSheet } from "react-native";

export const CustomInput = ({placeholder, keyboardType, secureTextEntry}) => {
  return( 
    <TextInput style={styles.input} 
    placeholder={placeholder} 
    keyboardType={keyboardType}
    secureTextEntry={secureTextEntry} ></TextInput>
  );
}

const styles = StyleSheet.create({
  //Estilização das inputs
  input: {
    height: 40, //Altura
    borderColor: "#262626", //Cor da borda
    borderWidth: 1, //Espressura da borda
    marginBottom: 20, //Margem inferior
    paddingHorizontal: 10, //Espaçamento interno horizontal
    borderRadius: 10,
  },
});
