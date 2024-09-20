import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
//Importa a bibloteca de icones
import { FontAwesome } from '@expo/vector-icons'

export const ButtonChildren = () => {
  return (
    <TouchableOpacity style={styles.buttonChildren}>
      <FontAwesome name="users" size={25} color="black" />
      <Text style={styles.childrenButtonText}>Crianças</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  //Estilização do botão Children
  buttonChildren: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    padding: 11,
    borderRadius: 10,
    minWidth: '40%',
    justifyContent: 'center',
  },

  childrenButtonText: {
    marginLeft: 10,
    fontSize: 20,
    justifyContent: 'center',
  },
})
