import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native'

export const ButtonNext = () => {
  const navigation = useNavigation()
  return(
     <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate('Home')}>
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
    width: 232,
    alignSelf: 'center',
  },

  nextButtonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});
