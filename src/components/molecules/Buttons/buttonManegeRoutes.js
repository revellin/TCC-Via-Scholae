import React from 'react'
import { BtnManageRoutes, BtnManegeRoutesText } from './styles'
import { Ionicons } from '@expo/vector-icons'

export const BtnRotas = () => {
  return (
    <BtnManageRoutes>
      <Ionicons name="map" size={20} color="white" />
      <BtnManegeRoutesText>Rotas</BtnManegeRoutesText>
    </BtnManageRoutes>
  )
}
