import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

export const ButtonDelete = () => {
  return (
    <View style={styles.deleteButtonContainer}>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  //Estilização do botão Password
  deleteButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  deleteButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  deleteButtonText: {
    fontSize: 16,
    color: 'black',
  },
})
