import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";


export const ButtonNext = ({ onPress, children }) => {
  return(
     <TouchableOpacity style={styles.buttonNext} onPress={onPress}>
        <Text style={styles.nextButtonText}>{children}</Text>
     </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
 //Estilização do botão Next
 buttonNext: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    width: 232,
    alignSelf: 'center',
  },

  nextButtonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});
