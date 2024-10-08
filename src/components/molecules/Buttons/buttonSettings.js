import React from 'react'
import { BtnSettings, TextBtnSettings } from './styles'
import { useNavigation } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const ButtonSettings = () => {
  const navigation = useNavigation()
  return (
    <BtnSettings onPress={() => navigation.navigate('Settings')}>
      <FontAwesome name="cog" size={25} color="black" />
      <TextBtnSettings>Configurações</TextBtnSettings>
    </BtnSettings>
  )
}
