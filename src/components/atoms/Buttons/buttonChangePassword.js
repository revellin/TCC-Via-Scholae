import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
//Importa a bibloteca de icones
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export const ButtonPassword = () => {
  return (
    <TouchableOpacity style={styles.buttonPassword}>
      <View style={styles.Content}>
        <MaterialIcons name="lock" size={24} color="black" />
        <Text style={styles.textButton}>Change your password</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  //Estilização do botão Password
  buttonPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  Content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 18,
    marginLeft: 16,
  },
})
