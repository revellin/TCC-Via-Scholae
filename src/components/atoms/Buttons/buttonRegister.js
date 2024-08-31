import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const ButtonRegister = ({ onPress }) => {
  return(
     <TouchableOpacity style={styles.registerButton} onPress={onPress} >
        <Text style={styles.registerButtonText}>Register</Text>
     </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
 //Estilização do botão Register
 registerButton: {
    borderColor: "#262626", //Cor da borda
    borderRadius: 20, //Borda arredondada
    borderWidth: 1, //Espressura da borda
    paddingVertical: 10, //Espaçamento interno vertical
    paddingHorizontal: 20, //Espacamento interno horizontal
    width: 250, //Largura do botão
    alignItems: "center", //Centraliza o texto do botão
    alignSelf: "center", //Centraliza o botão na tela
  },

  //Estilização para o texto dentro do botão Register
  registerButtonText: {
    color: "#262626", //Cor do textp
    fontSize: 16, //Tamnho da fonte
  },
});
