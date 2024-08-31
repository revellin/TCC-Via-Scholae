import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

export const ButtonSettings = () => {
  return (
    <TouchableOpacity style={styles.buttonSettings}>
        <FontAwesome name="cog" size={25} color="black" />
        <Text style={styles.settingsText}>Settings</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  //Estilização do botão Edit
  buttonSettings: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  settingsText: {
    marginLeft: 15,
    fontSize: 20,
  },
})
