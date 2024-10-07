import React from 'react'
import { BtnCrianças, BtnCriançasText } from './styles'
//Importa a bibloteca de icones
import { FontAwesome } from '@expo/vector-icons'

export const ButtonChildren = () => {
  return (
    <BtnCrianças>
      <FontAwesome name="users" size={25} color="black" />
      <BtnCriançasText>Crianças</BtnCriançasText>
    </BtnCrianças>
  )
}
