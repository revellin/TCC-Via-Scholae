//Importa o React
import React from 'react'
//Importa os componentes do React-Native
import { View, Text } from 'react-native'
import { ProfilePic, ButtonChildren, ButtonEdit, ButtonSettings, Line } from '../../components'
import { styles } from './styles';

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
        <Text style={styles.subTitle}>matheusemailfake@gmail.com</Text>
        <Text style={styles.subTitle}>+55 11 12345-6789</Text>
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