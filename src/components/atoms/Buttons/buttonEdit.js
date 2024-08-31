import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
//Importa a bibloteca de icones
import { FontAwesome } from '@expo/vector-icons'

export const ButtonEdit = () => {
  return (
    <TouchableOpacity style={styles.buttonEdit}>
      <Text style={styles.editButtonText}>Edit</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  //Estilização do botão Edit
  buttonEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    padding: 11,
    borderRadius: 10,
    minWidth: '40%',
    justifyContent: 'center',
  },

  editButtonText: {
    marginLeft: 10,
    fontSize: 20,
    justifyContent: 'center',
  },
})
