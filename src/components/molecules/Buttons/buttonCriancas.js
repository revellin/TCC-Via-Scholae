import React from 'react'
import { BtnCrianças, BtnCriançasText } from './styles'
import { useNavigation } from '@react-navigation/native'
//Importa a bibloteca de icones
import { FontAwesome } from '@expo/vector-icons'

export const ButtonChildren = () => {
  const navigation = useNavigation()
  return (
    <BtnCrianças onPress={() => navigation.navigate('RegisterCrianca')}>
      <FontAwesome name="users" size={25} color="black" />
      <BtnCriançasText>Crianças</BtnCriançasText>
    </BtnCrianças>
  )
}
