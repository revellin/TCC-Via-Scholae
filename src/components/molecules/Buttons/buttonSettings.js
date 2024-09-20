import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export const ButtonSettings = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.buttonSettings} onPress={() => navigation.navigate('Settings')}>
        <FontAwesome name="cog" size={25} color="black" />
        <Text style={styles.settingsText}>Configurações</Text>
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
