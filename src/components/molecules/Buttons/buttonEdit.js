import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const ButtonEdit = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.buttonEdit} onPress={() => navigation.navigate('EditProfile')}>
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
