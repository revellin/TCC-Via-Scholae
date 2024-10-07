import React from 'react'
import {
  BtnAcessibilidadeOption,
  IconAcesContainer,
  OptionTextAces,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { IconAccessibility } from '../../../../assets/icons'

export const ButtonAccessibility = () => {
  const navigation = useNavigation()

  return (
    <BtnAcessibilidadeOption
      onPress={() => navigation.navigate('Accessibility')}
    >
      <IconAcesContainer>
        <IconAccessibility />
        <OptionTextAces>Acessibilidade</OptionTextAces>
      </IconAcesContainer>
      <Ionicons name="chevron-forward-outline" size={24} color="black" />
    </BtnAcessibilidadeOption>
  )
}
