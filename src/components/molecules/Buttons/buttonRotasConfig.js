import React from 'react'
import {
  BtnRotasOption,
  IconRotasContainer,
  OptionTextRotas,
} from './styles'
import { useNavigation } from '@react-navigation/native'
//Importa a bibloteca de icones
import { Ionicons } from '@expo/vector-icons'

export const ButtonRotasSettings = () => {
  const navigation = useNavigation()
  return (
    <BtnRotasOption onPress={() => navigation.navigate('RegisterCrianca')}>
      <IconRotasContainer>
      <Ionicons name="map" size={20} color="white" />
        <OptionTextRotas>Rotas</OptionTextRotas>
      </IconRotasContainer>
      <Ionicons name="chevron-forward-outline" size={24} color="black" />
    </BtnRotasOption>
  )
}
