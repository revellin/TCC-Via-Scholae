import React from 'react'
import { BtnManageRoutes, BtnManegeRoutesText } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'

export const BtnRotas = () => {
  const theme = useTheme();
  const navigation = useNavigation()
  return (
    <BtnManageRoutes onPress={() => navigation.navigate('ExibirRota')}>
      <Ionicons name="map" size={20} color={theme.text} />
      <BtnManegeRoutesText>Rotas</BtnManegeRoutesText>
    </BtnManageRoutes>
  )
}
