import React from 'react'
import {
  BtnCriançaOption,
  IconCrContainer,
  OptionTextCr,
} from './styles'
import { useNavigation } from '@react-navigation/native'
//Importa a bibloteca de icones
import { Ionicons } from '@expo/vector-icons'
import { Children } from '../../../../assets/icons'

export const ButtonChildrenSettings = () => {
  const navigation = useNavigation()
  return (
    <BtnCriançaOption onPress={() => navigation.navigate('')}>
      <IconCrContainer>
        <Children />
        <OptionTextCr>Crianças</OptionTextCr>
      </IconCrContainer>
      <Ionicons name="chevron-forward-outline" size={24} color="black" />
    </BtnCriançaOption>
  )
}
