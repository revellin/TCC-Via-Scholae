import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const ButtonNext = () => {
  return(
     <TouchableOpacity style={styles.buttonNext}>
        <Text style={styles.nextButtonText}>Next</Text>
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
  },

  nextButtonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});
