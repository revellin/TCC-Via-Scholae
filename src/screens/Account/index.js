//Importa o React
import React from 'react'
//Importa os componentes do React-Native
import { View, Text, StyleSheet } from 'react-native'
import { ProfilePic, ButtonChildren, ButtonEdit, ButtonSettings, Line } from '../../components'

export const Account = () => {
  return (
    //Container princiapl
    <View style={styles.container}>
      {/* Conteiner do profile*/}
      <View style={styles.profileContainer}>
        {/* Foto */}
        <View style={styles.profilePic}>
          {/* Adiciona a foto*/}
          <ProfilePic />
        </View>
        {/* Nome */}
        <Text style={styles.profileName}>Matheus Romano</Text>
      </View>

      {/* Container dos botoes */}
      <View style={styles.buttonsContainer}>
        <ButtonChildren></ButtonChildren>
        <ButtonEdit></ButtonEdit>
      </View>

      {/* linha */}
      <Line></Line>

      {/* Container Settings */}
      <ButtonSettings></ButtonSettings>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#ffffff',
  },

  profileContainer: {
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#DADADA', // Cor de fundo atrás da foto
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    width: 358,
    height: 185,
    elevation: 4,
    marginTop: 90,
  },

  profilePic: {
    position: 'absolute',
    zIndex: 1,
    marginTop: -60,
  },

  profileName: {
    fontSize: 30,
    fontFamily: 'SourceSansPro_400Regular',
    marginTop: 25,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
})
