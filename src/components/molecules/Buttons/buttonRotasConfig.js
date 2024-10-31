import React from 'react'
import {
  BtnRotasOption,
  IconRotasContainer,
  OptionTextRotas,
} from './styles'
import { useNavigation } from '@react-navigation/native'
//Importa a bibloteca de icones
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native';

export const ButtonRotasSettings = () => {
  const navigation = useNavigation()
  const theme = useTheme();
  return (
    <BtnRotasOption onPress={() => navigation.navigate('ExibirRota')}>
      <IconRotasContainer>
      <Ionicons name="map" size={20} color={theme.text} />
        <OptionTextRotas>Rotas</OptionTextRotas>
      </IconRotasContainer>
      <Ionicons name="chevron-forward-outline" size={24} color={theme.gray} />
    </BtnRotasOption>
  )
}
